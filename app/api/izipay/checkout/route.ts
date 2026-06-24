import {NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { amount, currency } = await request.json();

        // 1. Nuevas variables de entorno según tu captura del nuevo panel
        const merchantCode = process.env.IZIPAY_MERCHANT_CODE; // Código del Comercio (ej: 4001834)
        const apiKey = process.env.IZIPAY_API_KEY;             // Clave API Nuevo Botón de Pagos (Recuadro verde)

        const endpoint = "https://sandbox-api-pw.izipay.pe/security/v1/Token/Generate";

        if (!merchantCode || !apiKey) {
            console.error("❌ Faltan configurar IZIPAY_MERCHANT_CODE o IZIPAY_API_KEY en .env.local");
            return NextResponse.json({ error: "Credenciales de nueva API no configuradas" }, { status: 500 });
        }

        // 2. Estructura de autenticación que pide el nuevo botón de pagos de Izipay
        // Generalmente solicita las credenciales en los Headers o como Basic Auth.
        // La documentación estándar del Nuevo Botón pide pasarlo firmado o como Basic Auth:
        const authString = Buffer.from(`${merchantCode}:${apiKey}`).toString('base64');

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authString}`,
                'Content-Type': 'application/json',
                // Algunos endpoints nuevos de Izipay piden el código de comercio explícito en el header:
                'X-Merchant-Code': merchantCode
            },
            body: JSON.stringify({
                // Datos mínimos requeridos por la API de seguridad para generar la intención de pago
                amount: amount || "149.00",
                currency: currency || "PEN",
                transactionId: `TX-${Date.now()}`
            }),
        });

        if (!response.ok) {
            const errorTexto = await response.text();
            console.error(`❌ Error en la nueva API de Izipay. Status: ${response.status}. Detalle:`, errorTexto);
            return NextResponse.json({ error: `Error generando Token de Sesión: Status ${response.status}` }, { status: response.status });
        }

        const data = await response.json();
        console.log("✅ Token de Sesión generado con éxito:", data);

        // Ajusta los campos mapeados según la respuesta exacta que te devuelve su JSON (usualmente devuelve response.token)
        const tokenSession = data.response?.token || data.tokenSession || data.token;

        if (!tokenSession) {
            return NextResponse.json({ error: "La API de Izipay no retornó un token válido." }, { status: 400 });
        }

        // 3. Devolver el token dinámico al frontend
        return NextResponse.json({ tokenSession: tokenSession });

    } catch (error) {
        console.error("Izipay New API Backend Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
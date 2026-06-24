"use client";
import {useState} from 'react';
import Script from 'next/script';

// Declaramos los tipos globales para que TypeScript no se queje de window.Izipay
declare global {
    interface Window {
        Izipay: any;
    }
}

export default function Payment() {
    const [loading, setLoading] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            // 1. Llamar a tu backend para obtener las llaves de la sesión moderna
            const res = await fetch('/api/izipay/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 149.00, currency: 'PEN' }),
            });
            const data = await res.json();

            // Asegurarnos de que el script cargó y que el backend nos dio las llaves correspondientes
            if (scriptLoaded && window.Izipay && data.tokenSession && data.keyRsa) {

                // 2. Definir la configuración de datos del pedido y el diseño (Cian)
                const iziConfig = {
                    transactionId: `TX-${Date.now()}`,
                    action: 'pay',
                    merchantCode: '4001061', // Reemplaza por tu código de comercio de pruebas si es diferente
                    order: {
                        orderNumber: `ORDER-${Date.now()}`,
                        currency: 'PEN',
                        amount: '149.00',
                        processType: 'AT',
                        merchantBuyerId: 'BUYER-001',
                        dateTimeTransaction: new Date().toISOString().slice(0,19).replace(/[-T:]/g,"") // Formato AAAAMMDDHHMMSS requerido por pasarelas
                    },
                    appearance: {
                        customTheme: {
                            colors: {
                                primary: {
                                    background: "#0CE4F5", // ¡El borde cian moderno!
                                    color: '#FFFFFF'
                                }
                            }
                        },
                        render: {
                            typeForm: 'pop-up' // Abre el modal flotante estilizado
                        }
                    },
                    billing: {
                        firstName: 'Lucho',
                        lastName: 'Torres',
                        email: 'luchotorres@izipay.pe',
                        phoneNumber: '989897960',
                        street: 'Av. Jorge Chávez 275',
                        city: 'Lima',
                        state: 'Lima',
                        country: 'PE',
                        postalCode: '15000',
                        documentType: 'DNI',
                        document: '12345678'
                    }
                };

                // 3. Inicializar el Checkout Nativo
                const checkout = new window.Izipay({ config: iziConfig });

                // 4. Cargar el formulario en pantalla
                checkout.LoadForm({
                    authorization: data.tokenSession,
                    keyRSA: data.keyRsa,
                    callbackResponse: (response: any) => {
                        console.log("Resultado del pago recibido:", response);
                        // Aquí puedes redirigir al usuario a una página de éxito si response.code === "00"
                    },
                });

            } else {
                alert("Error al cargar las llaves de sesión o el script de Izipay.");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
            {/* CARGA DEL SCRIPT DE IZIPAY PERÚ MODERNO */}
            <Script
                src="https://sandbox-checkout.izipay.pe/payments/v1/js/index.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log("🚀 Script moderno de Izipay Perú Cargado");
                    setScriptLoaded(true);
                }}
            />

            <h2>Checkout de Prueba Moderno</h2>

            <button
                onClick={handleCheckout}
                disabled={loading}
                style={{ padding: '10px 20px', background: '#0CE4F5', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '8px', fontWeight: 'bold' }}
            >
                {loading ? 'Preparando pasarela...' : 'Pagar S/. 149.00'}
            </button>

            {/* NOTA: Ya no necesitas divs vacíos como kr-pan, el script inyecta el modal encima de todo de forma autónoma */}
        </div>
    );
}
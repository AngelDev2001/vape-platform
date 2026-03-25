import {ContentWidth} from "@/components/ContentWidth";
import {Button} from "@/components/ui/button";
import {CheckCircle2, ChevronRight, Truck} from "lucide-react";

const orders = [
    {
        id: "PLN-98234",
        date: "24 MAR 2026",
        status: "EN CAMINO",
        total: "S/ 135.00",
        items: 3,
        color: "var(--primary)",
    },
    {
        id: "PLN-98112",
        date: "15 MAR 2026",
        status: "ENTREGADO",
        total: "S/ 45.00",
        items: 1,
        color: "var(--muted-foreground)",
    },
];

export default function Pedidos() {
    return (
        <main className="py-20 bg-background min-h-screen">
            <ContentWidth>
                {/* Header estilo Manifiesto */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8 gap-6">
                    <div>
            <span className="text-primary text-xs font-black tracking-[0.3em] uppercase block mb-2">
              HISTORIAL DE CLIENTE
            </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                            MIS <br /> <span className="text-primary">PEDIDOS.</span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                            USER_ID: 00923-X <br />
                            LIMA, PERÚ
                        </p>
                    </div>
                </div>

                {/* Lista de Pedidos */}
                <div className="flex flex-col gap-[1px] bg-white/10 border border-white/10">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-background group hover:bg-zinc-900/50 transition-colors p-6 md:p-10 flex flex-col md:flex-row md:items-center gap-8"
                        >
                            {/* ID y Fecha */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="h-2 w-2 bg-primary animate-pulse" />
                                    <span className="text-xs font-bold tracking-widest text-muted-foreground">#{order.id}</span>
                                </div>
                                <h3 className="text-3xl font-black tracking-tighter uppercase italic">
                                    {order.date}
                                </h3>
                            </div>

                            {/* Status Visual */}
                            <div className="flex-1 flex flex-col gap-2">
                                <span className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">ESTADO:</span>
                                <div className="flex items-center gap-3">
                                    {order.status === "EN CAMINO" ? <Truck className="h-5 w-5 text-primary" /> : <CheckCircle2 className="h-5 w-5 text-muted-foreground" />}
                                    <span className="text-xl font-black tracking-tighter uppercase">
                    {order.status}
                  </span>
                                </div>
                            </div>

                            {/* Total e Items */}
                            <div className="flex-1 md:text-right flex flex-col md:items-end gap-1">
                                <span className="text-[10px] font-black tracking-widest text-muted-foreground uppercase">TOTAL ({order.items} ITEMS):</span>
                                <span className="text-3xl font-black tracking-tighter text-primary">{order.total}</span>
                            </div>

                            {/* Acción */}
                            <div className="md:ml-10">
                                <Button
                                    variant="outline"
                                    className="h-16 w-full md:w-16 rounded-none border-white/10 hover:bg-primary hover:text-black hover:border-primary transition-all p-0"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Técnico */}
                <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-4 opacity-50">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] max-w-sm">
                        Si tienes problemas con tu pedido, contacta a soporte técnico mencionando tu ID de manifiesto.
                        No compartas tus datos de acceso con nadie.
                    </p>
                    <Button variant="link" className="text-[9px] p-0 h-auto font-black uppercase tracking-[0.2em] text-white">
                        Descargar historial completo (CSV)
                    </Button>
                </div>
            </ContentWidth>
        </main>
    );
}
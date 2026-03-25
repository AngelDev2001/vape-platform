import {ContentWidth} from "@/components/ContentWidth";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ArrowRight, ShieldCheck, Truck} from "lucide-react";

export default function CheckoutPage() {
    return (
        <main className="py-20 bg-background min-h-screen">
            <ContentWidth>
                {/* Header de la Operación */}
                <div className="mb-16 border-b border-white/10 pb-8">
          <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase block mb-2">
            SECURE_CHECKOUT // SESSION_ID: 8829-X
          </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                        FINALIZAR <br /> <span className="text-primary">PEDIDO.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* COLUMNA IZQUIERDA: FORMULARIO TÉCNICO */}
                    <div className="lg:col-span-7 space-y-12">
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-8 w-8 bg-white text-black flex items-center justify-center font-black text-xs">01</div>
                                <h2 className="text-xl font-black tracking-widest uppercase">DATOS DE ENTREGA</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">NOMBRE_COMPLETO</label>
                                    <Input className="rounded-none border-white/10 bg-white/5 h-14 focus-visible:ring-primary uppercase font-bold text-xs tracking-widest" placeholder="EJ. JUAN PÉREZ" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">TELÉFONO_CONTACTO</label>
                                    <Input className="rounded-none border-white/10 bg-white/5 h-14 focus-visible:ring-primary uppercase font-bold text-xs tracking-widest" placeholder="+51 900 000 000" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">DIRECCIÓN_EXACTA</label>
                                    <Input className="rounded-none border-white/10 bg-white/5 h-14 focus-visible:ring-primary uppercase font-bold text-xs tracking-widest" placeholder="AV. LAS PALMERAS 123, LIMA" />
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-8 w-8 bg-white text-black flex items-center justify-center font-black text-xs">02</div>
                                <h2 className="text-xl font-black tracking-widest uppercase">MÉTODO DE PAGO</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                {["YAPE / PLIN", "TRANSFERENCIA", "TARJETA"].map((pago) => (
                                    <button key={pago} className="h-16 border border-white/10 hover:border-primary transition-all font-black text-[10px] tracking-widest uppercase flex items-center justify-center group hover:bg-white/5">
                                        {pago}
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* COLUMNA DERECHA: RESUMEN DE MANIFIESTO */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 border border-white/10 bg-zinc-900/30 p-8 flex flex-col gap-8">
                            <h3 className="text-xs font-black tracking-[0.3em] text-primary uppercase border-b border-white/10 pb-4">
                                RESUMEN_ORDEN
                            </h3>

                            {/* Items del Carrito */}
                            <div className="space-y-6">
                                {[1, 2].map((i) => (
                                    <div key={i} className="flex justify-between items-center group">
                                        <div>
                                            <h4 className="font-black text-sm uppercase leading-none mb-1 group-hover:text-primary transition-colors">PULENTA PRO MAX</h4>
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">CANT: 01 // MELON ICE</p>
                                        </div>
                                        <span className="font-black text-sm tracking-tighter italic">S/ 45.00</span>
                                    </div>
                                ))}
                            </div>

                            {/* Totales con líneas de 1px */}
                            <div className="border-t border-white/10 pt-6 space-y-3">
                                <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                                    <span>SUBTOTAL</span>
                                    <span>S/ 90.00</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                                    <span>ENVÍO_LIMA</span>
                                    <span>S/ 10.00</span>
                                </div>
                                <div className="flex justify-between items-end pt-4 border-t border-white/20">
                                    <span className="text-xs font-black uppercase tracking-[0.2em] mb-1">TOTAL_FINAL</span>
                                    <span className="text-4xl font-black tracking-tighter text-primary">S/ 100.00</span>
                                </div>
                            </div>

                            {/* Botón de Acción Final */}
                            <Button className="w-full h-16 rounded-none bg-primary text-black hover:bg-white transition-all font-black text-xs tracking-[0.3em] flex justify-between px-8 group">
                                CONFIRMAR COMPRA
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </Button>

                            {/* Trust Badges */}
                            <div className="flex justify-center gap-8 opacity-30 grayscale contrast-125 pt-4">
                                <ShieldCheck className="h-6 w-6" />
                                <Truck className="h-6 w-6" />
                            </div>
                        </div>
                    </div>

                </div>
            </ContentWidth>
        </main>
    );
}
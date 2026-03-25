import Link from "next/link";
import {Send} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ContentWidth} from "@/components/ContentWidth";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background py-12 lg:py-20">
            <ContentWidth>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            VAPE<span className="text-primary">.</span>PLATFORM
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                            Ingeniería de vapor avanzada y diseño urbano. Únete a nuestra comunidad para lanzamientos exclusivos.
                        </p>
                        <div className="flex max-w-sm items-center gap-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="bg-white/5 border-white/10 focus-visible:ring-primary h-11"
                            />
                            <Button size="icon" className="bg-primary text-black hover:bg-primary/90 h-11 w-11 shrink-0">
                                <Send className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Tienda</h4>
                        <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <Link href="/productos" className="hover:text-foreground transition-colors">Todos los productos</Link>
                            <Link href="/productos?cat=desechables" className="hover:text-foreground transition-colors">Desechables</Link>
                            <Link href="/productos?cat=liquidos" className="hover:text-foreground transition-colors">E-Liquids</Link>
                            <Link href="/productos?cat=accesorios" className="hover:text-foreground transition-colors">Accesorios</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Soporte</h4>
                        <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
                            <Link href="/pedidos" className="hover:text-foreground transition-colors">Seguimiento</Link>
                            <Link href="/faq" className="hover:text-foreground transition-colors">Preguntas Frecuentes</Link>
                            <Link href="/terminos" className="hover:text-foreground transition-colors">Términos de Servicio</Link>
                            <Link href="https://wa.me/tu-numero" className="hover:text-foreground transition-colors">WhatsApp Directo</Link>
                        </nav>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50">
                        © 2026 VAPE PLATFORM. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted-foreground/50">
                        <span>Diseñado en Perú</span>
                        <span className="text-primary/50">18+ Solo adultos</span>
                    </div>
                </div>
            </ContentWidth>
        </footer>
    );
}
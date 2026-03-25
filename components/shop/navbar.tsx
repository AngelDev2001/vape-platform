import Link from "next/link";
import {User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {CartDrawer} from "./CartDrawer";
import {ContentWidth} from "@/components/ContentWidth";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
            <ContentWidth>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-black tracking-tighter">
                        VAPE<span className="text-primary">.</span>PLATFORM
                    </Link>

                    {/* Navegación - Solo Desktop */}
                    <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <Link href="/productos" className="hover:text-primary transition-colors">Productos</Link>
                        <Link href="/pedidos" className="hover:text-primary transition-colors">Mis Pedidos</Link>
                        <Link href="/nosotros" className="hover:text-primary transition-colors">Comunidad</Link>
                    </nav>

                    {/* Acciones */}
                    <div className="flex items-center gap-2">

                        {/* Reemplazamos el Button anterior por el CartDrawer */}
                        <CartDrawer />

                        <div className="mx-2 h-4 w-px bg-white/10 hidden sm:block" />

                        {/* Autenticación */}
                        <div className="hidden sm:flex items-center gap-2">
                            <Button
                                variant="ghost"
                                className="text-xs font-bold uppercase tracking-widest hover:text-primary rounded-none"
                            >
                                Entrar
                            </Button>
                            <Button
                                className="bg-primary text-black hover:bg-primary/90 text-xs font-black uppercase tracking-widest px-5 rounded-none h-9"
                            >
                                Únete
                            </Button>
                        </div>

                        {/* Icono User para móvil */}
                        <Button variant="ghost" size="icon" className="sm:hidden rounded-none">
                            <User className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </ContentWidth>
        </header>
    );
}
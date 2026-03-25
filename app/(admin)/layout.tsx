import {Navbar} from "@/components/shop/navbar";
import {Footer} from "@/components/shop/footer";

export default function PanelLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        // Quitamos colores fijos y usamos bg-background y text-foreground
        // La selección ya está definida globalmente, pero la mantenemos aquí por seguridad
        <div className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">

            {/* Overlay de gradiente técnico adaptable */}
            <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-side_at_0%_0%,var(--muted),transparent)] opacity-20 dark:opacity-50" />

                {/* Textura de ruido sutil opcional para el look industrial */}
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col">
                <Navbar />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />
            </div>
        </div>
    );
}
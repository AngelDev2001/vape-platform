import {Vortex} from "@/components/ui/vortex";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full h-[85vh] overflow-hidden bg-background">
            <Vortex
                backgroundColor="transparent"
                rangeY={800}
                particleCount={200}
                baseHue={72} // Hue para el Cyber-Lime
                className="flex items-center justify-center w-full h-full"
            >
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                    {/* Tipografía brutalista: muy junta y pesada */}
                    <h1 className="text-6xl md:text-8xl font-black tracking-[calc(-0.05em)] leading-[0.9] text-foreground uppercase">
                        PULENTA <br />
                        <span className="text-primary">SERIES.</span>
                    </h1>

                    <p className="mt-6 max-w-lg text-base md:text-lg font-medium text-muted-foreground uppercase tracking-tight">
                        Ingeniería de vapor urbana. <br />
                        Sin vueltas, solo calidad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        {/* Botón Sólido sin sombras ni efectos extraños */}
                        <Button
                            asChild
                            className="bg-primary text-black hover:bg-primary/90 font-bold px-10 h-14 rounded-none border-none text-base"
                        >
                            <Link href="/productos">COMPRAR AHORA</Link>
                        </Button>

                        {/* Botón Outline limpio */}
                        <Button
                            asChild
                            variant="outline"
                            className="border-white/20 bg-transparent hover:bg-white/5 hover:text-white font-bold px-10 h-14 rounded-none text-base"
                        >
                            <Link href="/nosotros">COMUNIDAD</Link>
                        </Button>
                    </div>
                </div>
            </Vortex>

            {/* Línea de cierre inferior: un toque técnico real */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5" />
        </section>
    );
}
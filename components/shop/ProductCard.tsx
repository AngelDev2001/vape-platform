import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";

interface ProductProps {
    id: string;
    name: string;
    brand: string;
    price: string;
    flavor?: string;
}

export function ProductCard({ id, name, brand, price, flavor }: ProductProps) {
    return (
        <div className="group relative bg-background p-6 flex flex-col transition-colors hover:bg-zinc-900/50 border border-transparent">
            {/* Badge de Stock / Info arriba y Precio */}
            <div className="flex justify-between items-start mb-8">
        <span className="bg-primary text-black text-[10px] font-black px-2 py-0.5 uppercase tracking-tighter">
          STOCK DISPONIBLE
        </span>
                <span className="text-xl font-black tracking-tighter text-foreground">
          {price}
        </span>
            </div>

            {/* Espacio para la Imagen del Producto (Estética Técnica) */}
            <div className="aspect-square w-full bg-zinc-900/30 mb-8 flex items-center justify-center border border-white/5 relative overflow-hidden">
                {/* Decoración de esquina industrial */}
                <div className="absolute top-2 left-2 flex gap-1">
                    <div className="h-1 w-1 bg-primary" />
                    <div className="h-1 w-1 bg-primary/20" />
                </div>

                {/* Marca de agua técnica */}
                <div className="text-white/5 text-[8px] font-black absolute inset-0 p-2 break-all opacity-20 leading-none select-none pointer-events-none uppercase">
                    PULENTA_PRO_SPEC_CORE_MOD_{id}
                </div>

                <div className="text-white/10 text-[10px] font-bold uppercase tracking-widest group-hover:text-primary/20 transition-colors">
                    PRODUCT_IMAGE
                </div>
            </div>

            {/* Info del Producto */}
            <div className="flex flex-col gap-1 mb-6 flex-1">
        <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
          {brand}
        </span>
                <h3 className="text-2xl font-black tracking-tighter uppercase leading-none">
                    {name}
                </h3>
                {flavor && (
                    <p className="text-[9px] font-bold text-muted-foreground tracking-[0.2em] uppercase mt-1">
                        // {flavor}
                    </p>
                )}
            </div>

            {/* Botón de acción rápido (estilo técnico) */}
            <Button className="w-full h-12 rounded-none bg-transparent border border-white/10 text-white hover:bg-primary hover:text-black hover:border-primary font-bold transition-all flex justify-between px-4 group/btn">
                <span className="text-xs uppercase tracking-widest">AÑADIR</span>
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    );
}
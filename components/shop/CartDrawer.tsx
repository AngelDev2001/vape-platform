import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative hover:bg-white/5 rounded-none">
                    <ShoppingCart className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center bg-primary text-[10px] font-black text-black">
            2
          </span>
                </Button>
            </SheetTrigger>

            <SheetContent className="w-full sm:max-w-md bg-background border-l border-white/10 p-0 rounded-none flex flex-col">
                <SheetHeader className="p-6 border-b border-white/10">
                    <SheetTitle className="text-3xl font-black tracking-tighter uppercase">
                        TU PEDIDO<span className="text-primary">.</span>
                    </SheetTitle>
                </SheetHeader>

                {/* Lista de Productos */}
                <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    {/* Item Ejemplo */}
                    <div className="flex gap-4 border-b border-white/5 pb-6">
                        <div className="h-24 w-24 bg-zinc-900 border border-white/5 shrink-0" />
                        <div className="flex flex-col justify-between flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-black text-sm uppercase tracking-tight">PULENTA PRO MAX</h4>
                                    <p className="text-[10px] text-primary font-bold tracking-widest uppercase">MELON ICE</p>
                                </div>
                                <button className="text-white/20 hover:text-error transition-colors">
                                    <X className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex items-center border border-white/10 h-8">
                                    <button className="px-2 hover:bg-white/5"><Minus className="h-3 w-3" /></button>
                                    <span className="px-3 text-xs font-bold border-x border-white/10 h-full flex items-center">1</span>
                                    <button className="px-2 hover:bg-white/5"><Plus className="h-3 w-3" /></button>
                                </div>
                                <span className="font-black tracking-tighter text-lg">S/ 45.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer del Carrito */}
                <div className="p-6 bg-zinc-900/50 border-t border-white/10 flex flex-col gap-4">
                    <div className="flex justify-between items-center uppercase font-bold tracking-tighter">
                        <span className="text-muted-foreground text-xs">Subtotal</span>
                        <span className="text-xl">S/ 45.00</span>
                    </div>
                    <Button className="w-full h-14 bg-primary text-black font-black text-base rounded-none hover:bg-primary/90">
                        FINALIZAR COMPRA
                    </Button>
                    <p className="text-[9px] text-center text-muted-foreground uppercase tracking-[0.2em]">
                        Envío calculado en el checkout — 18+ Solo adultos
                    </p>
                </div>
            </SheetContent>
        </Sheet>
    );
}
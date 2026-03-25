import {ContentWidth} from "@/components/ContentWidth";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";
import {Search, SlidersHorizontal} from "lucide-react";
import {ProductCard} from "@/components/shop/ProductCard";

const allProducts = [
    { id: "PLN-001", name: "PULENTA PRO MAX", brand: "PULENTA", price: "S/ 45.00", flavor: "MELON ICE" },
    { id: "VPL-002", name: "VAPE SOUL 5000", brand: "VAPESOUL", price: "S/ 38.00", flavor: "BLUE RAZZ" },
    { id: "NRD-003", name: "NORDIC MIST 2%", brand: "NORDIC", price: "S/ 42.00", flavor: "COOL MINT" },
    { id: "GHT-004", name: "GHOST BERRY", brand: "GHOST", price: "S/ 35.00", flavor: "STRAWBERRY" },
    { id: "PLN-005", name: "PULENTA CLASSIC", brand: "PULENTA", price: "S/ 30.00", flavor: "TOBACCO" },
    { id: "VPL-006", name: "SOUL POD MINI", brand: "VAPESOUL", price: "S/ 25.00", flavor: "GRAPE" },
];

export default function Productos() {
    return (
        <main className="py-12 bg-background min-h-screen">
            <ContentWidth>
                {/* Header Estilo Manifiesto */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-6">
                    <div>
                        <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase block mb-2">
                            GLOBAL_ACCESS // SELECCIÓN_PREMIUM
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                            PRODUCTOS<span className="text-primary">.</span>
                        </h1>
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                        <Input
                            placeholder="BUSCAR EN EL CATÁLOGO..."
                            className="bg-transparent border-white/10 rounded-none pl-10 h-12 text-xs font-bold tracking-widest focus-visible:ring-primary uppercase"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* FILTROS LATERALES */}
                    <aside className="lg:col-span-3 space-y-10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <div className="flex items-center gap-2">
                                <SlidersHorizontal className="h-4 w-4 text-primary" />
                                <span className="text-xs font-black tracking-[0.2em] uppercase">FILTRAR_POR</span>
                            </div>
                            <span className="text-[9px] font-bold text-white/20 italic">V.2.0.26</span>
                        </div>

                        {/* Categorías */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-muted-foreground tracking-[0.3em] uppercase">TIPO_DE_PRODUCTO</h4>
                            <div className="flex flex-col gap-2">
                                {["DESECHABLES", "E-LIQUIDS", "EQUIPOS", "ACCESORIOS"].map((cat) => (
                                    <label key={cat} className="flex items-center gap-3 group cursor-pointer border border-white/5 p-3 hover:bg-white/5 transition-colors">
                                        <Checkbox id={cat} className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:text-black" />
                                        <span className="text-[11px] font-bold tracking-widest group-hover:text-primary transition-colors uppercase">
                                            {cat}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Marcas */}
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-muted-foreground tracking-[0.3em] uppercase">MARCAS_ALIADAS</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {["PULENTA", "VAPESOUL", "NORDIC", "GHOST"].map((brand) => (
                                    <label key={brand} className="flex flex-col items-center justify-center border border-white/5 p-4 hover:border-primary/50 transition-all cursor-pointer group">
                                        <Checkbox id={brand} className="sr-only" />
                                        <span className="text-[10px] font-black tracking-tighter group-hover:text-primary uppercase text-center">
                                            {brand}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* GRID DE PRODUCTOS */}
                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
                            {allProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    brand={product.brand}
                                    price={product.price}
                                    flavor={product.flavor}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </main>
    );
}
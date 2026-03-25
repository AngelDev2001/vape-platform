import Link from "next/link";
import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";
import {ContentWidth} from "@/components/ContentWidth";
import {Skeleton} from "@/components/ui/skeleton";

const featuredProducts = [
    {
        id: 1,
        name: "PULENTA PRO MAX",
        brand: "PULENTA",
        price: "S/ 45.00",
        image: "/vape-1.png",
    },
    {
        id: 2,
        name: "VAPE SOUL 5000",
        brand: "VAPESOUL",
        price: "S/ 38.00",
        image: "/vape-2.png",
    },
    {
        id: 3,
        name: "NORDIC MIST 2%",
        brand: "NORDIC",
        price: "S/ 42.00",
        image: "/vape-3.png",
    },
    {
        id: 4,
        name: "GHOST BERRY",
        brand: "GHOST",
        price: "S/ 35.00",
        image: "/vape-4.png",
    },
];

export function FeaturedProducts() {
    return (
        <section className="py-20 bg-background border-t border-border">
            <ContentWidth>
                <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-foreground">
                        DESTACADOS
                    </h2>
                    <span className="text-xs font-bold tracking-widest text-primary">
                        [ 02 ]
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-background p-6 flex flex-col transition-colors hover:bg-muted/50"
                        >
                            <div className="flex justify-between items-start mb-8 text-foreground">
                                <span className="bg-primary text-primary-foreground text-[10px] font-black px-2 py-0.5 uppercase tracking-tighter">
                                    STOCK DISPONIBLE
                                </span>
                                <span className="text-xl font-black tracking-tighter italic">
                                    {product.price}
                                </span>
                            </div>

                            <div className="aspect-square w-full bg-muted/30 mb-8 flex items-center justify-center border border-border">
                                <div className="text-foreground/10 text-[10px] font-bold uppercase tracking-widest text-center px-4 leading-tight">
                                    DATA_STREAM <br /> [IMAGE_PLACEHOLDER]
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 mb-6">
                                <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                                    {product.brand}
                                </span>
                                <h3 className="text-2xl font-black tracking-tighter uppercase leading-none text-foreground">
                                    {product.name}
                                </h3>
                            </div>

                            <Button
                                className="w-full h-12 rounded-none bg-transparent border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-bold transition-all flex justify-between px-4"
                            >
                                <span className="text-xs uppercase tracking-widest">AÑADIR</span>
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        href="/productos"
                        className="text-xs font-bold tracking-[0.3em] uppercase border-b-2 border-primary pb-1 text-foreground hover:text-primary transition-colors"
                    >
                        Ver catálogo completo
                    </Link>
                </div>
            </ContentWidth>
        </section>
    );
}

export function FeaturedProductsSkeleton() {
    return (
        <section className="py-20 bg-background border-t border-border">
            <ContentWidth>
                <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
                    <Skeleton className="h-12 md:h-20 w-64 rounded-none" />
                    <Skeleton className="h-4 w-12 rounded-none" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="bg-background p-6 flex flex-col gap-8">
                            <div className="flex justify-between items-start">
                                <Skeleton className="h-4 w-24 rounded-none" />
                                <Skeleton className="h-6 w-16 rounded-none" />
                            </div>
                            <div className="aspect-square w-full">
                                <Skeleton className="w-full h-full rounded-none" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="space-y-2">
                                    <Skeleton className="h-3 w-16 rounded-none" />
                                    <Skeleton className="h-6 w-full rounded-none" />
                                </div>
                                <Skeleton className="h-12 w-full rounded-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
}
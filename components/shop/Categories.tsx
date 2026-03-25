import Link from "next/link";
import {MoveUpRight} from "lucide-react";
import {ContentWidth} from "@/components/ContentWidth";

const categories = [
    {
        title: "DESECHABLES",
        href: "/productos?cat=desechables",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "E-LIQUIDS",
        href: "/productos?cat=liquidos",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "EQUIPOS",
        href: "/productos?cat=equipos",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "ACCESORIOS",
        href: "/productos?cat=accesorios",
        className: "md:col-span-2 md:row-span-1",
    },
];

export function Categories() {
    return (
        <section className="py-20 bg-background border-t border-border">
            <ContentWidth>
                <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                        CATEGORÍAS
                    </h2>
                    <span className="text-xs font-bold tracking-widest text-primary">
                        [ 01 ]
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[300px]">
                    {categories.map((cat, i) => (
                        <Link
                            key={i}
                            href={cat.href}
                            className={`group relative bg-card border border-border p-6 flex flex-col justify-between transition-colors hover:border-primary ${cat.className}`}
                        >
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-black/20 dark:bg-black/60 z-10" />
                                <div className="w-full h-full bg-muted transition-colors group-hover:bg-muted/80" />
                            </div>

                            <div className="relative z-20 flex justify-end">
                                <MoveUpRight className="h-5 w-5 text-foreground/40 group-hover:text-primary transition-colors" />
                            </div>

                            <div className="relative z-20">
                                <h3 className="text-3xl font-black tracking-tighter uppercase leading-none text-white dark:text-foreground">
                                    {cat.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </ContentWidth>
        </section>
    );
}
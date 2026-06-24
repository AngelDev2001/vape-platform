import {ContentWidth} from "@/components/ContentWidth";

export default function PedidosPage({children}):Readonly<{
    children: React.ReactNode;
}> {
    return (
        <main className="py-20 bg-background min-h-screen">
            <ContentWidth>
                <body className="min-h-full flex flex-col">{children}</body>
            </ContentWidth>
        </main>
    );
}
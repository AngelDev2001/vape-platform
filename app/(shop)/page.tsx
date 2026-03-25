import {Hero} from "@/components/shop/Hero";
import {Categories} from "@/components/shop/Categories";
import {FeaturedProducts} from "@/components/shop/FeaturedProducts";

export default function Page() {
    return (
        <>
            <Hero />
            <Categories/>
            <FeaturedProducts/>
        </>
    );
}
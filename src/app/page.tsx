import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";
import Testimonials from "@/components/sections/testimonials";
import TimeLine from "@/components/sections/timeline";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Products />
            <Testimonials />
            <TimeLine />
        </>
    );
}
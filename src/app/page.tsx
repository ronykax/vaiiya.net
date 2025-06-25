import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/products";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Products />
        </>
    );
}
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Products() {
    interface Product {
        name: string;
        description: string;
        image: string;
        small?: boolean;
    }

    const products: Product[] = [
        {
            name: "Series 2000",
            description: "Suppress third-party influences and eccentricity.",
            image: "/1920px-VAIIYA_Series_2000.png",
        },
        {
            name: "Series 9800",
            description: "Suppress third-party influences and eccentricity.",
            image: "/VAIIYA_Series_9800.png",
        },
        {
            name: "Series 2000",
            description: "Suppress third-party influences and eccentricity.",
            image: "/1920px-VAIIYA_Series_2000.png",
            small: true,
        },
        {
            name: "Series 2000",
            description: "Suppress third-party influences and eccentricity.",
            image: "/1920px-VAIIYA_Series_2000.png",
            small: true,
        },
    ];

    return (
        <section className="max-w-7xl px-8 py-16 relative">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(rgba(0,0,0,0.5)_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}
            />
            <div className="grid gap-6">
                <div className="grid gap-6">
                    {products.map((item, index) => (
                        <div
                            className={cn(
                                "grid drop-shadow-2xl border-0 border-black w-full [box-shadow:-4px_4px_0_rgba(0,0,0,0.25)]",
                                !item.small ? "col-span-2" : ""
                            )}
                            key={index}
                        >
                            {item.small ? (
                                <Image
                                    width={512}
                                    height={512}
                                    alt={item.name}
                                    src={item.image}
                                    className="aspect-square object-cover"
                                />
                            ) : (
                                <Image
                                    width={2560}
                                    height={1249}
                                    alt={item.name}
                                    src={item.image}
                                />
                            )}

                            <div className="p-6 grid gap-2 bg-black text-white">
                                <span className="font-display font-bold text-2xl">
                                    {item.name}
                                </span>

                                <span className="opacity-75">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

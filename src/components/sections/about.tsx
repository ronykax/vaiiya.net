import Image from "next/image";

export default function About() {
    return (
        <section className="bg-black text-white max-w-7xl px-8 py-16">
            <div className="grid gap-6">
                <span className="font-display font-bold text-3xl">About</span>
                <span className="leading-relaxed opacity-75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis nulla nihil vitae sed! Quidem sapiente numquam
                    perspiciatis molestias eaque illum eius laborum laudantium
                    porro impedit, rerum libero repellendus, in doloribus!
                </span>

                <Image
                className="mt-8"
                    width={750}
                    height={750}
                    src={"/Sal-Scoria-Headshot.png"}
                    alt="Sal Scoria"
                />
            </div>
        </section>
    );
}

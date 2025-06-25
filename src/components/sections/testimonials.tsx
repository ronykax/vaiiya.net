import { cn } from "@/lib/utils";
import Box from "../box";

export default function Testimonials() {
    return (
        <section className="bg-black text-white max-w-7xl px-8 py-16 relative">
            <div
                className={cn(
                    "absolute inset-0 z-0 opacity-5",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />
            <Box className="left-0 top-[47%]" />
            <div className="grid gap-10 relative z-20">
                <span className="text-3xl font-display font-extrabold tracking-tight italic w-full text-start opacity-25">
                    "My thoughts used to wander.
                    <br />
                    Now they report."
                </span>

                <span className="text-3xl font-display font-extrabold tracking-tight italic w-full text-end opacity-25">
                    "I used to think freely.
                    <br />
                    Now I think safely."
                </span>

                <span className="text-3xl font-display font-extrabold tracking-tight italic w-full text-start opacity-25">
                    "It only hurt once. After that, I was theirs."
                </span>
            </div>
        </section>
    );
}

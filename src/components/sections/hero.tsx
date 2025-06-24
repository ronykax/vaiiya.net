import { Boxes } from "../ui/background-boxes";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-24 relative overflow-hidden border-b border-b-black/25 border-dashed">
            {/* don't display <Boxes /> in development */}
            <Boxes />
            <div className="scheme-dark font-body z-20 relative pointer-events-none">
                <div className="grid gap-6">
                    <span className="text-5xl font-display font-bold">
                        We. As One.
                    </span>

                    <span className="leading-relaxed text-xl opacity-75">
                        Unified security. Integrated minds. A future you don't
                        have to think about.
                    </span>

                    <div className="flex gap-2">
                        <Button size={"lg"}>Pre-order CHIP 2</Button>
                        <Button size={"lg"} variant={"link"}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

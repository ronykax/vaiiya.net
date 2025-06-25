"use client";

import { Boxes } from "../ui/background-boxes";
import { Button } from "../ui/button";
import Box from "../box";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-24 relative overflow-hidden border-dashed">
            <Boxes />
            <Box className="bottom-0 right-0" />
            <div className="scheme-dark font-body z-20 relative pointer-events-none">
                <div className="grid gap-6">
                    <span className="text-5xl font-display font-extrabold tracking-tight">
                        We. As One.
                    </span>

                    <span className="leading-relaxed text-xl opacity-75 font-medium">
                        Unified security. Integrated minds. A future you don't
                        have to think about.
                    </span>

                    <div className="flex gap-2">
                        <Button size={"lg"}>Pre-order Series 9800</Button>
                        <Button size={"lg"} variant={"link"}>
                            Learn More
                        </Button>
                    </div>

                    <div className="aspect-video w-full overflow-hidden relative -mb-6 mt-6 drop-shadow-2xl">
                        <iframe
                            title="YouTube Video"
                            src="https://www.youtube.com/embed/dHkETLWVNBE"
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={false}
                        />
                        {/* <ReactPlayer
                            url={"https://www.youtube.com/watch?v=dHkETLWVNBE"}
                            width={"100%"}
                            height={"100%"}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

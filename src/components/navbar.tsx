import { Menu } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
        <div className="flex px-8 py-6 justify-between bg-black text-white">
            <Image
                className="w-28"
                src={"/vaiiya-logo-2.png"}
                width={512}
                height={168}
                alt="VAIIYA Logo"
            />

            <Button size={"lg"}>
                <Menu />
            </Button>
        </div>
    );
}

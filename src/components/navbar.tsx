import { Menu } from "lucide-react";
import Image from "next/image";

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

            <button className="cursor-pointer">
                <Menu size={28} />
            </button>
        </div>
    );
}

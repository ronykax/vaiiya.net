import { cn } from "@/lib/utils";

interface Props {
    className: string;
    color?: "red" | "gray";
}

export default function Box({ className, color = "red" }: Props) {
    return (
        <div
            className={cn(
                "p-4 bg-vaiiyared absolute",
                className,
                color === "red"
                    ? "bg-vaiiyared"
                    : color === "gray"
                    ? "bg-zinc-600"
                    : ""
            )}
        ></div>
    );
}

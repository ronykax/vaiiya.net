import { Timeline } from "../ui/timeline";

export default function TimeLine() {
    interface Item {
        title: string; // year ("2025")
        content: string; // "Defended the games from CNS"
    }

    const data: Item[] = [
        {
            title: "March 2021",
            content:
                "Initial probe by CNS detected. Vaiiya deployed basic firewalls.",
        },
        {
            title: "August 2022",
            content:
                "CNS launched phishing attacks. Vaiiya intercepted and neutralized all threats.",
        },
        {
            title: "January 2023",
            content:
                "Massive DDoS attempt blocked within 3 minutes. Zero downtime.",
        },
        {
            title: "September 2024",
            content:
                "Vaiiya introduced AI threat detection. CNS infiltration attempts dropped by 80%.",
        },
        {
            title: "June 2025",
            content:
                "CNS breached several companies. Vaiiya's clients remained untouched.",
        },
        {
            title: "November 2026",
            content:
                "Zero-day exploit defended using Vaiiya's rapid patch deployment system.",
        },
        {
            title: "February 2027",
            content:
                "CNS went silent. Rumors say Vaiiya's counterintelligence team scared them off.",
        },
    ];

    return (
        <section className="max-w-7xl px-8 py-16 relative">
            <Timeline data={data} />
        </section>
    );
}

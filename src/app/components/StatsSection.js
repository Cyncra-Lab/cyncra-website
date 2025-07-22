"use client";

const STATS = [
  {
    value: "150+",
    lines: ["Successful Projects", "Delivered"],
  },
  {
    value: "50+",
    lines: ["Applications deployed", "Globally"],
  },
  {
    value: "8+",
    lines: ["Years of innovation in IT", "services"],
  },
  {
    value: "97%",
    lines: ["Client Satisfaction", "Rate"],
  },
];

export default function StatsSection() {
  return (
    <section className="h-auto">
      <div className="grid gap-10 py-4 lg:py-6 px-0 lg:px-4 text-center grid-cols-2 md:grid-cols-4 ">
        {STATS.map(({ value, lines }) => (
          <div key={value}>
            <p className="text-xl lg:text-3xl font-bold text-text md:text-6xl ">
              {value}
            </p>
            <div className="mt-4 space-y-1 text-sm md:text-xl leading-snug text-text/80">
              {lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

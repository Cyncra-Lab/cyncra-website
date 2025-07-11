import Link from "next/link";

export default function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-secondary md:text-base lg:text-lg xl:text-xl">
        {title}
      </h3>

      <ul className="space-y-2 text-xs text-[#B5B5B5] md:text-sm lg:text-base">
        {items.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="transition-colors hover:text-accent-1">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

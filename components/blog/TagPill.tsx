import Link from "next/link";

export default function TagPill({
  tag,
  active,
  onClick,
}: {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors";

  const cls = active
    ? "border-accent-teal/30 bg-accent-teal/10 text-accent-teal"
    : "border-gray-200 bg-white text-text hover:border-accent/30 hover:bg-gray-50";

  // If onClick is provided, treat as a button-like control.
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${cls}`}>
        {tag}
      </button>
    );
  }

  return (
    <Link href={`/blog?tag=${encodeURIComponent(tag)}`} className={`${base} ${cls}`}>
      {tag}
    </Link>
  );
}

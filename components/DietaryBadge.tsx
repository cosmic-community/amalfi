export default function DietaryBadge({ label }: { label: string }) {
  if (!label) return null
  return (
    <span className="inline-flex items-center rounded-full bg-amalfi-sea/10 text-amalfi-seadeep text-xs font-medium px-2.5 py-0.5">
      {label}
    </span>
  )
}
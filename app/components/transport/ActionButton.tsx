interface Props {
  label: string;
  color: string;
}

export function ActionButton({ label, color }: Props) {
  return (
    <button
      className={`${color} text-white px-5 py-2 rounded-xl shadow hover:opacity-90`}
    >
      {label}
    </button>
  );
}

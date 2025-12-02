interface ActionButtonProps {
  label: string;
  color: string;
}

export default function ActionButton({ label, color }: ActionButtonProps) {
  return (
    <button
      className={`w-full py-3 rounded-xl text-white shadow-md font-semibold ${color}`}
    >
      {label}
    </button>
  );
}

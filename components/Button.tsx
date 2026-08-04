type ButtonProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function Button({
  text,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        bg-red-600
        hover:bg-red-700
        text-white
        py-4
        rounded-xl
        font-semibold
        text-lg
        transition
        disabled:bg-gray-400
        disabled:cursor-not-allowed
      `}
    >
      {text}
    </button>
  );
}
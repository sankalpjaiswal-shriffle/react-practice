export default function Button({
  onClick,
  children,
  size = "md",
  disabled = false,
}) {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${sizeClasses[size]} rounded-2xl bg-blue-600 text-black dark:bg-white dark:text-black font-medium disabled:opacity-50
        disabled:cursor-not-allowed`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

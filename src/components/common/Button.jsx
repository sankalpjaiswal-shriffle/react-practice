export default function Button({ onClick, children }) {
  return (
    <button
      className="p-4 rounded-2xl bg-blue-900 text-black dark:bg-white dark:text-black"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

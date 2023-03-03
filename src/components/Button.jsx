export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded"
    >
      {children}
    </button>
  );
}

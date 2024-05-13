export default function Buttons({ children, id, color, ...props }) {
  return (
    <button id={id} style={{ backgroundColor: color }} {...props}>
      {children}
    </button>
  );
}

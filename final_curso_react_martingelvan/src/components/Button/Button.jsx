export const Button = ({
  onClick,
  text,
  color = "red",
  withBoton = "120px",
}) => {
  return (
    <button
      style={{ backgroundColor: color, width: withBoton }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

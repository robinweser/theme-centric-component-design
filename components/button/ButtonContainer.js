export default function ButtonContainer({ children, onClick, ...otherProps }) {
  return children({
    onClick,
    role: "button",
    tabIndex: 0,
    styleProps: otherProps
  });
}

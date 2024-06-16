export const Cell = ({ children, isSelected, turn }) => {
  let className = "cell";
  if (turn === "X" && children === "X") {
    className = `cell ${isSelected ? "is-selected" : ""}`;
  } else if (turn === "O" && children === "O") {
    className = `cell is-selectedTwo`;
  }

  return (
    <div className={className}>
      {children === "X" ? "Player 1" : "Player 2"}
    </div>
  );
};

export const Column = ({ children, index, handleCell, isSelected }) => {
  const className = `square ${
    isSelected === "X" ? "selected-player" : "selected-playerTwo"
  }`;

  return (
    <div
      onClick={() => {
        handleCell(index);
      }}
      className={isSelected === null ? "square" : className}
    >
      {children}
    </div>
  );
};

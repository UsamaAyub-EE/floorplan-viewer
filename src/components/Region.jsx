export const Region = ({ regions }) => {
  return (
    <>
      {regions.map((region, index) => (
        <line
          key={index}
          x1={region[0].X}
          y1={region[0].Y}
          x2={region[1].X}
          y2={region[1].Y}
          stroke="black"
        />
      ))}
    </>
  );
};

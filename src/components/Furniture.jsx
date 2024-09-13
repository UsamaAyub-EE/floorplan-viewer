const Furniture = ({ furnitures }) => {
  const [hoveredEquip, setHoveredEquip] = React.useState(null);

  return (
    <>
      {furnitures.map((furniture, index) => {
        const width = furniture.MaxBound.X - furniture.MinBound.X;
        const height = furniture.MaxBound.Y - furniture.MinBound.Y;

        return (
          <rect
            key={index}
            x={furniture.xPlacement}
            y={furniture.yPlacement}
            width={width}
            height={height}
            transform={`rotate(${furniture.rotation}, ${furniture.xPlacement}, ${furniture.yPlacement})`}
            fill="gray"
            onMouseEnter={() => setHoveredEquip(furniture.equipName)}
            onMouseLeave={() => setHoveredEquip(null)}
          />
        );
      })}
      {hoveredEquip && <div className="tooltip">{hoveredEquip}</div>}
    </>
  );
};

import { useState } from "react";

export const Furniture = ({ furnitures }) => {
  const [hoveredEquip, setHoveredEquip] = useState(null);

  const handleMouseEnter = (furniture) => {
    setHoveredEquip(furniture.equipName);
  };

  const handleMouseLeave = () => {
    setHoveredEquip(null);
  };

  return (
    <>
      {furnitures.map((furniture, index) => {
        const width = furniture.MaxBound.X - furniture.MinBound.X;
        const height = furniture.MaxBound.Y - furniture.MinBound.Y;
        const rotationInDegrees = furniture.rotation * (180 / Math.PI);

        return (
          <rect
            key={index}
            x={furniture.xPlacement}
            y={furniture.yPlacement}
            width={width}
            height={height}
            transform={`rotate(${rotationInDegrees}, ${furniture.xPlacement}, ${furniture.yPlacement})`}
            fill="orange"
            onMouseEnter={(e) => handleMouseEnter(furniture, e)}
            onMouseLeave={handleMouseLeave}
          >
            <title>{hoveredEquip}</title>
          </rect>
        );
      })}
    </>
  );
};

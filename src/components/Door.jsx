const Door = ({ doors }) => {
  return (
    <>
      {doors.map((door, index) => (
        <rect
          key={index}
          x={door.location.x}
          y={door.location.y}
          width={door.width}
          height="10"
          transform={`rotate(${door.rotation}, ${door.location.x}, ${door.location.y})`}
          fill="brown"
        />
      ))}
    </>
  );
};

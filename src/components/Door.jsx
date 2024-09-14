export const Door = ({ doors }) => {
  return (
    <>
      {doors.map((door, index) => {
        const rotationInDegrees = door.Rotation * (180 / Math.PI);
        return (
          <rect
            key={index}
            x={door.Location.X}
            y={door.Location.Y}
            width={door.Width}
            height="10"
            transform={`rotate(${rotationInDegrees}, ${door.Location.X}, ${door.Location.Y})`}
            fill="red"
          />
        );
      })}
    </>
  );
};

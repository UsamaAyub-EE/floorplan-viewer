const Region = ({ regions }) => {
  return (
    <svg>
      {regions.map((region, index) => (
        <line
          key={index}
          x1={region.start.x}
          y1={region.start.y}
          x2={region.end.x}
          y2={region.end.y}
          stroke="black"
        />
      ))}
    </svg>
  );
};

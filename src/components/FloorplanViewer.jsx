const FloorplanViewer = ({ jsonData }) => {
  const { Regions, Doors, Furnitures } = jsonData;

  return (
    <div className="floorplan-container">
      <Region regions={Regions} />
      <Door doors={Doors} />
      <Furniture furnitures={Furnitures} />
    </div>
  );
};

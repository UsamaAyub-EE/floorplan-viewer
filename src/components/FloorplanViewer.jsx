import { Door } from "./Door";
import { Furniture } from "./Furniture";
import { Region } from "./Region";

export const FloorplanViewer = ({ jsonData }) => {
  const { Regions, Doors, Furnitures } = jsonData;

  return (
    <svg
      width="300"
      height="300"
      viewBox="-150 -150 300 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="scale(1, -1)">
        <Region regions={Regions} />
        <Door doors={Doors} />
        <Furniture furnitures={Furnitures} />
      </g>
    </svg>
  );
};

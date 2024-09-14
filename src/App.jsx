import { useState } from "react";
import { FloorplanViewer } from "./components/FloorPlanViewer";
import "./App.css";

import jsonData from "./sample.json";

function App() {
  const [scale, setScale] = useState(1);

  const handleZoom = (e) => {
    const zoom = e.deltaY > 0 ? scale * 0.9 : scale * 1.1;
    setScale(zoom);
  };

  return (
    <div
      onWheel={handleZoom}
      style={{
        border: "1px solid black",
        width: "fit-content",
        height: "fit-content",
        transform: `scale(${scale})`,
      }}
    >
      <FloorplanViewer jsonData={jsonData} />
    </div>
  );
}

export default App;

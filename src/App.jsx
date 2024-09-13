import { useState } from "react";
import "./App.css";

import jsonData from "./sample.json";

function App() {
  const [scale, setScale] = useState(1);

  const handleZoom = (e) => {
    const zoom = e.deltaY > 0 ? scale * 0.9 : scale * 1.1;
    setScale(zoom);
  };

  return (
    <div onWheel={handleZoom} style={{ transform: `scale(${scale})` }}>
      <FloorplanViewer jsonData={jsonData} />
    </div>
  );
}

export default App;

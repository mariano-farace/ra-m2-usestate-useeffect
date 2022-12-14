import Square from "./components/atoms/Square";
import Editor from "./components/molecules/Editor";
import Triangle from "./components/atoms/Triangle";
import Circle from "./components/atoms/Circle";
import { useEffect, useState } from "react";
function App() {
  const [triangleSize, setTriangleSize] = useState(50);
  const [circleSize, setCircleSize] = useState(50);
  const [squareSize, setSquareSize] = useState(50);

  useEffect(() => {
    if (triangleSize === circleSize && triangleSize === squareSize) {
      alert("All the shapes have the same size");
    }
  }, [triangleSize, circleSize, squareSize]);

  return (
    <div className="App">
      <Editor
        shape={Triangle}
        defaultColor={"#0000FF"}
        size={triangleSize}
        setSize={setTriangleSize}
      />

      <Editor
        shape={Circle}
        defaultColor={"#EEDE2B"}
        size={circleSize}
        setSize={setCircleSize}
      />

      <Editor
        shape={Square}
        defaultColor={"#FF0000"}
        size={squareSize}
        setSize={setSquareSize}
      />
    </div>
  );
}

export default App;

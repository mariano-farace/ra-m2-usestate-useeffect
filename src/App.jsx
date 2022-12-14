import Square from "./components/atoms/Square";
import Editor from "./components/molecules/Editor";
import Triangle from "./components/atoms/Triangle";
import Circle from "./components/atoms/Circle";
import { useEffect, useState } from "react";
function App() {
  const [triangleSize, setTriangleSize] = useState(51);
  const [circleSize, setCircleSize] = useState(52);
  const [squareSize, setSquareSize] = useState(53);

  const [triangleColor, setTriangleColor] = useState("#0000FF");
  const [circleColor, setCircleColor] = useState("#EEDE2B");
  const [squareColor, setSquareColor] = useState("#FF0000");

  useEffect(() => {
    if (triangleSize === circleSize && triangleSize === squareSize) {
      alert("All the shapes have the same size");
    }
  }, [triangleSize, circleSize, squareSize]);

  useEffect(() => {
    if (triangleColor === circleColor && triangleColor === squareColor) {
      alert("All the shapes have the same color");
    }
  }, [triangleColor, circleColor, squareColor]);

  return (
    <div className="App">
      <Editor
        color={triangleColor}
        setColor={setTriangleColor}
        shape={Triangle}
        size={triangleSize}
        setSize={setTriangleSize}
      />

      <Editor
        color={circleColor}
        setColor={setCircleColor}
        shape={Circle}
        size={circleSize}
        setSize={setCircleSize}
      />

      <Editor
        color={squareColor}
        setColor={setSquareColor}
        shape={Square}
        size={squareSize}
        setSize={setSquareSize}
      />
    </div>
  );
}

export default App;

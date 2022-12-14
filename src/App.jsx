import Square from "./components/atoms/Square";
import Editor from "./components/molecules/Editor";
import Triangle from "./components/atoms/Triangle";
import Circle from "./components/atoms/Circle";
function App() {
  return (
    <div className="App">
      <Editor shape={Triangle} defaultColor={"#0000FF"} defaultSize={50} />
      <Editor shape={Circle} defaultColor={"#EEDE2B"} defaultSize={50} />
      <Editor shape={Square} defaultColor={"#FF0000"} defaultSize={50} />
    </div>
  );
}

export default App;

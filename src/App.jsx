import Square from "./components/atoms/Square";
import Editor from "./components/molecules/Editor";

function App() {
  return (
    <div className="App">
      <Editor shape={Square} defaultColor={"#0000FF"} defaultSize={50} />
    </div>
  );
}

export default App;

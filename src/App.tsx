import './App.css';
import {Sprite, Stage} from "@pixi/react";

const App = () => {
  return (
    <div className="content">
      <Stage width={600} height={600}>
          <Sprite source="./images/rsbuild-logo.svg" x={300} y={300} anchor={0.5} />
      </Stage>
    </div>
  );
};

export default App;

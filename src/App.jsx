import "./App.css";
import Carsoul from "./component/Carsoul";
// import Player from "./component/SimplePlayer";
import url1 from "./assets/Gulabi Sadi Ani Lali_320(PagalWorld.com.sb).mp3";
import Player from "./component/song/Player";

function App() {
  return (
    <>
      <div>
        <div>
          <Carsoul/>
          {/* <Player url={url1} /> */}
        </div>
      </div>
    </>
  );
}

export default App;

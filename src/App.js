import "./styles.css";
import Man from "./man.jpeg";
import Woman from "./woman.jpeg";
import Webcam from "react-webcam";

const SIZE = 400;

const videoConstraints = {
  aspectRatio: 1,
  facingMode: "user"
};

export default function App() {
  return (
    <div className="App">
      <nav>
        <h2>Video Chat</h2>
      </nav>
      <main>
        <div class="container">
          <div class="box">
            <Webcam
              audio={true}
              width={SIZE}
              height={SIZE}
              videoConstraints={videoConstraints}
            />
            {/* <img src={Man} alt="" /> */}
          </div>
          <div class="box">
            <img src={Woman} alt="" />
          </div>
        </div>
        <div class="btns">
          <button>Start / Stop</button>
          <button>Mute / Unmute Audio</button>
          <button>Mute / Unmute Video</button>
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

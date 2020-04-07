import React from "react";
import videojs from "video.js";
import awsvideoconfig from "./aws-video-exports";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";
import "video.js/dist/video-js.css";
import { Parallax } from "react-materialize";

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <>
        <div
          data-vjs-player
          style={{
            maxWidth: 960,
            height: 540,
          }}
        >
          <video
            ref={(node) => {
              this.videoNode = node;
            }}
            className="video-js"
          />
        </div>
      </>
    );
  }
}

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: awsvideoconfig.awsOutputLiveLL,
    },
  ],
};

function App() {
  return (
    <>
      <nav>
        <div className="nav-wrapper black">
          <a href="/" id="nav" className="brand-logo center" alt="High Fever">
            <img src="fever.png" width="100" height="64" alt="High Fever"></img>
          </a>
        </div>
      </nav>
      <Parallax
        id="parallax"
        image={<img alt="" src="corona.jpg" />}
        options={{
          responsiveThreshold: 0,
        }}
      />
      <div className="section orange">
        <h5 className="center white-text">Chat Room (Coming Soon)</h5>
        <br />
      </div>
      <div id="vSection" className="section black">
        <VideoPlayer id="vPlayer" {...videoJsOptions} />
      </div>
    </>
  );
}

export default App;

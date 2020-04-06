import React from "react";
import videojs from "video.js";
import awsvideoconfig from "./aws-video-exports";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";
import "video.js/dist/video-js.css";

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
        <div className="nav-wrapper white">
          <a href="/" id="nav" className="brand-logo black-text">
            High Fever Live
          </a>
        </div>
      </nav>
      <div id="vContainer" className="container">
        <VideoPlayer id="vPlayer" {...videoJsOptions} />
      </div>
      <div className="container">
        <h5 className="center">Chat Room (Coming Soon)</h5>
      </div>
    </>
  );
}

export default App;

import ContentLoader from "react-content-loader";
import React from "react";

const VideoShekelton = (props) => {
  <ContentLoader
    speed={2}
    width="100%"
    height={200}
    viewBox="0 0 320 200"
    backgroundColor="#d9d9d9"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
  </ContentLoader>;
};
export default VideoShekelton;

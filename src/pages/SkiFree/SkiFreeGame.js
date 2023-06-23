import React, { useRef, useEffect } from "react";

function SkiFreeGame() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.height = window.innerHeight;
      iframe.width = window.innerWidth;
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://nwatpy.github.io/skifree.js/"
      frameborder="0"
      allowfullscreen="true"
      title="SkiFree game"
    />
  );
}

export default SkiFreeGame;
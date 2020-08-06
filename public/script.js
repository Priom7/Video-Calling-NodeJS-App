const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
console.log(videoGrid);
myVideo.muted = true;

let myStream;

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myStream = stream;
    videoStream(myVideo, stream);
  });

const videoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};

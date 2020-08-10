const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement("video");
const socket = io("/");
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

socket.emit("join-room", room_Id);

socket.on("user-connected", () => {
  connectToNewUser();
});

const connectToNewUser = () => {
  console.log("new User");
};

const videoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};

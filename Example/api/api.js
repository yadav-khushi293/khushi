const api = 'https://khushi-uedn.onrender.com/video';

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById('info');

  data.forEach((videoLink) => {
    let video_1 = document.createElement('div');
    let cardDiv = document.createElement('div');
    let video = document.createElement('video');
    
    cardDiv.className = "cardDiv";
    video_1.className = "video_1";

    video.src = videoLink;
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // ye Important hai for autoplay
    video.width = 300;
    video_1.append(video);
    cardDiv.append(video_1);
    dataShow.append(cardDiv);
  });
};






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
  let cardDiv = document.createElement('div');
  let video = document.createElement('video');
  video.src = videoLink; 
  video.controls = true;
  video.width = 400;
  cardDiv.append(video);
  dataShow.append(cardDiv);
});

};




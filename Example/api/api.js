const api = 'https://khushi-uedn.onrender.com/video';

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById('info');

  data.forEach((element) => {
    let cardDiv = document.createElement('div');
    let video = document.createElement('h4');
    

   video.innerText = element.link;

   cardDiv.append(video);
    dataShow.append(cardDiv);
  });
};




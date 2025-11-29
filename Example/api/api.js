const api = 'https://khushi-uedn.onrender.com/video';

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  let dataShow = document.getElementById('info');

  data.forEach((el) => {

    let cardDiv = document.createElement('div');
    let videoWrap = document.createElement('div');
    let video = document.createElement('video');

    let titleoffer = document.createElement('div');
    let title = document.createElement('p');
    let price = document.createElement('p');
    let offer = document.createElement('p');

    // Classes
    cardDiv.className = "cardDiv";
    videoWrap.className = "video_1";
    titleoffer.className = "titleoffer";
    title.className = "title";
    price.className = "price";
    offer.className = "offer";

    // Video URL (important)
    video.src = el.img;   // ✔ Correct key: "img"
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.width = 300;

    // Text
    title.innerText = el.title;
    price.innerText = el.price;
    offer.innerText = el.offer;

    // Build structure
    titleoffer.append(title, price, offer);
    videoWrap.append(video);

    cardDiv.append(videoWrap, titleoffer);

    dataShow.append(cardDiv);
  });
};

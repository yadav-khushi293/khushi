const api = `https://khushi-uedn.onrender.com/Luxury_perfumes`;

const Apicall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => database(res))
    .catch((err) => console.log(err));
};

const database = (data) => {
  const maindiv = document.getElementById("info");
  

data.forEach((el) => {
    const card = document.createElement("div");
    const title = document.createElement("p");
    const price = document.createElement("p");
    const imgContainer = document.createElement("div");
    const slider = document.createElement("div");
    const figure = document.createElement("figure");

    title.className = "title_head";
    price.className = "price";
    imgContainer.className = "imgContainer";
    slider.className = "slider";

    title.innerHTML = el.title;
    price.innerHTML = el.parice;

    // Add images
    el.img.forEach((url) => {
        const img = document.createElement("img");
        img.src = url;
        figure.appendChild(img);
    });

    slider.appendChild(figure);
    imgContainer.appendChild(slider);
    card.append(imgContainer, title, price);
    maindiv.append(card);

    // --- Slider logic
    let currentIndex = 0;
    const totalImages = 5; // fixed 5 images per slider

  slider.addEventListener("mouseenter", () => {
    slider.interval = setInterval(() => {
        if(currentIndex < totalImages - 1){
            currentIndex++;
            figure.style.marginLeft = `-${currentIndex * 100}%`;
        }
    },900); // pehle 600ms tha, ab 1500ms (thoda slow)
});



    slider.addEventListener("mouseleave", () => {
        clearInterval(slider.interval); // stop auto sliding
        currentIndex = 0;
        figure.style.marginLeft = "0";
    });
});




};

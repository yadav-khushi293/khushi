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

    slider.addEventListener("mouseenter", () => {
      figure.style.animation = "slider 6s ease-in-out forwards";
    });

    slider.addEventListener("mouseleave", () => {
      figure.style.animation = "slider 6s ease-in-out reverse forwards";
    });
  });
};

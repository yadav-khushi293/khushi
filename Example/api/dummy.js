const api = `https://khushi-uedn.onrender.com/Gift_Perfume`;

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
        const slider = document.createElement('div');
        const figure=document.createElement('div');
     
        title.classList="titile_head";
        price.classList="price";
        imgContainer.classList="imgContainer";
        


        title.innerHTML = el.title;
        price.innerHTML = el.parice;

        // ---- ONLY ACCESS IMAGES ----
        el.img.forEach((url) => {
            const img = document.createElement("img");
            img.src = url;
            figure.appendChild(img);
            slider.appendChild(figure);
            imgContainer.appendChild(slider);
        });

        card.append( imgContainer,title,price);
        maindiv.append(card);
    });
};

Apicall();

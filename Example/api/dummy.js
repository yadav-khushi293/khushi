 const api = `https://khushi-uedn.onrender.com/Luxury_perfumes`;

    function Apicall() {
      fetch(api)
        .then(res => res.json())
        .then(res => database(res))
        .catch(err => console.log(err));
    }

    function database(data) {
      const maindiv = document.getElementById("info");

      data.forEach(el => {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("p");
        title.className = "title_head";
        title.innerHTML = el.title;

        const price = document.createElement("p");
        price.className = "price";
        price.innerHTML = el.parice;

        const imgContainer = document.createElement("div");
        imgContainer.className = "imgContainer";

        const slider = document.createElement("div");
        slider.className = "slider";

        const figure = document.createElement("figure");

        el.img.forEach(url => {
          const img = document.createElement("img");
          img.src = url;
          figure.appendChild(img);
        });

        slider.appendChild(figure);
        imgContainer.appendChild(slider);
        card.append(imgContainer, title, price);
        maindiv.append(card);

        // dots container
        const dotsContainer = document.createElement("div");
        dotsContainer.className = "dots";
        imgContainer.appendChild(dotsContainer);

        const totalImages = el.img.length;
        let currentIndex = 0;
        let slideInterval = null;

        // set width etc
        figure.style.width = `${100 * totalImages}%`;
        Array.from(figure.children).forEach(img => {
          img.style.width = `${100 / totalImages}%`;
        });

        // create dots
        const dots = [];
        for (let i = 0; i < totalImages; i++) {
          const dot = document.createElement("div");
          dot.className = "dot";
          dot.addEventListener("click", () => {
            currentIndex = i;
            updateSlide();
          });
          dotsContainer.appendChild(dot);
          dots.push(dot);
        }
        dots[0].classList.add("active");

        function updateSlide() {
          figure.style.transform = `translateX(-${currentIndex * (100 / totalImages)}%)`;
          dots.forEach((d, idx) => {
            if (idx === currentIndex) d.classList.add("active");
            else d.classList.remove("active");
          });
        }

        function startSliding() {
          slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateSlide();
          }, 800);
        }

        slider.addEventListener("mouseenter", () => {
          if (!slideInterval) startSliding();
        });
        slider.addEventListener("mouseleave", () => {
          clearInterval(slideInterval);
          slideInterval = null;
          currentIndex = 0;
          updateSlide();
        });

        // no auto-start, wait hover
      });
    }

    window.onload = Apicall;
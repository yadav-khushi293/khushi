let page = 1;
let flag = null;
let length_of_pagination;
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

const appendData = (value) => {
  const main = document.querySelector(".main");
  const page_Data = document.querySelector(".numOfPage");
  if (flag || !flag) {
    main.innerHTML = "";
    page_Data.innerHTML = "";
  }
  value.forEach((el) => {
    let container = document.createElement("div");
    let id = document.createElement("p");
    let text = document.createElement("p");

    container.classList.add("container");

    id.innerText = el.id;
    id.classList.add("id_data");
    text.innerText = el.title;

    container.append(id, text);
    main.append(container);
  });

  page_Data.append(page);
};

const dataFetch = async () => {
  let api = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;

  try {
    let res = await fetch(api);
    let data = await res.json();
    console.log(data);
    length_of_pagination = await data.length;

    if (page === 1) {
      prev.setAttribute("disabled", "true");
    }
    if (page == length_of_pagination) {
      next.setAttribute("disabled", "true");
    }
    appendData(data);
  } catch (error) {
    console.log(" error:", error);
  }
};

const prevBtnInvokation = () => {
  if (page === 1) {
    prev.setAttribute("disabled", "true");
  } else if (page === 0) {
    return;
  } else if (page > 1) {
    next.removeAttribute("disabled");
    page--;
    flag = false;
    dataFetch();
  }
};

const nextBtnInvokation = () => {
  if (page == length_of_pagination) {
    next.setAttribute("disabled", "true");
    page--;
  } else if (page >= 1) {
    prev.removeAttribute("disabled");
  }
  flag = true;
  page++;
  dataFetch();
};

/*const api = 'https://fakestoreapi.com/products';

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
     let title = document.createElement('h1');
     let price =document.createElement('h3');
     let description =document.createElement('h3');
     let category = document.createElement('h3');
      let img = document.createElement('img');
      let rating =document.createElement('h3');

        let count =document.createElement('h3');


    cardDiv.className ='card_div';
     description.className="text_div";
     title.className="title_div";

    img.src = element.image;
    title.innerText = element.title;
    price.innerText= element.price;
    category.innerText=element.category;
    description.innerText=element.description;
    rating.innerText=element.rating.rate;
    count.innerText=element.rating.count;
    
    cardDiv.append(img,title,price,category,description,rating,count);

    dataShow.append(cardDiv);
  });
};*/



const api = 'https://dog.ceo/api/breeds/list/all';

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) => {
  console.log(data);
  
  let dataShow = document.getElementById('info');

 data.forEach((element) => {
    let cardDiv = document.createElement('div');
     let affenpinscher = document.createElement('h1');
     let african =document.createElement('h3');
     let airedale =document.createElement('h3');
     let akita = document.createElement('h3');
      let appenzeller = document.createElement('img');
      let australian =document.createElement('h3');

       /* let count =document.createElement('h3');*/


    cardDiv.className ='card_div';
     description.className="text_div";
     title.className="title_div";

    /*img.src = element.image;*/
    affenpinscher.innerText = element.title;
    african.innerText= element.price;
   airedale.innerText=element.category;
    akita.innerText=element.description;
    appenzeller.innerText=element.rating.rate;
   australian.innerText=element.rating.count;
    
    cardDiv.append(affenpinscher,african, airedale, akita, appenzeller,australian);

    dataShow.append(cardDiv);
  });
};

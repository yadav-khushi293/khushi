const api = 'https://fakestoreapi.com/products';

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
     let title = document.createElement('h4');
     let price =document.createElement('h3');
     let description =document.createElement('h6');
     let category = document.createElement('h3');
      let img = document.createElement('img');
      let rating =document.createElement('div');
      let rate = document.createElement('h3')
        let count =document.createElement('h3');


    cardDiv.className ='card_div';
     description.className="text_div";
     title.className="title_div";
     rating.className="reating_1"

    img.src = element.image;
    title.innerText = element.title;
    price.innerText= ` price : ${element.price}`;
    category.innerText=`category : ${element.category}`;
    description.innerText=element.description;
    rate.innerText=`Rate : ${element.rating.rate}`;
    count.innerText=`count : ${element.rating.count}`;

    rating.append(rate,count);
    cardDiv.append(img,title,price,category,description,rating);

    dataShow.append(cardDiv);
  });
};




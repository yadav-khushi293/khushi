const api="https://fakestoreapi.com/products";


const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendsFunc(res))
    .catch((err) => console.log(err));
};

const appendsFunc = (data) =>{
     let dataShow = document.getElementById('info');

     data.forEach(element => {
        
         let cardDiv = document.createElement('div');
        




     });
}


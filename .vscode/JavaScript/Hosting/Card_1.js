const api = `https://fakestoreapi.com/carts`;

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

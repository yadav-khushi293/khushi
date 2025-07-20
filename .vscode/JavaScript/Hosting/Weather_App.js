const api_key = `bc3879d0be0368c59db7c196ee0dd4e5`;

const api = `https://api.openweathermap.org/data/2.5/weather?units=meteric&q={city}&appid=${api_key}`;

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
//
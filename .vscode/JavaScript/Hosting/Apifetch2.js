const Api_Key ='live_bxAXdnQu3q8aDrjTeIG2rLwQEc4t7cpCb94MhUZ2JlZjObLB2WOJnhdgTbUZD7Nf';

const api=`https://api.thecatapi.com/v1/images/search?limit=22&breed_ids=beng&api_key=${Api_Key}`;

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


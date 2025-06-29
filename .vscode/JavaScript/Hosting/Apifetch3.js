const api='https://www.omdbapi.com/?s=avengers&apikey=3d15e923'

const ApiCall=()=>{
     fetch(api)
    .then((res)=>res.json())
    .then((res)=>appendData(res))
    .catch((err)=>console.log(err));
};

const appendData=(data)=>{

 const mainDiv=document.getElementById('info');

 data.forEach(el => {
    
    const CardDiv = document.createElement('div');
    const img = document.createElement('img');
    const Title = document.createElement('p');
    const imdbID = document.createElement('p');
    const Type = document.createElement('p');
    const Year = document.createElement('p');










 });
}
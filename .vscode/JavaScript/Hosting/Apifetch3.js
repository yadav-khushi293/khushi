/*const api='https://www.omdbapi.com/?s=avengers&apikey=3d15e923'

const ApiCall=()=>{
     fetch(api)
    .then((res)=>res.json())
    .then((res)=>appendData(res))
    .catch((err)=>console.log(err));
};

const appendData=(data)=>{

 const mainDiv=document.getElementById('info');

  data.search.forEach((el) => {
    
    const CardDiv = document.createElement('div');
    const img = document.createElement('img');
    const Title = document.createElement('p');
    const imdbID = document.createElement('p');
    const Type = document.createElement('p');
    const Year = document.createElement('p');

    img.src = el.Poster;
    Title.innerText= 'Title:${el.Title}';
    imdbID.innerText= 'imdbID:${el.imdbID}';
     Type.innerText='Type:${el. Type}';
     Year.innerText='Year:${el.Year}';

   CardDiv.append(img,Title,imdbID,Type, Year);
   mainDiv.append(CardDiv);

 });
};*/


const api = 'https://www.omdbapi.com/?s=avengers&apikey=3d15e923';

const ApiCall = () => {
  fetch(api)
    .then((res) => res.json())
    .then((res) => appendData(res))
    .catch((err) => console.log(err));
};

const appendData = (data) => {
  const mainDiv = document.getElementById('info');

  data.Search.forEach((el) => {
    const CardDiv = document.createElement('div');
    const img = document.createElement('img');
    const Title = document.createElement('h2');
    const imdbID = document.createElement('p');
    const Type = document.createElement('p');
    const Year = document.createElement('p');

      CardDiv.className='card_div';

    img.src = el.Poster;
    Title.innerText = el.Title;
    imdbID.innerText = el.imdbID;
    Type.innerText = el.Type;
    Year.innerText = el.Year;

    CardDiv.append(img, Title, imdbID, Type, Year);
    mainDiv.append(CardDiv);
  });
};

ApiCall();
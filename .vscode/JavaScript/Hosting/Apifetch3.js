/* https://www.omdbapi.com/?i=tt13751694&apikey=3d15e923 */
const apiKey = `3d15e923`;

const dataLoad = async () => {
  myFunction();
  let data = [
    { name: 'ironman' },
    { name: 'superman' },
    { name: 'batman' },
    { name: 'avengers' },
    { name: 'evil death' },
    { name: 'space' },
    { name: 'earth' },
    { name: 'animal' },
    { name: 'disney' },
  ];
   let randomNumber = Math.round(Math.random() * data.length);
   console.log('-> randomNumber:', randomNumber);
  let randomQuery = data[randomNumber].name;

  const api = `https://www.omdbapi.com/?s=${randomQuery}&apikey=${apiKey}`;
  try{
    const respons = await fetch(api);
    const data= await respons.json();
    appendData(data);
  }catch(error){
    console.log(error);
  }
};


const dataInput = async (event) => {
  if (event.key === 'Enter') {
    const searchApi = document.querySelector('#searchInput');

    if (searchApi.value.length === 0) return;

    const api = `https://www.omdbapi.com/?s=${searchApi.value}&apikey=${apiKey}`;

    try {
      const respons = await fetch(api);
      const data = await respons.json();
      appendData(data);
      searchApi.value = '';
    } catch (error) {
      console.log('-> error:', error);
    }
  }
  return;
};
   

const appendData = (data) => {
   
  const mainDiv = document.getElementById('info');
  mainDiv.innerHTML=''

  data.Search.forEach((el) => {
  
    const CardDiv = document.createElement('div');
    const img = document.createElement('img');
    const Title = document.createElement('h2');
    const imdbID = document.createElement('p');
    const Type = document.createElement('p');
    const Year = document.createElement('p');
    const link=document.createElement('a');
      CardDiv.className='card_div';

    img.src = el.Poster;
    Title.innerText = el.Title;
    imdbID.innerText = el.imdbID;
    Type.innerText = el.Type;
    Year.innerText = el.Year;
    link.href=`Movieapi.html?id=${el.imdbID}`;
    
    CardDiv.append(img, Title, imdbID, Type, Year);
    link.append(CardDiv);
    mainDiv.append(link);
  });
};

let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display="block";
}

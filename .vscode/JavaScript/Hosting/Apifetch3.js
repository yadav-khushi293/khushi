const apiKey = `3d15e923`;



const dataLoad = async () => {
  const api = `https://www.omdbapi.com/?s=avengers&apikey=${apiKey}`;
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
    console.log('-> searchApi:', searchApi.value.length);

    if (searchApi.value.length === 0) return;

    const api = `https://www.omdbapi.com/?s=${searchApi.value}&apikey=${apiKey}`;

    try {
      const respons = await fetch(api);
      const data = await respons.json();
      console.log('-> data:', data);
      appendData(data);
      searchApi.value = '';
    } catch (error) {
      console.log('-> error:', error);
    }
  }
  return;
};
   

const appendData = (data) => {
  console.log(data);
  
  const mainDiv = document.getElementById('info');
  mainDiv.innerHTML=''

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

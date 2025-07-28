let Api = `https://fakestoreapi.com/products`

let storage = JSON.parse(localStorage.getItem('token'))
console.log('🚀 ~ storage:', storage);

const datafetch = async () => {
    try {
        let res = await fetch(Api);
        let data = await res.json();
        storeUI(data);
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }
}

const storeUI = (value) => {
    const dataInfo = document.querySelector("#dataInfo");

    value?.forEach((element) => {
        console.log('🚀 ~ element:', element);
        const div = document.createElement('div');
        const pricingDiv = document.createElement('div');
        const id = document.createElement('h2');
        const img = document.createElement('img');
        const price = document.createElement('h3');
        const title = document.createElement('h4');
        const category = document.createElement('h3');
        const description = document.createElement('p');
        const rate = document.createElement('h3');
        const count = document.createElement('h3');
        const button = document.createElement('button');

        img.src = element.image;
        id.innerText =`ID: ${element.id}`;
        price.innerText = ` Price:   ${element.price}`;
        title.innerText = ` Title:  ${element. title}`;
        category.innerText =` Category:  ${element.category}`;
        description.innerText = element.description;
        rate.innerText = ` Rate:  ${element.rating. rate}`;
        count.innerText = `Count: ${element.rating.count}`;


        div.classList.add('card-div');
        pricingDiv.classList.add('card-price-div');
        description.classList.add('text_div');
         title.classList.add('title')
          pricingDiv.classList.add('pricingDiv_1');
          category.classList.add('category_1')

        button.innerText = 'add'


        pricingDiv.append( rate, count);

        div.append(img, id, title, description,category,price, pricingDiv, button);

        dataInfo.append(div);


    });

}


//  =============== from js =====================



const formSubmitData = async (e) => {
    e.preventDefault();

    const loginApi = `https://fakestoreapi.com/auth/login`;


    const email = document.querySelector("#username").value;
    console.log('🚀 ~ email:', typeof email);
    const pass = document.querySelector("#password").value;
    console.log('🚀 ~ pass:', typeof pass);

    /* 
    johnd -> username
    m38rmF$ -> pass    
    */

    let loginData = {
        username: email,
        password: pass
    }

    try {
        let res = await fetch(loginApi, {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await res.json();
        console.log('🚀 ~ data:', data);

        localStorage.setItem('token', JSON.stringify(data.token));
        if (storage) {
            window.location = 'index.html';
            localStorage.removeItem('token');
        }
    } catch (error) {
        console.log('🚀 ~ error:', error);
    }

}
// https://fakestoreapi.com/carts
// https://fakestoreapi.com/products
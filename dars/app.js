

const btn = document.getElementById('btn');
const container = document.getElementById('container');
const name = document.getElementById('name');
const price = document.getElementById('price');
const desc = document.getElementById('description');
const button = document.getElementById('button')
const form = document.getElementById('form');

function createCard(phone){
    return`
    <div class="card">
                <h3>${phone.name}</h3>
                <h3>${phone.price}</h3>
                <p>${phone.description}</p>  
            </div>
    `
    }
btn&&btn.addEventListener('click',function(){
    container.innerHTML='';
    let loader = document.createElement('p')
    loader.textContent='Loading...';
    container.appendChild(loader);
    fetch('https://auth-rg69.onrender.com/api/products/all',{
        method: 'GET',
    })
   .then(function(response){
     if (response.status==200) {
         return response.json();
     }
   })
   .then((data) => {
    if(Array.isArray(data)) {
        loader.innerHTML='';
        data.forEach(phone => {
            let card = createCard(phone)
            container.innerHTML+=card;

        });
    }
    console.log(data);
    
   })
   .catch((error) => {
     console.error('Error:', error);
   });
})

button.addEventListener('click', (e) => {
e.preventDefault()
const product = {
    name: name.value,
    price: price.value,
    description:description.value,
    category_id:Date.now(),
    status:'Completed'
}
console.log(product);

fetch('https://auth-rg69.onrender.com/api/products/',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        
    },
    body: JSON.stringify(product)
 
})
   .then((response) => {
    if (response.status==200) {
        return response.json();
    }
})
   .then((data) => {
    console.log(data);
    
})
   .catch((error) => {
    console.error('Error:', error);
});
form.reset()
})
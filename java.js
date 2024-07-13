const getProducts = async ()=>{
    const {data} = await axios.get(`https://dummyjson.com/products`);
    return data;
}


const displayProducts = async()=>{
    const data =await  getProducts();
    const products = data.products;

    const result = products.map((products)=>{
        return `
        <div class='product'>
        <h2>${products.title}</h2>
        <img src='${products.thumbnail}' />
        <p>$${products.price}</p>
        <a href='details.html?id=${products.id}'>details</a>
        </div>
        `;

    }).join(' ');

    document.querySelector(".products").innerHTML = result;
        
}


displayProducts();
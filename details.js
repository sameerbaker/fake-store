const getProducts = async ()=>{
    const params= new URLSearchParams(window.location.search);
    const id = params.get('id');
    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;

}

const displayProduct = async()=>{
    const data = await getProducts();
    const images = data.images.map((img)=>{
        return `
        <img src="${img}" width='200px' alt="product image"  />

        `
    }).join(' ');

    const result= `
    <h2>${data.title}</h2>
    <img src='${data.thumbnail}' />
    <p>${data.description}</p>
    <p>$${data.price}</p>
    

    
    `;
    document.querySelector(".product").innerHTML=result;
    document.querySelector(".product-images").innerHTML=images;

}

displayProduct();
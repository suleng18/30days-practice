const searchInput = document.querySelector('.search input');

fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    // init products
    const products = document.querySelector('.products');
    products.innerHTML = '';
    data.forEach((item) => {
      let newProduct = document.createElement('div');
      newProduct.classList.add('product');
      newProduct.innerHTML = `
        <img src="${item.image}" alt=""/>
        <div class="info">
          <div class="name">${item.title}</div>
          <div class="price">${item.price}</div>
        </div>`;

      products.appendChild(newProduct);
    });
  });

searchInput.addEventListener('input', (e) => {
  let txtSearch = e.target.value.trim().toLowerCase();
  const listProductDOM = document.querySelectorAll('.product');
  listProductDOM.forEach((item) => {
    console.log(item.innerText);
    if (item.innerText.toLowerCase().includes(txtSearch)) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
});

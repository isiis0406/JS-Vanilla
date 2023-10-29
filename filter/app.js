//Selectors

const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filtredProducts) => {
    productContainer.innerHTML = filtredProducts.map((product) => {
        return `
        <div class="product">
            <img src="${product.img}" alt="">
            <span class="name">${product.name}</span>
            <span class="priceText">$ ${product.price}</span>
        </div>`;
    }).join("");
};
displayProducts(data);

const setCategories = () => {
    const allCats = data.map((product) => product.cat);
    const categories = [
        "All",
        ...allCats.filter((item, index) => {
            return allCats.indexOf(item) === index;
        })
    ];

    //Filter by category
    categoriesContainer.innerHTML = categories.map(cat => 
        `
        <span class="cat">${cat}</span>
        `
        ).join("");

        categoriesContainer.addEventListener("click", (e) => {
            const selectedCat = e.target.textContent;
            selectedCat === "All" ? displayProducts(data) : displayProducts(data.filter(item => item.cat === selectedCat));
        });
    }
const setPrices = () => {
    const priceList = data.map((item => item.price));
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = `$ ${maxPrice}`;
    
    //Filter by price
    priceRange.addEventListener("input", (e) => {   
        const value = e.target.value;
        priceValue.textContent = `$ ${value}`;
        displayProducts(data.filter(item => item.price <= value));
    });

};
//Events
searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
    if (value) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1));

    } else {
        displayProducts(data);
    }
});
setCategories();

setPrices();
const container = document.getElementById("box-container");
const cart = document.getElementById("cart");
const database = [];
let totalPrice = 0;

const makeProduct = () => {
    const product = {
        productName: "random product",
        productPrice: Math.round(Math.random() * 1000),
        discount: Math.round(Math.random() * 50) + "%",
        imgUrl: "https://picsum.photos/300/500",
    };
    database.push(product);
};

for (let i = 0; i < 12; i++) {
    makeProduct();
}

const displayProducts = (data) => {
    data.forEach((product) => {
        const productHtml = `
				<div class="w-80 md:w-64 border-2 px-2 py-4 rounded-lg shadow hover:scale-105 cursor-pointer">
								<img class="h-48 w-full" src=${product.imgUrl} alt="xbox" />
								<p class="pt-2">${product.productName}</p>
								<div class="flex justify-between pt-2">
												<p class="font-bold text-blue-500">${product.productPrice}$</p>
												<p class="text-red-500">${product.discount}</p>
								</div>
				</div>`;
        const productDiv = document.createElement("div");
        productDiv.addEventListener("click", () => {
            const discount = parseInt(product.discount.slice(0, -1));
            totalPrice =
                totalPrice +
                product.productPrice -
                (product.productPrice * discount) / 100;
            cart.innerText = totalPrice.toFixed(2) + " $";
        });
        productDiv.innerHTML = productHtml;
        container.appendChild(productDiv);
    });
};

// displayProducts();

// callback
// buttn.addEventListener("click", () => {});

fetch("https://reqq-ress.herokuapp.com/shop")
    .then((response) => {
        response.json().then((data) => displayProducts(data.products));
    })
    .catch((err) => {
        alert("Errors 404");
    });
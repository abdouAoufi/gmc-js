const container = document.getElementById("box-container");
const database = [];

const makeProduct = () => {
  const product = {
    productName: "random product",
    productPrice: Math.round(Math.random() * 1000),
    discount: Math.round(Math.random() * 50) + "%",
    imgUrl: "https://picsum.photos/300/500",
  };
  database.push(product);
};

for (let i = 0; i < 40; i++) {
  makeProduct();
}

const displayProducts = () => {
  database.forEach((product) => {
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
    productDiv.innerHTML = productHtml;
    container.appendChild(productDiv);
  });
};

displayProducts();

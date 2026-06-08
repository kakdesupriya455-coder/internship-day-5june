const foods = [
    {
        id:1,
        name:"Pizza",
        image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
        description:"Cheese Burst Pizza",
        price:299,
        rating:4.8
    },
    {
        id:2,
        name:"Burger",
        image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        description:"Chicken Burger",
        price:199,
        rating:4.5
    },
    {
        id:3,
        name:"Pasta",
        image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
        description:"Italian Pasta",
        price:249,
        rating:4.6
    }
];

let cart = [];

const foodContainer = document.getElementById("foodContainer");
const cartItems = document.getElementById("cartItems");
const totalElement = document.getElementById("total");

function displayFoods() {

    foodContainer.innerHTML = "";

    foods.forEach(food => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${food.image}">
            <div class="card-content">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <p>₹${food.price}</p>
                <p>⭐ ${food.rating}</p>
                <button onclick="addToCart(${food.id})">
                    Add To Cart
                </button>
            </div>
        `;

        foodContainer.appendChild(card);
    });
}

function addToCart(id){

    const item = foods.find(food => food.id === id);

    const existing = cart.find(product => product.id === id);

    if(existing){
        existing.quantity++;
    }else{
        cart.push({...item, quantity:1});
    }

    displayCart();
}

function displayCart(){

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>

                <div>
                    <button class="qty-btn"
                    onclick="changeQty(${item.id},-1)">-</button>

                    ${item.quantity}

                    <button class="qty-btn"
                    onclick="changeQty(${item.id},1)">+</button>
                </div>

                <span>₹${item.price * item.quantity}</span>
            </div>
        `;
    });

    totalElement.textContent = total;
}

function changeQty(id,value){

    const item = cart.find(food => food.id === id);

    item.quantity += value;

    if(item.quantity <= 0){
        cart = cart.filter(food => food.id !== id);
    }

    displayCart();
}

document.getElementById("orderBtn")
.addEventListener("click", async () => {

    const message = document.getElementById("message");

    message.innerHTML = "Processing Order...";

    await new Promise(resolve =>
        setTimeout(resolve,3000)
    );

    const orderId =
        Math.floor(Math.random()*100000);

    message.innerHTML =
        `✅ Order Confirmed! Order ID: ${orderId}`;

    cart = [];
    displayCart();
});

displayFoods();
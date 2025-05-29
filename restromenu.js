const menuItems = [
    { name: "Paneer Butter Masala", price: 250 },
    { name: "Chicken Biryani", price: 300 },
    { name: "Masala Dosa", price: 120 },
    { name: "Veg Thali", price: 180 }
];

const showMenuBtn = document.getElementById("showMenuBtn");
const food1Div = document.getElementById("food1");

showMenuBtn.addEventListener("click", () => {
    food1Div.innerHTML = ""; 

    menuItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ₹${item.price}</p>
            <button class="add-btn">Add to Cart</button>
        `;
        itemDiv.querySelector(".add-btn").addEventListener("click", () => {
            alert(`${item.name} added to cart!`);
        });

        food1Div.appendChild(itemDiv);
    });
});

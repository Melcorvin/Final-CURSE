
const menuItems = {
  meals: [
    { name: "Ham & Swiss Melt Meal", price: 350.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/ae891047-9a95-4f88-ba0a-841f47ece000/f=avif,w=960,q=80" },
    { name: "Crispy Fish Sandwich Meal", price: 298.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/c80d7ea6-0633-48e6-92e3-3605a9fc1800/f=avif,w=960,q=80" },
    { name: "Deluxe Burger Meal", price: 390.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/3d8ed472-5b3d-4ab2-7945-43842d245800/f=avif,w=960,q=80" },
    { name: "BBQ Bacon Burger Meal", price: 310.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/34d4505d-08c8-462a-38aa-cf7d6b2e2100/f=avif,w=960,q=80" },
    { name: "Big Cheesy Bacon Burger Meal", price: 270.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/d14c1a49-0512-4a9c-6516-02fb689f8500/f=avif,w=960,q=80" },
    { name: "Classic Beef 'n Cheddar Meal", price: 249.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/3531d96c-67c4-454a-9aa8-78331300fb00/f=avif,w=960,q=80" },
    { name: "Classic Roast Beef Meal", price: 267.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/046bb04f-79b2-4e84-a077-06beb87d8000/f=avif,w=960,q=80" },
    { name: "Greek Gyro Meal", price: 260.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/a6e8f8c4-f537-4ecd-22bf-9b7bbbead900/f=avif,w=960,q=80" },
    { name: "Chicken Bacon Swiss Sandwich Meal", price: 276.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/1ac3bef8-34d9-41be-4355-9fee414bb300/f=avif,w=960,q=80" },
    { name: "Buffalo Chicken Sandwich Meal", price: 274.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/d14c1a49-0512-4a9c-6516-02fb689f8500/f=avif,w=960,q=80" },
    { name: "Chicken Tenders 3PC Meal", price: 333.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/a5892df4-d8bb-4457-84c0-2be858dbb100/f=avif,w=960,q=80" },
    { name: "Chicken Tenders 5PC Meal", price: 666.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/e7b0c335-eb6c-4dc5-c9c1-f5938babe900/f=avif,w=960,q=80" },

  ],

  drinks: [
    { name: "Coca-Cola®", price: 85.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/8512e529-2d14-42a9-0dfc-8f7399139400/f=avif,w=960,q=80" },
    { name: "Sprite®", price: 85.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/b9aceef5-2f42-4253-d359-8435b30e6600/f=avif,w=960,q=80" },
    { name: "Hi-C Flashin' Fruit Punch®", price: 90.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/47d2d95a-83df-4c8c-0365-f3bf9c0d4200/f=avif,w=960,q=80" },
    { name: "Powerade®", price: 90.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/883c1f1b-3e59-4879-8e0b-7cba6cbcbb00/f=avif,w=960,q=80" },
    { name: "Mello Yello®", price: 70.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/0ffccc3f-673d-4638-fd55-af6fc635cf00/f=avif,w=960,q=80" },
    { name: "Fanta® Orange", price: 75.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/9892a464-aa86-4efb-a0f3-ee646b2df500/f=avif,w=960,q=80" },
    { name: "Minute Maid® Zero Sugar", price: 80.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/cbb82867-d1cf-47df-3779-bc193cbd3600/f=avif,w=960,q=80" },
    { name: "Unsweet Tea", price: 60.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/080a60b8-9a7d-453b-cb4d-11a8bc735100/f=avif,w=960,q=80" },

  ],

  desserts: [
    { name: "Andes Mint Chocolate Shake", price: 180.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/bf9f1d98-1053-4291-5dad-6997f45db200/f=avif,w=960,q=80" },
      { name: "Jamocha Shake", price: 180.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/33d7d3a9-b736-4195-8ffa-4e53c7efac00/f=avif,w=960,q=80" },
      { name: "Vanilla Shake", price: 180.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/9d8badff-7dc3-4aae-ffad-133656b9b100/f=avif,w=960,q=80" },
      { name: "Chocolate Shake", price: 175.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/50081b55-3b84-4988-32c0-854709ffae00/f=avif,w=960,q=80" },
      { name: "Apple Turnover", price: 163.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/73ff9253-cf09-41d5-1182-175c4f347900/f=avif,w=960,q=80" },
      { name: "Cherry Turnover", price: 163.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/fb93d263-e3a2-4bca-a76e-8efa106b8f00/f=avif,w=960,q=80" },
      { name: "Salted Caramel & Chocolate Cookie", price: 150.00, img: "https://imagedelivery.net/cyuZzWywsYlsu7DPQZIgOg/999bce34-56c8-4b5a-3b5c-45e4e3b32900/f=avif,w=960,q=80" },
    ],
};
    

let order = [];

function initializeApp() {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    renderMenu();
  }, 3500);
}

function renderMenu(category = "home") {
  const menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = `
    <div style="text-align: center; margin: 40px;">
      <h1>Welcome to <span style="color: #ffcc00;">🔥 C U R S E 🔥</span></h1>
      <p style="font-size: 18px; max-width: 600px; margin: 15px auto;">
        Order your favorite Meals, Drinks, and Desserts in just a few taps. 
        Fast, easy, and delicious, always at <span style="color: #ffcc00;">🔥 C U R S E 🔥</span>!
      </p>
    </div>
  `;

  for (const cat in menuItems) {
    if (category !== "" && category !== cat) continue;

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const title = document.createElement("h2");
    title.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    title.style.textAlign = "center";
    title.style.marginBottom = "20px";
    categoryDiv.appendChild(title);

    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("items");

    menuItems[cat].forEach((item) => {
      const btn = document.createElement("div");
      btn.classList.add("item-btn");

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;

      const name = document.createElement("div");
      name.textContent = `${item.name} - ₱${item.price.toFixed(2)}`;

      const qtyWrapper = document.createElement("div");
      qtyWrapper.style.marginTop = "10px";
      qtyWrapper.style.display = "flex";
      qtyWrapper.style.justifyContent = "center";
      qtyWrapper.style.alignItems = "center";
      qtyWrapper.style.gap = "8px";

      const minusBtn = document.createElement("button");
      minusBtn.textContent = "−";
      minusBtn.style.width = "30px";
      minusBtn.onclick = () => {
        quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
      };

      const quantityInput = document.createElement("input");
      quantityInput.min = 1;
      quantityInput.value = 1;
      quantityInput.style.width = "50px";
      quantityInput.style.textAlign = "center";

      const plusBtn = document.createElement("button");
      plusBtn.textContent = "+";
      plusBtn.style.width = "30px";
      plusBtn.onclick = () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
      };

      qtyWrapper.appendChild(minusBtn);
      qtyWrapper.appendChild(quantityInput);
      qtyWrapper.appendChild(plusBtn);      

      const addBtn = document.createElement("button");
addBtn.textContent = "Add to Order";
addBtn.style.marginTop = "10px";

// Center the button using flexbox
addBtn.style.display = "flex";
addBtn.style.justifyContent = "center";
addBtn.style.alignItems = "center";
addBtn.style.marginLeft = "auto";  // Align to the center
addBtn.style.marginRight = "auto";  // Align to the center
addBtn.style.color = "#fff";
addBtn.style.backgroundColor = "#000000";
addBtn.style.padding = "12px 24px"; // <-- Added padding (top-bottom: 12px, left-right: 24px)
addBtn.style.border = "none";
addBtn.style.borderRadius = "8px";
addBtn.style.cursor = "pointer";

addBtn.onclick = () => addToOrder(item, quantityInput.value);


      btn.appendChild(img);
      btn.appendChild(name);
      btn.appendChild(qtyWrapper);
      btn.appendChild(addBtn);

      itemsDiv.appendChild(btn);
    });

    categoryDiv.appendChild(itemsDiv);
    menuContainer.appendChild(categoryDiv);
  }
}


function filterMenu(category) {
  renderMenu(category);
}

function addToOrder(item, quantity) {
  quantity = parseInt(quantity, 10); // Ensure quantity is a number
  const orderItem = { ...item, quantity };
  order.push(orderItem);
  alert(`${item.name} x${quantity} added to your order!`);
  updateSummary();
}


function removeFromOrder(index) {
  order.splice(index, 1);
  updateSummary();
}

function updateSummary() {
  const summaryList = document.getElementById("order-summary");
  const discountDiv = document.getElementById("discount-message");
  summaryList.innerHTML = "";
  discountDiv.innerHTML = "";

  let total = 0;
  const currentHour = new Date().getHours();
  let discount = 0;

  order.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="badge">${item.quantity}x</span> 
      ${item.name}
      <span class="item-total">₱${itemTotal.toFixed(2)}</span>
      <button onclick="removeFromOrder(${index})" style="margin-left: 10px; color: red; border: none; background: transparent; cursor: pointer;">❌</button>
    `;
    summaryList.appendChild(li);
    total += itemTotal;
  });

  const finalTotal = total - (total * discount);
  document.getElementById("total").textContent = finalTotal.toFixed(2);
  localStorage.setItem("curseOrder", JSON.stringify(order));
}

function updateQuantity(index, newQuantity) {
  if (newQuantity < 1) return; // Prevent quantities from going below 1
  order[index].quantity = newQuantity;
  document.getElementById(`quantity-${index}`).textContent = newQuantity;
  updateSummary();
}



function pay(method) {
  if (order.length === 0) {
    alert("Please select items before paying.");
    return;
  }

  const loadingDiv = document.getElementById("loading");
  loadingDiv.style.display = "block";

  setTimeout(() => {
    loadingDiv.style.display = "none";

    const receiptDiv = document.getElementById("receipt");
    receiptDiv.style.display = "block";

    const now = new Date();
    const timestamp = now.toLocaleString();
    const currentHour = now.getHours();

    let total = 0;
let receiptHTML = `
  <div class="receipt-container">
    <img src="https://scontent.fcgy1-3.fna.fbcdn.net/v/t1.15752-9/494355553_573402891885832_4447870711429825730_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeEPXVfd_8An1idg41rA-Z6buqjoFFRmdm66qOgUVGZ2bu3rOIx4ukbeomumXENci9aGudADQpIb2t1Njo65pNPO&_nc_ohc=vcaNeyh3qwwQ7kNvwH_3M4q&_nc_oc=Adnt5J3YDOhOUizXf-ztfH5KCIbP06oVZ3pBD84vLM2bP2Bl2QOLaNWA0dG5Z66A0cc&_nc_zt=23&_nc_ht=scontent.fcgy1-3.fna&oh=03_Q7cD2AH-MJvSsFgfgyP9UvA3gcu6woCwaNsnwknGAWYH3DciJA&oe=6835427E" alt="Logo" style="width: 60px; height: 60px; border-radius: 40px 100px / 100px; object-fit: cover; border: 5px solid #ffffff; box-shadow: 0 0 35px rgb(241, 15, 15); display: block; margin: 0 auto 20px auto; animation: floatParticles 6s infinite ease-in-out;" />
    <h2><span style="color: #ffcc00;">🔥 C U R S E 🔥</span></h2>
    <h3>🧾 Receipt</h3>
    <p><strong>Time:</strong> ${timestamp}</p>
    <ul class="receipt-items">
`;

order.forEach(item => {
  const itemTotal = item.price * item.quantity;
  receiptHTML += `
    <li>
      ${item.quantity}x ${item.name} 
      <span style="float: right;">₱${itemTotal.toFixed(2)}</span>
    </li>`;
  total += itemTotal;
});

const discount = (currentHour >= 14 && currentHour <= 16) ? 0.10 : 0;
const discountAmount = total * discount;
const finalTotal = total - discountAmount;

if (discount > 0) {
  receiptHTML += `<li style="color: #0f0; font-weight: bold; margin-top: 5px;">
  <span style="color: #ffcc00;">🔥 C U R S E 🔥</span> Fiery Inferno Happy Hour 10% Discount: Feel the heat every day from 2PM to 4PM! <span style="float:right;">−₱${discountAmount.toFixed(2)}</span></li>`;
}

receiptHTML += `
  <li style="font-weight: bold; border-top: 1px solid #999; padding-top: 5px;">
    Total: <span style="float:right;">₱${finalTotal.toFixed(2)}</span>
  </li>
</ul>
<p><strong>Payment Method:</strong> ${method}</p>
<p> Thank you for ordering at <span style="color: #ffcc00;">🔥 C U R S E 🔥</span>!</p>
<button onclick="resetOrder()" style="
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 1rem;
  color: #000000;
  background: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
">
  Start New Order
</button>
</div>
`;

receiptDiv.innerHTML = receiptHTML;

    // Optionally clear localStorage if you want
    localStorage.removeItem("curseOrder");
    order = []; // reset order array
    updateSummary();
  }, 2000);
}

function resetOrder() {
  order = [];
  updateSummary();
  document.getElementById("receipt").style.display = "none";
  document.getElementById("menu").style.display = "block";
}


function startNewOrder() {
  order = [];
  updateSummary();
  document.getElementById("receipt").style.display = "none";
  renderMenu();
}

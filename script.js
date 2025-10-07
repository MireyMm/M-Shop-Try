vconst products = [
  { id: 1, name: "Beras 5kg", price: 65000 },
  { id: 2, name: "Minyak Goreng 1L", price: 18000 },
  { id: 3, name: "Gula Pasir 1kg", price: 15000 },
  { id: 4, name: "Indomie Goreng", price: 3000 },
  { id: 5, name: "Telur Ayam 1kg", price: 27000 },
  { id: 6, name: "Susu Kental Manis", price: 12000 },
  { id: 7, name: "Sabun Mandi", price: 8000 },
  { id: 8, name: "Shampo Sachet", price: 2000 }
];

let cart = [];

function displayProducts(items) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Rp ${product.price.toLocaleString()}</p>
      <button onclick="addToCart(${product.id})">Tambah</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.qty}`;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = `Rp ${total.toLocaleString()}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }

  const now = new Date();
  let receiptText = `=== NOTA PEMBAYARAN ===\n`;
  receiptText += `Tanggal: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}\n\n`;

  let grandTotal = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    receiptText += `${item.name} x ${item.qty} = Rp ${subtotal.toLocaleString()}\n`;
    grandTotal += subtotal;
  });

  receiptText += `\nTotal: Rp ${grandTotal.toLocaleString()}\n`;
  receiptText += `\nTerima kasih telah berbelanja di M Shop!`;

  document.getElementById("receipt").textContent = receiptText;
  document.getElementById("receipt-section").classList.add("show");

  cart = [];
  updateCart();
}

function closeReceipt() {
  document.getElementById("receipt-section").classList.remove("show");
}

document.getElementById("searchInput").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(filtered);
});

// Load awal
displayProducts(products);

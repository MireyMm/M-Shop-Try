// Data produk toko
const products = [
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

// Tampilkan produk di halaman
function displayProducts(items) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  items.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>


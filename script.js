* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background: #f2f2f2;
  color: #333;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

header h1 {
  font-size: 2em;
  color: #2ecc71;
}

header h1 span {
  color: #333;
}

#searchInput {
  padding: 10px;
  width: 220px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

main {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

#product-list {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.product {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 15px;
  text-align: center;
  transition: 0.3s;
}

.product:hover {
  transform: scale(1.03);
}

.product h3 {
  margin-bottom: 8px;
}

.product p {
  margin-bottom: 10px;
  font-weight: bold;
}

.product button {
  background: #2ecc71;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

#cart {
  flex: 1;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 20px;
  height: fit-content;
}

#cart h2 {
  margin-bottom: 10px;
}

#cart-items {
  list-style: none;
  margin-bottom: 10px;
}

#cart-items li {
  margin-bottom: 5px;
}

#cart button {
  background: #e67e22;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

#receipt-section {
  margin-top: 30px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: none;
}

#receipt-section.show {
  display: block;
}

#receipt {
  background: #f1f1f1;
  padding: 15px;
  border-radius: 8px;
  font-family: monospace;
}


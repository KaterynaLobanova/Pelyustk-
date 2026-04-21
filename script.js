const cartItems = [];
const cartList = document.getElementById('cart-list');
const itemCount = document.getElementById('item-count');
const totalPrice = document.getElementById('total-price');
const clearCartButton = document.getElementById('clear-cart');
const selectButtons = document.querySelectorAll('.select-btn');

function formatPrice(value) {
  return `${value} грн`;
}

function renderCart() {
  cartList.innerHTML = '';

  if (cartItems.length === 0) {
    cartList.innerHTML = '<li class="empty-message">Кошик порожній. Додайте товари з каталогу.</li>';
    itemCount.textContent = '0';
    totalPrice.textContent = '0 грн';
    return;
  }

  let total = 0;

  cartItems.forEach((item) => {
    total += item.price;
    const listItem = document.createElement('li');
    listItem.className = 'cart-item';
    listItem.innerHTML = `<span>${item.name}</span><span>${formatPrice(item.price)}</span>`;
    cartList.appendChild(listItem);
  });

  itemCount.textContent = String(cartItems.length);
  totalPrice.textContent = formatPrice(total);
}

selectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    cartItems.push({ name, price });
    renderCart();
  });
});

clearCartButton.addEventListener('click', () => {
  cartItems.length = 0;
  renderCart();
});

renderCart();

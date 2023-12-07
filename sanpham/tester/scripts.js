function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const productName = card.querySelector('h1').innerText.toLowerCase();

        if (productName.includes(searchTerm)) {
            card.style.display = 'inline-block';
        } else {
            card.style.display = 'none';
        }
    });
}
document.getElementById('rentalForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;

    await fetch('/api/rentals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brand, model, year })
    });

    loadRentals();
});

async function loadRentals() {
    const res = await fetch('/api/rentals');
    const data = await res.json();
    const list = document.getElementById('rentalList');
    list.innerHTML = '';
    data.forEach((rental, index) => {
        const li = document.createElement('li');
        li.textContent = `${rental.brand} ${rental.model} (${rental.year})`;
        list.appendChild(li);
    });
}

loadRentals();

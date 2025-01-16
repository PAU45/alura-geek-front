async function fetchTopProducts() {
    try {
        const response = await fetch('http://localhost:3000/api/products/top?limit=10'); // Cambia el límite si es necesario
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
        const productGrid = document.getElementById('top-product-grid');

        // Limpia el contenedor antes de agregar nuevos elementos
        productGrid.innerHTML = '';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'bg-white shadow-md rounded-lg overflow-hidden flex flex-col';
            productItem.innerHTML = `
                <img src="${product.imagen_url || 'img/default-image.jpg'}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="text-xl font-semibold">${product.name}</h3>
                    <p class="text-gray-600 mt-2">$${product.price}</p>
                    <p class="text-gray-600 mt-2">${product.description}</p>
                    ${product.rating ? `<p class="flex items-center text-yellow-500"><i class="fas fa-star"></i> ${product.rating}</p>` : ''}
                    <button class="mt-auto bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Agregar al carrito</button>
                </div>
            `;
            productGrid.appendChild(productItem);
        });
    } catch (error) {
        console.error('Error al recuperar los productos:', error);
        const productGrid = document.getElementById('top-product-grid');
        productGrid.innerHTML = '<p class="text-red-500">No se pudieron cargar los productos. Inténtalo más tarde.</p>';
    }
}

// Ejecutar cuando se cargue la página
document.addEventListener('DOMContentLoaded', fetchTopProducts);

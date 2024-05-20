// inicio de sesion

// Lista de usuarios y contraseñas temporal
const usuarios = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' },
];

function handleSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

    if (usuarioValido) {
        alert('Inicio de sesión exitoso. ¡Bienvenido!');
        window.location.href = '../pages/gestor_inventario.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
}

document.getElementById('loginForm');document.addEventListener('submit', handleSubmit);


// gestor de inventario

let inventario = [];

function handleAddProduct(event) {
    event.preventDefault();

    
    const productName = document.getElementById('productName').value;
    const productQuantity = parseInt(document.getElementById('productQuantity').value);

    
    if (!productName || isNaN(productQuantity) || productQuantity <= 0) {
        alert('Por favor, ingresa un nombre de producto válido y una cantidad válida.');
        return;
    }

    const newProduct = { name: productName, quantity: productQuantity };
    inventario.push(newProduct);


    document.getElementById('productName').value = '';
    document.getElementById('productQuantity').value = '';

    updateInventoryTable();
}


function updateInventoryTable() {
    const tableBody = document.getElementById('inventoryBody');
    tableBody.innerHTML = '';


    inventario.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
        `;
        tableBody.appendChild(row);
    });
}


document.getElementById('addProductForm').addEventListener('submit', handleAddProduct);







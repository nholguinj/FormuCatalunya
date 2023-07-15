let numero = localStorage.getItem('numeroList');
let items = localStorage.getItem('itemList');
let cant = localStorage.getItem('cantList');
let precio = localStorage.getItem('precioList');


numero = numero ? JSON.parse(numero) : [];
items = items ? JSON.parse(items) : [];
cant = cant ? JSON.parse(cant) : [];
precio = precio ? JSON.parse(precio) : [];



showItem();

function addItem() {
  let pedido = document.getElementById('pedido').value;
  let producto = document.getElementById('producto').value;
  let cantidad = document.getElementById('cantidad').value;
  let valor = document.getElementById('valor').value;



  if (pedido && producto && cantidad && valor) {
    numero.push(pedido);
    items.push(producto);
    cant.push(cantidad);
    precio.push(valor);

    saveToLocalStorage();
    showItem();
  }
}

function showItem() {
  document.getElementById('pedido').value = '';
  document.getElementById('producto').value =  '';
  document.getElementById('cantidad').value = '';
  document.getElementById('valor').value = '';


  let html = '';

  if (items.length === 0) {
    html = 'No Hay Elementos';
  } else {
    for (let i = 0; i < items.length; i++) {
      let total = cant[i] * precio[i]; // Calcular el total de precio por cantidad

      html += `<div class="row">
                  <div class="col-1 mb-3">${numero[i]}</div>
                  <div class="col-1 mb-3">${cant[i]}</div>
                  <div class="col-4 mb-3">${items[i]}</div>
                  <div class="col-2 mb-3">${precio[i]}</div>
                  <div class="col-2 mb-3">${total}</div>
                  <div class="col-2 mb-3">
                    <a href="#" class="btn btn-danger" onclick="deleteItem(${i})">x</a>
                  </div>
                </div>`;
    }
  }

  document.getElementById('items').innerHTML = html;
}

function deleteItem(index) {
  numero.splice(index, 1);
  items.splice(index, 1);
  cant.splice(index, 1);
  precio.splice(index, 1);


  saveToLocalStorage();
  showItem();
}

function saveToLocalStorage() {
  localStorage.setItem('numeroList', JSON.stringify(numero));
  localStorage.setItem('itemList', JSON.stringify(items));
  localStorage.setItem('cantList', JSON.stringify(cant));
  localStorage.setItem('precioList', JSON.stringify(precio));
}

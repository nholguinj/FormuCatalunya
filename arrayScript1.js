let categories = localStorage.getItem('itemList')
categories = categories ? categories.split(',') : []
showItem()

function addItem() {
    let item = document.getElementById('item').value
    item = item.split(',')
    for (let i = 0; i < item.length; i++) {
        if (item[i]) {
            categories.push(item[i])
        }
    }
    showItem();
}

function showItem() {
    document.getElementById('item').value = ''
    let html = ''
    if (categories.length === 0) {
        html = 'No Hay Elementos';
    } else {
        for (let i = 0; i < categories.length; i++) {
            html += `<div class="row">
                <div class="col-9 text-left ml-6">${categories[i]}<br></div>
                <a href="#" class="btn btn-danger col-2" onclick="deleteItem(${i})">x</a>
            </div>`;
        }
    }

    document.getElementById('items').innerHTML = html
    localStorage.setItem('itemList', categories)
}

function deleteItem(index) {
    categories.splice(index, 1)
    showItem()
}

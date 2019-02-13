
var list = JSON.parse(localStorage.getItem('list_item')) || [];

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

function render(){

    listElement.innerHTML = '';

    for(item of list){
        var itemElement = document.createElement('li');
        var itemText = document.createTextNode(item);

        var linkElement = document.createElement('button');
        linkElement.setAttribute('class', 'delete')

        var pos = list.indexOf(item);
        linkElement.setAttribute('onclick', 'deleteItem('+ pos +')')
        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);

        itemElement.appendChild(itemText);
        itemElement.appendChild(linkElement);

        listElement.appendChild(itemElement);
    }
}

render();

function saveItem(){
    localStorage.setItem('list_item', JSON.stringify(list));
}

function newItem(){
    var itemText = inputElement.value;

    list.push(itemText);
    inputElement.value = '';
    saveItem();
    render();
}

function deleteItem(pos){
    list.splice(pos, 1);
    saveItem();
    render();
}

btnElement.onclick = newItem;
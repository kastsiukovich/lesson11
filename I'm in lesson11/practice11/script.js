{/* <a href="#!" class="breadcrumb">Third</a> */}
function addNewLink(){
 var currentLink = document.createElement('a');
 currentLink.setAttribute('href', '#!');
 currentLink.setAttribute('class', 'breadcrumb');
currentLink.innerText = 'Four';

document.querySelector('#list-links').append(currentLink);

}

function addNewItem(){
    var addNewItem1 = document.querySelector('.collection');
    var newItem = document.createElement('a');
    newItem.setAttribute('href', '#!');
    newItem.setAttribute('class', 'collection-item');
    newItem.innerText = 'Item 5';
    addNewItem1.appendChild(newItem);
}

// input
function submitName(){
    var form = document.forms.form1;
    var elemFirstName = form.elements.firstName;
    var errorMessege = document.querySelector('.error-message');
    // if(elemFirstName.value === ''){
        if(elemFirstName.value.trim() === ''){
        errorMessege.style.display = 'block';
        elemFirstName.focus();
    }else{
        errorMessege.style.display = 'none';

    }
}
var btmSumitName = document.querySelector('#btn-submit-name');
btmSumitName.onclick = ifFirstName;
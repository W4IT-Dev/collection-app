function handleSoftRight(){
    if(!addCollection.classList.contains('hidden')) return newCollection(document.querySelector('#collection-name').value, document.querySelector('.switch-input').checked);
    if(!addItem.classList.contains('hidden')) return newitem(document.querySelector('#item-name').value, document.querySelector('#item-description').value, []);
    opencloseOptionsMenu();
}
function handleSoftLeft() {
    if (!collectionList.classList.contains('hidden')) {
        addCollection.classList.remove('hidden');
        return document.querySelector('.kui-input').focus();
    }
    if(!addCollection.classList.contains('hidden')) {
        document.querySelector('.kui-input').value = '';
        document.querySelector('.switch-input').checked = false;
        addCollection.classList.add('hidden')
    }
    
}
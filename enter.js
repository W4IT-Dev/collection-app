function handleEnter() {
    const a = document.activeElement;
    if(a.classList.contains('collection')) return openCollection();
    if(a.classList.contains('item')) return openItem();
    if(a.classList.contains('new-collection-list-item') && !a.classList.contains('switch-input')) return newCollection(a.value, document.querySelector('.switch-input').checked);
    // if(aecl.contains('item')) return openCollection();
}
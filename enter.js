function handleEnter() {
    const a = document.activeElement;
    if(a.classList.contains('collection')) return openCollection();
    if(a.classList.contains('item')) return openItem();
    if(a.classList.contains('switch-input')) return a.checked = !a.checked;
    // if(aecl.contains('item')) return openCollection();
}
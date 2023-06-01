function handleEnter() {
    const aecl = document.activeElement.classList    
    console.log(document.activeElement.classList)
    if(document.activeElement.classList.contains('collection')) return openCollection();
    if(document.activeElement.classList.contains('item')) return openItem();
    // if(aecl.contains('item')) return openCollection();
}
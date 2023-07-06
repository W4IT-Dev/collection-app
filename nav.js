function navigate(a) {
    let focusedElement = document.activeElement;
    if (a === "ArrowDown") {
        if (focusedElement.classList.contains('collection')) return nav(1, 'collection'), console.log('yo');
        if (focusedElement.classList.contains('item')) return nav(1, 'item');
        if (focusedElement.classList.contains('list-item-w-title')) return nav(1, 'list-item-w-title');
        return
    }
    if (a === "ArrowUp") {
        if (focusedElement.classList.contains('collection')) return nav(-1, 'collection');
        if (focusedElement.classList.contains('item')) return nav(-1, 'item');
        if (focusedElement.classList.contains('list-item-w-title')) return nav(-1, 'list-item-w-title');
    }
}
function navigate(a) {
    let focusedElement = document.activeElement;
    if (a === "ArrowDown") {
        if (focusedElement.classList.contains('collection')) return nav(1, 'collection'), console.log('yo');
        if (focusedElement.classList.contains('item')) return nav(1, 'item');
        return
    }
    if (a === "ArrowUp") {
        if (focusedElement.classList.contains('collection')) return nav(-1, 'collection');
        if (focusedElement.classList.contains('item')) return nav(-1, 'item');

    }
}
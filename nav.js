function navigate(a) {
    let focusedElement = document.activeElement;
    if (a === "ArrowDown") {
        if (focusedElement.classList.contains('collection')) return nav(1, 'collection');
        if (focusedElement.classList.contains('item')) return nav(1, 'item');
        if (focusedElement.classList.contains('list-item-w-title')) return nav(1, 'list-item-w-title');
        if(focusedElement.classList.contains('content-list-item')) return nav(1, 'content-list-item')
        if(focusedElement.classList.contains('new-collection-list-item')) return nav(1, 'new-collection-list-item')
        if(focusedElement.classList.contains('new-item-list-item')) return nav(1, 'new-item-list-item')
        return
    }
    if (a === "ArrowUp") {
        if (focusedElement.classList.contains('collection')) return nav(-1, 'collection');
        if (focusedElement.classList.contains('item')) return nav(-1, 'item');
        if (focusedElement.classList.contains('list-item-w-title')) return nav(-1, 'list-item-w-title');
        if(focusedElement.classList.contains('content-list-item')) return nav(-1, 'content-list-item')
        if(focusedElement.classList.contains('new-collection-list-item')) return nav(-1, 'new-collection-list-item')
        if(focusedElement.classList.contains('new-item-list-item')) return nav(-1, 'new-item-list-item')

    }
}
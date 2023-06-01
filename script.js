


document.addEventListener('keydown', e => {
    if (e.key.includes('Arrow')) return navigate(e.key);
    if (e.key == "SoftRight") opencloseOptionsMenu();
    if (e.key == "Enter") handleEnter();
    if(e.key == "Backspace") return history ? (e.preventDefault, back()) : 0 
})

window.onerror = (a, b, c, d, e) => {
    console.error(`message: ${a} at ${b} in line ${c} at column ${d}`);
    return true;
};

// document.querySelector('.list-item').focus();

function nav(move, navClass) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.getElementsByClassName(navClass);
    const targetElement = items[next];
    // console.log(currentIndex, next, items, targetElement)
    if (targetElement) targetElement.focus();
}


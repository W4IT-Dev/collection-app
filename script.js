document.addEventListener('keydown', e => {
    if (e.key.includes('Arrow')) return navigate(e.key);
    if (e.key == "SoftLeft") handleSoftLeft();
    if (e.key == "SoftRight") handleSoftRight();
    if (e.key == "Enter") handleEnter();
    if (e.key == "Backspace") return history ? (e.preventDefault(), back()) : false
})

window.onerror = (a, b, c, d, e) => {
    console.error(`message: ${a} at ${b} in line ${c} at column ${d}`);
    return true;
};


function nav(move, navClass) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.getElementsByClassName(navClass);
    const targetElement = items[next];
    if (targetElement) targetElement.focus();
}

function softkeyaa(e) {
    const { target, key, bubbles, cancelable, repeat, type } = e;
    if (!/Left|Right/.test(key) || !key.startsWith("Arrow") || !e.ctrlKey) return;
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    target.dispatchEvent(new KeyboardEvent(type, { key: "Soft" + key.slice(5), bubbles, cancelable, repeat }));
}

document.addEventListener("keyup", softkeyaa, true);
document.addEventListener("keydown", softkeyaa, true);

getKaiAd({
    publisher: 'fe2d9134-74be-48d8-83b9-96f6d803efef',
    app: 'Collect it test',
    onerror: err => console.error('Error:', err),
    onready: ad => {
        ad.call('display');
    }
})
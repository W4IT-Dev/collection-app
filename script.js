function opencloseOptionsMenu() {
    if (!optionsmenu.classList.contains('hidden')) {
        optionsmenu.classList.add('hidden');
        lastFocused.focus();
        if (lastFocused.classList.contains('medicine-list-item')) return updateSoftkeydisplay("Add", "VIEW", "Options")
        return
    }
    lastFocused = document.activeElement;
    optionsmenu.classList.remove('hidden');
    // updateSoftkeydisplay(" ", "SELECT", "Close")
    document.querySelector('.content-list-item').focus();
}

let optionsmenu = document.querySelector('#options-menu')

document.addEventListener('keydown', e => {
    if (e.key == "SoftRight") opencloseOptionsMenu();
    if (e.key === "ArrowUp") nav(-1, document.activeElement.classList[0]);
    if (e.key === "ArrowDown") nav(1, document.activeElement.classList[0]);
    if (e.key === "ArrowLeft") nav(-1, document.activeElement.classList[0]);
    if (e.key === "ArrowRight") nav(1, document.activeElement.classList[0]);
    if(e.key == "Enter") {
        if(document.activeElement.innerText == "Share") {
            alert('send sms')
            var activity = new MozActivity({
                name: "new",
                data: {
                  type: "websms/sms",
                  body: "Hello. This is my Star Wars collection. It has following items: Darth Vaddada, Yoda, Luke skywalker."
                }
              });
              
        }
    }
})

window.onerror = (a, b, c, d, e) => {
    console.error(`message: ${a} at ${b} in line ${c} at column ${d}`);
    return true;
};

document.querySelector('.list-item').focus();

function nav(move, navClass) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.getElementsByClassName(navClass);
    const targetElement = items[next];
    if (targetElement) targetElement.focus();
}

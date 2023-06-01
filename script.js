


document.addEventListener('keydown', e => {
    if(e.key.includes('Arrow')) return navigate(e.key);
    if (e.key == "SoftRight") opencloseOptionsMenu();
    // if (e.key === "ArrowUp") nav(-1, document.activeElement.classList[0]);
    // if (e.key === "ArrowDown") nav(1, document.activeElement.classList[0]);
    // if (e.key === "ArrowLeft") nav(-1, document.activeElement.classList[0]);
    // if (e.key === "ArrowRight") nav(1, document.activeElement.classList[0]);
    if (e.key == "Enter") {
        handleEnter();
        // if (document.activeElement.firstElementChild.classList.contains('leftside')) {
        //     document.activeElement.parentElement.classList.add('hidden');
        //     document.querySelector('.collection').classList.remove('hidden');
        //     document.querySelector('.collection').firstElementChild.focus();

        // }
        // if (document.activeElement.innerText == "Share") {
        //     alert('send sms')
        //     var activity = new MozActivity({
        //         name: "new",
        //         data: {
        //             type: "websms/sms",
        //             body: "Hello. This is my Star Wars collection. It has following items: Darth Vaddada, Yoda, Luke skywalker."
        //         }
        //     });

        // }
    }
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


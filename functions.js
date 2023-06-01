function startApp() {
    loadCollections();
}

function imageToBase64(image) {

}

function loadCollections() {
    let pinned = `<div class="divider">
    <div class="title">PINNED</div>
    <div class="line"></div>
</div>`
    let all = `<div class="divider">
<div class="title">ALL</div>
<div class="line"></div>
</div>`
    for (let i = 0; i < collections.length; i++) {
        if (collections[i].pinned) {
            pinned += `
<div class="list-item collection" tabindex="${i}">
<div class="leftside">
<p class="primary">${collections[i].name}</p>
<p class="secondary">${collections[i].items.length} item(s)</p>
</div>
<div class="rightside">></div>
</div>`
        } else {
            all += `<div class="list-item collection" tabindex="${i}">
<div class="leftside">
<p class="primary">${collections[i].name}</p>
<p class="secondary">${collections[i].items.length} item(s)</p>
</div>
<div class="rightside">></div>
</div>`
        }
    }
    collectionList.innerHTML = pinned + all + `<img src="${localStorage.base64}" alt="meh" height="320px" widht: "240px">`;
    document.querySelector('.list-item').focus();
}

function openCollection() {
    const index = document.activeElement.tabIndex;

    if (document.activeElement.classList.contains('collection')) {
        collection.innerHTML = '';
        for (let i = 0; i < collections[index].items.length; i++) {
            collection.innerHTML += `<div class="list-item item" tabindex="${i}">
            <div class="leftside">
                <p class="primary">${collections[index].items[i].name} </p>
                <p class="secondary">${collections[index].items[i].description}</p>
            </div>
            <div class="rightside"><img src="${collections[index].items[i].images[0]}" height="40px" alt="img"></div>
        </div>`
        }

        collection.innerHTML += '<input type="file" accept="image/*" class="item local" />'
        collectionList.classList.toggle('hidden');
        collection.classList.toggle('hidden');
        document.querySelector('.item').focus();
        const $file = document.querySelector(".local");
        $file.addEventListener("change", (event) => {
            const selectedfile = event.target.files;
            if (selectedfile.length > 0) {
                const [imageFile] = selectedfile;
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    const srcData = fileReader.result;
                    console.log(srcData)
                    base64 = srcData;
                    localStorage.base64 = base64;
                };
                fileReader.readAsDataURL(imageFile);
            }
        });
    }
}

function openItem() {
    // const index = document.activeElement.tabIndex;

    collection.style.disply = 'none';
    item.style.display = 'block'
}

function opencloseOptionsMenu() {
    if (!optionsmenu.classList.contains('hidden')) {
        optionsmenu.classList.add('hidden');
        lastFocused.focus();
       setSoftkeys("Add", "SELECT", "Options")
        return
    }
    lastFocused = document.activeElement;
    optionsmenu.classList.remove('hidden');
    setSoftkeys("", "SELECT", "Close")
    document.querySelector('.content-list-item').focus();
}

function setSoftkeys(left, center, right) {
    left ? softkey[0].innerHTML = left : softkey[0].innerText = ''
    center ? softkey[1].innerHTML = center : softkey[1].innerText = ''
    right ? softkey[2].innerHTML = right : softkey[2].innerText = ''
}

function back(){
}
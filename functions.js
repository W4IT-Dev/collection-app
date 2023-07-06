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
    collectionList.innerHTML = pinned + all;
    document.querySelector('.list-item').focus();
}
let activeColection;
function openCollection() {
    activeColection = document.activeElement.tabIndex;

    if (document.activeElement.classList.contains('collection')) {
        collection.innerHTML = '';
        for (let i = 0; i < collections[activeColection].items.length; i++) {
            collection.innerHTML += `<div class="list-item item" tabindex="${i}">
            <div class="leftside">
                <p class="primary">${collections[activeColection].items[i].name}</p>
                <p class="secondary">${collections[activeColection].items[i].description}</p>
            </div>
            <div class="rightside"><img src="${collections[activeColection].items[i].images[0]} || data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII= " height="40px" alt=""></div>
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

    item.innerHTML = `
    <div class="list-item-w-title" tabindex="0">
                <div class="description secondary">Name</div>
                <div class="value primary name">${collections[activeColection].items[document.activeElement.tabIndex].name}
                </div>
            </div>
            <div class="list-item-w-title" tabindex="1">
                <div class="description secondary">Description</div>
                <div class="value primary description">${collections[activeColection].items[document.activeElement.tabIndex].description}</div>
            </div>
            <div class="list-item-w-title" tabindex="1">
                <div class="description secondary">Images</div>
                <div class="value primary images">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt=""
                        height="20px" width="20px">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt=""
                        height="20px" width="20px">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt=""
                        height="20px" width="20px">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" alt=""
                        height="20px" width="20px">
                </div>

            </div>`
    collection.classList.add('hidden');
    item.classList.remove('hidden');
    setSoftkeys('Back', 'EDIT', 'Options');
    document.querySelector('.list-item-w-title').focus();

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

function back() {
}
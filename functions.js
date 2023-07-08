function startApp() {
    loadCollections();
}

function imageToBase64(image) {

}

function showToast(text, time) {
    document.querySelector(".kui-toast").style.display = "block";
    document.querySelector(".kui-pri").innerHTML = text;
    setTimeout(function () {
        document.querySelector(".kui-toast").classList.add("byetoast")
        setTimeout(function () {
            document.querySelector(".kui-toast").style.display = "none";
            document.querySelector(".kui-toast").classList.remove("byetoast");
        }, 500);
    }, time ? time : 3000);
}

function loadCollections() {
    let pinned = `<div class="divider"> <div class="title">PINNED</div> <div class="line"></div> </div>`
    let all = `<div class="divider"> <div class="title">ALL</div> <div class="line"></div> </div>`
    for (let i = 0; i < collections.length; i++) {
        // console.log(i)
        if (collections[i].pinned) {
            // console.log(i)
            pinned += `
                    <div class="list-item collection" onfocus="setSoftkeys('Add', 'SELECT', 'Options'), setOptions('Unpin', 'Delete', 'Settings')" id="${i}">
                        <div class="leftside">
                            <p class="primary">${collections[i].name}</p>
                            <p class="secondary">${collections[i].items.length}${collections[i].items.length > 1 ? " items" : " item"}</p>
                        </div>
                        <div class="rightside"><img src="/arrow_right.png" alt=">"></div>
                    </div>`
        } else {
            // console.log(i)

            all += `<div class="list-item collection" onfocus="setSoftkeys('Add', 'SELECT', 'Options'), setOptions('Pin', 'Delete', 'Settings')" id="${i}">
                        <div class="leftside">
                            <p class="primary">${collections[i].name}</p>
                            <p class="secondary">${collections[i].items.length}${collections[i].items.length > 1 ? " items" : " item"}</p>
                            </div>
                        <div class="rightside"><img src="/arrow_right.png" alt=">"></div>
                    </div>`
        }
    }
    
    collectionList.innerHTML = pinned + all;
    for(let i = 0; i < document.querySelectorAll('.collection').length; i++) {
        document.querySelectorAll('.collection')[i].tabIndex = i;
    }
    document.querySelector('.list-item').focus();
}
let activeColection;
function openCollection() {
    history.push('collection')
    activeColection = document.activeElement.id;
    header.innerText = collections[activeColection].name;
    if (collections[activeColection].items == false) {
        alert('no items')
        collection.innerHTML = `
        <button onfocus="setSoftkeys('Back','SELECT','Options'), setOptions('Settings')" onclick="newitem();">Add Item</button>
        `
        collectionList.classList.toggle('hidden');
        collection.classList.toggle('hidden');
        document.querySelector('button').focus();

    } else {
    if (document.activeElement.classList.contains('collection')) {
        collection.innerHTML = '';
        for (let i = 0; i < collections[activeColection].items.length; i++) {
            collection.innerHTML += `
            <div class="list-item item" tabindex="${i}" onfocus="setSoftkeys('Add', 'SELECT', 'Options')">
                <div class="leftside">
                    <p class="primary">${collections[activeColection].items[i].name}</p>
                    <p class="secondary">${collections[activeColection].items[i].description}</p>
                </div>
                <div class="rightside"><img src="${collections[activeColection].items[i].images[0]}" height="40px" alt=""></div>
            </div>`
        }

        collectionList.classList.toggle('hidden');
        collection.classList.toggle('hidden');
        document.querySelector('.item').focus();
        setOptions('Pin', 'Delete', 'Settings')
    }
    }
}

function openItem() {
    history.push('item')
    header.innerText = collections[activeColection].items[document.activeElement.tabIndex].name;

    let html = `
        <div class="list-item-w-title" tabindex="0" onfocus="setSoftkeys('Back', 'EDIT', 'Options')">
            <div class="description secondary">Name</div>
            <div class="value primary name">${collections[activeColection].items[document.activeElement.tabIndex].name}</div>
        </div>
        <div class="list-item-w-title" tabindex="1" onfocus="setSoftkeys('Back', 'EDIT', 'Options')">
            <div class="description secondary">Description</div>
            <div class="value primary description">${collections[activeColection].items[document.activeElement.tabIndex].description}</div>
        </div>
        <div class="list-item-w-title" id="images" tabindex="2" onfocus="setSoftkeys('Back', 'VIEW', 'Options')">
            <div class="description secondary">Images</div>
            <div class="value primary images">`
    for (let i = 0; i < collections[activeColection].items[document.activeElement.tabIndex].images.length; i++) {
        html += `<img src="${collections[activeColection].items[document.activeElement.tabIndex].images[i]}" alt="image">`
    }
    item.innerHTML = html + "</div></div>"
    collection.classList.add('hidden'), item.classList.remove('hidden');
    document.querySelector('.list-item-w-title').focus();
}

function newCollection(name, pinned) {
    console.log('yo')
    collections.push({
        name: name,
        pinned: pinned,
        items: []
    });
    loadCollections();
    addCollection.classList.add('hidden');
    document.querySelector('.kui-input').value = ""
    document.querySelector('.switch-input').checked = false;
    localStorage.collections = JSON.stringify(collections)
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

function setOptions() {
    html = ' <header id="options-menu-header" data-translate="options">Options</header>'
    for (let i = 0; i < arguments.length; i++) {
        html += `<div class="content-list-item" tabindex="${i}" onfocus="setSoftkeys('','SELECT', 'Close')">${arguments[i]}</div>`
    }
    optionsmenu.innerHTML = html
}

function back() {
    if (!history) return
    if (history[history.length-1] == "item") return history = history.pop(), item.classList.add('hidden'), collection.classList.remove('hidden'), document.querySelector('.item').focus(), header.innerText = collections[activeColection].name;
    if (history[history.length-1] == "collection") return history = history.pop(),collection.classList.add('hidden'), collectionList.classList.remove('hidden'), document.querySelector('.collection').focus(), header.innerText = "Collection list";
}
function startApp() {
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

function imageToBase64(image) {
    
}


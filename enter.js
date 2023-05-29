function handleEnter() {
    let index = document.activeElement.tabIndex;

    // === OPEN COLLECTION ===
    if (document.activeElement.classList.contains('collection')) {
        collection.innerHTML = '';
        for (let i = 0; i < collections[index].items.length; i++) {
            collection.innerHTML += `<div class="list-item item" tabindex="${i}">
            <div class="leftside">
                <p class="primary">${collections[index].items[i].name} </p>
                <p class="secondary">${collections[index].items[i].description}</p>
            </div>
            <div class="rightside"><img src="" alt="img"></div>
        </div>`
        }
        
        collection.innerHTML+='<input type="file" accept="image/*" class="item local" />'
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
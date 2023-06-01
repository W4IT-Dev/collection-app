const optionsmenu = document.querySelector('#options-menu');
const collectionList = document.querySelector('.collection-list');
const collection = document.querySelector('.collection');
const item = document.querySelector('.item-info')
const softkey = [
    document.querySelector('#left'),
    document.querySelector('#center'),
    document.querySelector('#right'),
    document.querySelector('#softkeys')
]

let base64;
let collections = [{
    name: "Star Wars",
    pinned: true,
    items: [{
        name: "Darth Vader",
        description: "figure",
        images: ["data:64"]
    }, {
        name: "Darth Vader",
        description: "figure",
        images: ["data:64"]
    }]
}, {
    name: "LEGO",
    pinned: false,
    items: [{
        name: "lol",
        description: "figure",
        images: ["data:64"]
    }, {
        name: "a",
        description: "figure",
        images: ["data:64"]
    }]
}]
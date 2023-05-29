const optionsmenu = document.querySelector('#options-menu');
const collectionList = document.querySelector('.collection-list');

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
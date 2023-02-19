/*
 ** Template code that change the background color of google page
 */

let active = false;

function makeOrange(color: string): void {
    document.body.style.backgroundColor = color;
}

chrome.action.onClicked.addListener((tab) => {
    active = !active;
    const color = active ? 'orange' : 'white';
    chrome.scripting.executeScript({
        target: {tabId: tab.id ? tab.id : -1},
        func: makeOrange,
        args: [color]
    }).then();
});

console.log('hi from page.js');

let mylinkObject = document.getElementById('myh1');
mylinkObject.onclick = navigateToPage2;

async function navigateToPage2(){
    chrome.runtime.sendMessage({
        message: 'detailPageNaviToPage2',
    });
}
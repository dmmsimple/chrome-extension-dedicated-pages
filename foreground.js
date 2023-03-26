
let myextension_maincontainer = document.createElement('div');
myextension_maincontainer.id = 'this_is_my_grid-main-container';
document.body.appendChild(myextension_maincontainer);

let bottombar = document.createElement('div');
bottombar.id = 'this_is_my_bottom_bar';
myextension_maincontainer.appendChild(bottombar);


let detaillink = document.createElement('div');
detaillink.id = 'this_is_my_detail_link';
detaillink.onclick = OpenDetailPage;
myextension_maincontainer.appendChild(detaillink);


async function OpenDetailPage(){
    await chrome.runtime.sendMessage({
        message: 'openDetailPage',
    });
}
chrome.tabs.onUpdated.addListener(async (tabId, state, tab) => {
  if (chrome.runtime.lastError) {
    sendResponse({ message: "fail" });
    return;
  }
  if (state.status === "complete" && /^http/.test(tab.url)) {
    try {
      
      await chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ["./css/foreground.css"],
      });

      await chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["./foreground.js"],
      });

     
    } catch (err) {
      console.warn(err);
    }
  }
  return true;
});


chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.message === 'openDetailPage'){
    await OpenDetailPage(request).then(sendResponse({
      message: 'done',
    }));
  } else if (request.message === 'detailPageNaviToPage2'){
    navigateToPage2(request).then(sendResponse({
      message: 'done that as well',
    }));
  }
})

async function OpenDetailPage(data){
  let myUrl = chrome.runtime.getURL('./mypages/page.html');
  chrome.tabs.create({ url: myUrl });
  return true;
}

async function navigateToPage2(data){
  let myUrl = chrome.runtime.getURL('./mypages/page2.html');
  chrome.tabs.update({ url: myUrl });
  return true;
}
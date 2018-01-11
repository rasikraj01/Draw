chrome.browserAction.onClicked.addListener(trigger);

function trigger(tab){
   let msg ={
      trigger:true
   }
   chrome.tabs.sendMessage(tab.id, msg);
}
console.log('background script');

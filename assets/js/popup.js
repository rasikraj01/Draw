// /**
//  * Get the current URL.
//  * @param {function(string)} callback called when the URL of the current tab
//  *   is found.
//  */
// function getCurrentTabUrl(callback) {
//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };
//
//   chrome.tabs.query(queryInfo, (tabs) => {
//     var tab = tabs[0];
//     var url = tab.url;
//     console.assert(typeof url == 'string', 'tab.url should be a string');
//     callback(url);
//   });
// }
//
// /**
//  * Change the background color of the current page.
//  *
//  * @param {string} color The new background color.
//  */
// function changeBackgroundColor(color) {
//   var script = 'document.body.style.backgroundColor="' + color + '";';
//   chrome.tabs.executeScript({
//     code: script
//   });
// }
//
// /**
//  * Gets the saved background color for url.
//  * @param {string} url URL whose background color is to be retrieved.
//  * @param {function(string)} callback called with the saved background color for
//  *     the given url on success, or a falsy value if no color is retrieved.
//  */
// function getSavedBackgroundColor(url, callback) {
//   chrome.storage.sync.get(url, (items) => {
//     callback(chrome.runtime.lastError ? null : items[url]);
//   });
// }
//
// /*
//  * Sets the given background color for url.
//  * @param {string} url URL for which background color is to be saved.
//  * @param {string} color The background color to be saved.
//  */
// function saveBackgroundColor(url, color) {
//   var items = {};
//   items[url] = color;
//   chrome.storage.sync.set(items);
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   getCurrentTabUrl((url) => {
//     var dropdown = document.getElementById('dropdown');
//
//     // Load the saved background color for this page and modify the dropdown
//     // value, if needed.
//     getSavedBackgroundColor(url, (savedColor) => {
//       if (savedColor) {
//         changeBackgroundColor(savedColor);
//         dropdown.value = savedColor;
//       }
//     });
//
//     // Ensure the background color is changed and saved when the dropdown
//     // selection changes.
//     dropdown.addEventListener('change', () => {
//       changeBackgroundColor(dropdown.value);
//       saveBackgroundColor(url, dropdown.value);
//     });
//   });
// });

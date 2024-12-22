chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'someAction') {
      someAsyncFunction().then(response => {
        sendResponse(response);
      }).catch(error => {
        console.error(error);
        sendResponse({ error: 'An error occurred' });
      });
      return true;
    }
  });
  
  async function someAsyncFunction() {
    return { success: true };
}
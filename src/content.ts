import { StorageKeys } from "./common/storageKeys";

document.addEventListener("copy", function (e) {
  let existingClipboards = [];
  const selection = document.getSelection();
  const selectedText = selection?.toString();

  try {
    const getClipboards = chrome.storage.local.get(StorageKeys.clipboards);

    getClipboards.then((res) => {
      existingClipboards = res.clipboards as string[];
      if (existingClipboards) {
        if (Array.isArray(existingClipboards) && !existingClipboards.find((x) => x === selectedText)) {
          const newClipboards = [...existingClipboards, selectedText];
          chrome.storage.local.set({ [StorageKeys.clipboards]: newClipboards });
        }
      } else {
        chrome.storage.local.set({ [StorageKeys.clipboards]: [selectedText] });
      }
    });
  } catch (error) {
    console.log(error);
    chrome.storage.local.set({ [StorageKeys.clipboards]: [selectedText] });
  }
});

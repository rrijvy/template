export class ClipboardTable extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const tableBody = document.createElement("tbody");
    const thRow = document.createElement("tr");
    const thCell1 = document.createElement("th");
    const thCell2 = document.createElement("th");

    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    tableHeader.appendChild(thRow);

    thRow.appendChild(thCell1);
    thRow.appendChild(thCell2);

    thCell1.textContent = "Text";
    thCell2.textContent = "Actions";

    chrome.storage.local.get(this.storageKeys.clipboards, (res) => {
      if (res && res.clipboards) {
        const clipboards = res.clipboards as string[];
        clipboards.forEach((clipboard) => {
          tableBody.appendChild(this.getTableRowElement(clipboard));
        });
      }
    });

    shadow.appendChild(table);
  }

  storageKeys = {
    clipboards: "clipboards",
  };

  getTableRowElement(data: string): HTMLTableRowElement {
    const tableRow = document.createElement("tr");
    const textColumn = document.createElement("td");
    const actionColumn = document.createElement("td");
    actionColumn.classList.add("flex-row");

    const copyBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    copyBtn.innerText = "copy";
    deleteBtn.innerText = "delete";
    copyBtn.classList.add("m-5");
    deleteBtn.classList.add("m-5");

    copyBtn.onclick = (event) => {
      navigator.clipboard.writeText(data);
    };

    deleteBtn.onclick = (event) => {
      chrome.storage.local.get(this.storageKeys.clipboards, (res) => {
        if (res && res.clipboards) {
          const clipboards = res.clipboards as string[];
          const newClipboards = clipboards.filter((x) => x !== data);
          chrome.storage.local.set({ [this.storageKeys.clipboards]: [...newClipboards] });
        }
      });
    };

    textColumn.innerText = data;
    actionColumn.appendChild(copyBtn);
    actionColumn.appendChild(deleteBtn);

    tableRow.appendChild(textColumn);
    tableRow.appendChild(actionColumn);

    return tableRow;
  }
}

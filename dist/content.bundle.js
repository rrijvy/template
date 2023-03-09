(() => {
  "use strict";
  let o;
  !(function (o) {
    o.clipboards = "clipboards";
  })(o || (o = {})),
    document.addEventListener("copy", function (c) {
      let e = [];
      const t = document.getSelection(),
        r = t?.toString();
      try {
        chrome.storage.local.get(o.clipboards).then((c) => {
          if (((e = c.clipboards), e)) {
            if (Array.isArray(e) && !e.find((o) => o === r)) {
              const c = [...e, r];
              chrome.storage.local.set({ [o.clipboards]: c });
            }
          } else chrome.storage.local.set({ [o.clipboards]: [r] });
        });
      } catch (c) {
        console.log(c), chrome.storage.local.set({ [o.clipboards]: [r] });
      }
    });
})();

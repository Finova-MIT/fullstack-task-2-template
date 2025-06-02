import style from "./popup.css";

let popupElement: HTMLDivElement;
let popupTimeout: NodeJS.Timeout;

const POPUP_TIMEOUT = 3000;

const createPopup = (message: string) => {
  if (popupTimeout) {
    clearTimeout(popupTimeout);
    popupElement.remove();
  }

  popupElement = document.createElement("div");

  Object.entries(style).forEach(([property, value]) => {
    popupElement.style[property as any] = value;
  });

  document.body.appendChild(popupElement);

  popupElement.textContent = message;

  popupTimeout = setTimeout(() => {
    popupElement.remove();
  }, POPUP_TIMEOUT);
};

export default createPopup;

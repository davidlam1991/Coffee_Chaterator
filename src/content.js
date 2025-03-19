// extract and store the username
const extractUserName = () => {
  const userNameElement = document.querySelector(
    "h1.v-align-middle.break-words"
  );
  const positionElement = document.querySelector(
    '[data-view-name="profile-component-entity"] span[aria-hidden="true"]'
  );

  if (userNameElement) {
    const userName = userNameElement.textContent;
    const position = positionElement.textContent;

    chrome.storage.local.set({ theUser: userName, thePosition: position });
  } else {
    setTimeout(extractUserName, 1000);
  }
};

setTimeout(extractUserName, 1000);

// Detect page changes on LinkedIn and update username
let lastUrl = location.href;
const observer = new MutationObserver(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    setTimeout(extractUserName, 1000);
  }
});

observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
});

/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
// extract and store the username
var _extractUserName = function extractUserName() {
  var userNameElement = document.querySelector("h1.v-align-middle.break-words");
  var positionElement = document.querySelector('[data-view-name="profile-component-entity"] span[aria-hidden="true"]');
  if (userNameElement) {
    var userName = userNameElement.textContent;
    var position = positionElement.textContent;
    chrome.storage.local.set({
      theUser: userName,
      thePosition: position
    });
  } else {
    setTimeout(_extractUserName, 1000);
  }
};
setTimeout(_extractUserName, 1000);

// Detect page changes on LinkedIn and update username
var lastUrl = location.href;
var observer = new MutationObserver(function () {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    setTimeout(_extractUserName, 1000);
  }
});
observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxJQUFNQSxnQkFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBLEVBQVM7RUFDNUIsSUFBTUMsZUFBZSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FDNUMsK0JBQ0YsQ0FBQztFQUNELElBQU1DLGVBQWUsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQzVDLHNFQUNGLENBQUM7RUFFRCxJQUFJRixlQUFlLEVBQUU7SUFDbkIsSUFBTUksUUFBUSxHQUFHSixlQUFlLENBQUNLLFdBQVc7SUFDNUMsSUFBTUMsUUFBUSxHQUFHSCxlQUFlLENBQUNFLFdBQVc7SUFFNUNFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLENBQUNDLEdBQUcsQ0FBQztNQUFFQyxPQUFPLEVBQUVQLFFBQVE7TUFBRVEsV0FBVyxFQUFFTjtJQUFTLENBQUMsQ0FBQztFQUN4RSxDQUFDLE1BQU07SUFDTE8sVUFBVSxDQUFDZCxnQkFBZSxFQUFFLElBQUksQ0FBQztFQUNuQztBQUNGLENBQUM7QUFFRGMsVUFBVSxDQUFDZCxnQkFBZSxFQUFFLElBQUksQ0FBQzs7QUFFakM7QUFDQSxJQUFJZSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBSTtBQUMzQixJQUFNQyxRQUFRLEdBQUcsSUFBSUMsZ0JBQWdCLENBQUMsWUFBTTtFQUMxQyxJQUFJSCxRQUFRLENBQUNDLElBQUksS0FBS0YsT0FBTyxFQUFFO0lBQzdCQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBSTtJQUN2QkgsVUFBVSxDQUFDZCxnQkFBZSxFQUFFLElBQUksQ0FBQztFQUNuQztBQUNGLENBQUMsQ0FBQztBQUVGa0IsUUFBUSxDQUFDRSxPQUFPLENBQUNsQixRQUFRLENBQUNtQixJQUFJLEVBQUU7RUFDOUJDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxTQUFTLEVBQUUsSUFBSTtFQUNmQyxPQUFPLEVBQUU7QUFDWCxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtlZGluLWNocm9tZS1leHRlbnNpb24vLi9zcmMvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0IGFuZCBzdG9yZSB0aGUgdXNlcm5hbWVcbmNvbnN0IGV4dHJhY3RVc2VyTmFtZSA9ICgpID0+IHtcbiAgY29uc3QgdXNlck5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcImgxLnYtYWxpZ24tbWlkZGxlLmJyZWFrLXdvcmRzXCJcbiAgKTtcbiAgY29uc3QgcG9zaXRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnW2RhdGEtdmlldy1uYW1lPVwicHJvZmlsZS1jb21wb25lbnQtZW50aXR5XCJdIHNwYW5bYXJpYS1oaWRkZW49XCJ0cnVlXCJdJ1xuICApO1xuXG4gIGlmICh1c2VyTmFtZUVsZW1lbnQpIHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJOYW1lRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHBvc2l0aW9uRWxlbWVudC50ZXh0Q29udGVudDtcblxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHRoZVVzZXI6IHVzZXJOYW1lLCB0aGVQb3NpdGlvbjogcG9zaXRpb24gfSk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dChleHRyYWN0VXNlck5hbWUsIDEwMDApO1xuICB9XG59O1xuXG5zZXRUaW1lb3V0KGV4dHJhY3RVc2VyTmFtZSwgMTAwMCk7XG5cbi8vIERldGVjdCBwYWdlIGNoYW5nZXMgb24gTGlua2VkSW4gYW5kIHVwZGF0ZSB1c2VybmFtZVxubGV0IGxhc3RVcmwgPSBsb2NhdGlvbi5ocmVmO1xuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gIGlmIChsb2NhdGlvbi5ocmVmICE9PSBsYXN0VXJsKSB7XG4gICAgbGFzdFVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgc2V0VGltZW91dChleHRyYWN0VXNlck5hbWUsIDEwMDApO1xuICB9XG59KTtcblxub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gIGF0dHJpYnV0ZXM6IHRydWUsXG4gIGNoaWxkTGlzdDogdHJ1ZSxcbiAgc3VidHJlZTogdHJ1ZSxcbn0pO1xuIl0sIm5hbWVzIjpbImV4dHJhY3RVc2VyTmFtZSIsInVzZXJOYW1lRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBvc2l0aW9uRWxlbWVudCIsInVzZXJOYW1lIiwidGV4dENvbnRlbnQiLCJwb3NpdGlvbiIsImNocm9tZSIsInN0b3JhZ2UiLCJsb2NhbCIsInNldCIsInRoZVVzZXIiLCJ0aGVQb3NpdGlvbiIsInNldFRpbWVvdXQiLCJsYXN0VXJsIiwibG9jYXRpb24iLCJocmVmIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImJvZHkiLCJhdHRyaWJ1dGVzIiwiY2hpbGRMaXN0Iiwic3VidHJlZSJdLCJzb3VyY2VSb290IjoiIn0=
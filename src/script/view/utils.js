export function emptyElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
  export function showElement(element) {
    element.style.display = 'block';
  }
  
  export function hideElement(element) {
    element.style.display = 'none';
  }
  
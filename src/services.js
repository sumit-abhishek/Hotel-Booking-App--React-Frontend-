//Saving Data in Local Storage
export function saveToLocalStorage(key, value) {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
}

//Fetching Data in Local Storage
export function fetchFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (error) {
    console.log("Error message", error);
    return value;
  }
}

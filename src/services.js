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

//Functions for form validation
export function isValidFullName(fullName) {
  return /^[a-zA-Z ]+$/.test(fullName);
}
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isStrongPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
}

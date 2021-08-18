export const setLocalStorage = (key, value) => {
  const toStringValue = JSON.stringify(value)
  localStorage.setItem(key, toStringValue)
}

export const getLocalStorage = (key) => {
  const value = localStorage.getItem(key)
  return JSON.parse(value)
}
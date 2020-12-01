export function getTimestamp() {
  const timestamp = Math.round(Date.now() / 1000) + Math.random().toString().slice(-4)
  return timestamp
  // localStorage.setItem('timeDefault', Math.round(Date.now() / 1000) + Math.random().toString().slice(-4))
}

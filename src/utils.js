
function preProcessPrice(n) {
  return n.toFixed(2)
}

function preProcessTitle(n) {
  let max = 40
  if (n.length > max) {
    return n.substr(0, max) + "…"
  }
  return n
}


export {
  preProcessPrice,
  preProcessTitle,
}
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var number = 0
function takeANumber(katzDeliLine) {
  number++
  katzDeliLine.push(number)
  return `Welcome, you have ticket number ${number}.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  }
  else
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
  var line = []
  for (var i = 0; i < katzDeliLine.length; i++) {
    line.push(` `+[i+1]+`. `+katzDeliLine[i])
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else
  return "The line is currently:" + line
}
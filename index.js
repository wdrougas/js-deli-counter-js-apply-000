function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing(katzDeli) {

if (katzDeli.length === 0) {
  return "There is nobody waiting to be served!";
}
else
return (`Currently serving ${katzDeli.shift()}.`);
}


function currentLine(katzDeli) {
  var line = []
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
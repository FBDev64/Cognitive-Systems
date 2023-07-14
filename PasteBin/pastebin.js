const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez le texte à convertir en binaire : ", function(text) {
  const binaryMessage = textToBinary(text);
  console.log(binaryMessage);
  
  rl.close();
});

function textToBinary(text) {
  let result = "";
  
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i).toString(2);
    result += char.padStart(8, "0") + " ";
  }
  
  return result.trim();
}


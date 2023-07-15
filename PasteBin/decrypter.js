const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez la séquence binaire à décrypter (séparée par des espaces) : ", function(binary) {
  const decryptedMessage = binaryToText(binary);
  console.log(decryptedMessage);
  
  rl.close();
});

function binaryToText(binary) {
  const binaryArray = binary.split(" ");
  let result = "";

  for (let i = 0; i < binaryArray.length; i++) {
    const binaryChar = binaryArray[i];
    
    if (binaryChar !== "") {
      const decimal = parseInt(binaryChar, 2);
      const char = String.fromCharCode(decimal);
      result += char;
    }
  }

  return result;
}


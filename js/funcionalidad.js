document.addEventListener('DOMContentLoaded', () => {
  const inputText = document.getElementById('frase');
  const outputText = document.getElementById('frase-encriptada');
  const btnEncrypt = document.getElementById('btn-encriptar');
  const btnDecrypt = document.getElementById('btn-desencriptar');
  const btnCopy = document.getElementById('btn-copiar');
  const warningMessage = document.querySelector('.form__sugerencia');
  
  const encryptionKeys = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };

  const isValidText = (text) => {
    return /^[a-z\s]+$/.test(text);
  };

  const encryptText = (text) => {
    return text.split('').map(char => encryptionKeys[char] || char).join('');
  };

  const decryptText = (text) => {
    let decryptedText = text;
    for (const key in encryptionKeys) {
      decryptedText = decryptedText.split(encryptionKeys[key]).join(key);
    }
    return decryptedText;
  };

  const showWarning = (show) => {
    warningMessage.style.display = show ? 'flex' : 'none';
  };

  const handleEncrypt = () => {
    const text = inputText.value.trim();
    if (isValidText(text)) {
      showWarning(false);
      outputText.value = encryptText(text);
      document.querySelector('.desencriptar__resultado').style.display = 'flex';
      document.querySelector('.desencriptar__mensaje').style.display = 'none';
    } else {
      showWarning(true);
    }
  };

  const handleDecrypt = () => {
    const text = inputText.value.trim();
    if (isValidText(text)) {
      showWarning(false);
      outputText.value = decryptText(text);
      document.querySelector('.desencriptar__resultado').style.display = 'flex';
      document.querySelector('.desencriptar__mensaje').style.display = 'none';
    } else {
      showWarning(true);
    }
  };

  const handleCopy = () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
  };

  btnEncrypt.addEventListener('click', handleEncrypt);
  btnDecrypt.addEventListener('click', handleDecrypt);
  btnCopy.addEventListener('click', handleCopy);
});
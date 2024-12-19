// script.js
document.getElementById('reverseButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('outputText').value = reversedText;
});

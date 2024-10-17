function writeText() {
    let inputText = document.getElementById('name-input').value;

    document.getElementById('name-output').textContent = inputText || 'Anonymous';
}


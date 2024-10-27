function changeColor() {
    // Get border RGB values
    const borderR = document.getElementById('borderR').value || 0;
    const borderG = document.getElementById('borderG').value || 0;
    const borderB = document.getElementById('borderB').value || 0;
    const borderWidth = document.getElementById('borderWidth').value || 5;

    // Get background RGB values
    const bgR = document.getElementById('bgR').value || 255;
    const bgG = document.getElementById('bgG').value || 255;
    const bgB = document.getElementById('bgB').value || 255;

    // Change styles
    const paragraphContainer = document.getElementById('paragraph-container');
    paragraphContainer.style.borderColor = `rgb(${borderR}, ${borderG}, ${borderB})`;
    paragraphContainer.style.borderWidth = `${borderWidth}px`;
    paragraphContainer.style.borderStyle = 'solid';
    paragraphContainer.style.backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;
}

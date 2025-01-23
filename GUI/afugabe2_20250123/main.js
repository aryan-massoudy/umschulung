const myBox = document.getElementById('myBox');
myBox.style.border = '2px solid black';
myBox.style.backgroundColor = 'gray';
myBox.style.width = '500px';
myBox.style.opacity = '0.7';
myBox.textContent = 'Duckie\'s Cell Number: 42';
myBox.style.textAlign = 'center';
myBox.style.fontSize = '24px';
myBox.style.letterSpacing = '2px';
myBox.style.fontWeight = 'bold';

function duckiesRoomNumber() {
    const roomInput = document.getElementById('roomNumber');
    const roomNumber = roomInput.value;
    console.log(roomNumber);
    myBox.textContent = `New Room Number: ${roomNumber}`;
}
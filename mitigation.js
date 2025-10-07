/*Developed with AI (ChatGPT)*/

const img = document.getElementById('impactor-img');
const counterDisplay = document.getElementById('counter');
const coordsDisplay = document.getElementById('coords-display');

let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let placementsLeft = 3;
const gridSize = 50; // still used for snapping precision

function resetToStart() {
    img.style.left = `${window.innerWidth - img.width - 20}px`;
    img.style.top = `${window.innerHeight - img.height - 20}px`;
}

function updateCounter() {
    counterDisplay.textContent = `Impactors left: ${placementsLeft}`;
}

function updateCoordsDisplay(x, y) {
    coordsDisplay.textContent = `x: ${Math.round(x)}, y: ${Math.round(y)}`;
}

img.addEventListener('load', resetToStart);

img.addEventListener('mousedown', (e) => {
    if (placementsLeft <= 0) return;
    isDragging = true;
    img.style.cursor = 'grabbing';
    offsetX = e.clientX - img.getBoundingClientRect().left;
    offsetY = e.clientY - img.getBoundingClientRect().top;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    img.style.cursor = 'grab';

    const rect = img.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;

    // snap to nearest grid center
    const snappedX = Math.round(x / gridSize) * gridSize;
    const snappedY = Math.round(y / gridSize) * gridSize;

    const confirmLock = confirm(
        `Lock impactor at pixel position:\nX: ${Math.round(snappedX)}\nY: ${Math.round(snappedY)}`
    );
    if (confirmLock) {
        const clone = img.cloneNode(true);
        clone.classList.add('locked');
        clone.style.left = `${snappedX}px`;
        clone.style.top = `${snappedY}px`;
        clone.removeAttribute('id');
        document.body.appendChild(clone);

        placementsLeft--;
        updateCounter();

        if (placementsLeft > 0) resetToStart();
        else {
            img.style.display = 'none';
            counterDisplay.textContent = 'All impactors placed!';
        }
    }
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging || placementsLeft <= 0) return;
    const newLeft = e.clientX - offsetX;
    const newTop = e.clientY - offsetY;
    img.style.left = `${newLeft}px`;
    img.style.top = `${newTop}px`;
    updateCoordsDisplay(newLeft, newTop);
});

window.addEventListener('resize', () => {
    if (placementsLeft > 0) resetToStart();
});

updateCounter();
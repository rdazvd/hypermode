let ctrlKeyPressed = false;
let modeActive = false;

const styleSheet = document.createElement('style');
styleSheet.innerText = `
  .hypermodeMarker {
    background-color: rgb(0, 221, 255);
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    color: rgb(43, 42, 51);
  }
`;

const insertAnchorMarkers = () => {
  document.head.appendChild(styleSheet);

  document.body.querySelectorAll('a').forEach((anchor) => {
    marker = document.createElement('div');
    marker.className = 'hypermodeMarker';
    marker.innerText = 'a';

    anchor.insertBefore(marker, anchor.firstChild);
  });
};

const removeAnchorMarkers = () =>
  document.querySelectorAll('a').forEach((anchor) => {
    anchor.removeChild(anchor.childNodes[0]);
  });

window.addEventListener('keydown', (event) => {
  if (event.key === 'Control') {
    ctrlKeyPressed = true;
  }
});

window.addEventListener('keydown', (event) => {
  if (ctrlKeyPressed && event.key === 'Shift') {
    modeActive = !modeActive;

    modeActive ? insertAnchorMarkers() : removeAnchorMarkers();
    ctrlKeyPressed = false;
  }
});

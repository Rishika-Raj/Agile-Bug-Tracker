const bugForm = document.getElementById('bug-form');
const bugList = document.getElementById('bug-list');

bugForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('bug-title').value;
    const description = document.getElementById('bug-description').value;

    const bugItem = document.createElement('div');
    bugItem.innerHTML = `<strong>${title}</strong>: ${description}`;
    bugList.appendChild(bugItem);

    bugForm.reset();
});

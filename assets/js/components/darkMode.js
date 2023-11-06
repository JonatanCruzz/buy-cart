function darkMode() {
    const ls = window.localStorage;
    let darkModeEnabled = JSON.parse(ls.getItem('darkMode'));

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    if (darkModeEnabled) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
        body.classList.add('dark-mode');
    } else {
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
        body.classList.remove('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        darkModeEnabled = !darkModeEnabled;
        ls.setItem('darkMode', JSON.stringify(darkModeEnabled));

        body.classList.toggle('dark-mode');

        if (darkModeEnabled) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
        } else {
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
        }
    });
}

export default darkMode;
// app.js
import { Quiz } from './components/quiz.js';
import { Info } from './components/info.js';
import { Puzzle } from './components/puzzle.js';

let pagename = 'quiz'; // Default to 'home' page

// Function to set the page name
function setPageName(page) {
    pagename = page;
}

// Function to get the current page name
function getPageName() {
    return pagename;
}

// Function to render the full page
function renderPage(content) {
    document.getElementById('app').innerHTML = `
        <div id="content">${content}</div>
    `;
    // Attach event listeners to the navigation links
    document.querySelectorAll('.page-router').forEach(link => {
        link.addEventListener('click', navigate);
    });
}

// Function to load the correct content based on pagename
async function router() {
    let content = '';

    switch (pagename) {
        case 'quiz':
            content = await Quiz();
            
            const script = document.createElement('script');
            script.src = 'assets/js/question.js';
            script.async = true;
            document.body.appendChild(script);
            break;
        case 'info':
            content = await Info();

            const script1 = document.createElement('script');
            script1.src = 'assets/js/info.js';
            script1.async = true;
            document.body.appendChild(script1);
            break;
        case 'puzzle':
            content = await Puzzle();
            const script2 = document.createElement('script');
            script2.src = 'assets/js/puzzle.js';
            script2.async = true;
            document.body.appendChild(script2);
            break;
        default:
            content = await Quiz();
    }

    renderPage(content);
}

// Function to handle navigation
function navigate(event) {
    event.preventDefault();
    const page = event.target.getAttribute('data-page');
    if (page) {
        setPageName(page);
        router();
    }
}

// Attach event listeners to navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Load the correct page on initial load
    const initialPage = 'quiz';
    setPageName(initialPage);
    router();
});

window.router = router;
window.setPageName = setPageName;
window.getPageName = getPageName;


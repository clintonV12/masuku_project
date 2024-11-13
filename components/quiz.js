export function Quiz() {
    return fetch('/masuku_project/pages/quiz.html')
        .then(response => response.text())
        .then(data => data);
}

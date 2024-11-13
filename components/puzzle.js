export function Puzzle() {
    return fetch('/masuku_project/pages/puzzle.html')
        .then(response => response.text())
        .then(data => data);
}

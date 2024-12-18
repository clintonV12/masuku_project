export function Physical() {
    return fetch('/masuku_project/pages/physical.html')
        .then(response => response.text())
        .then(data => data);
}

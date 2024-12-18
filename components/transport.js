export function Transport() {
    return fetch('/masuku_project/pages/transport.html')
        .then(response => response.text())
        .then(data => data);
}

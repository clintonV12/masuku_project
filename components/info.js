export function Info() {
    return fetch('/masuku_project/pages/info.html')
        .then(response => response.text())
        .then(data => data);
}

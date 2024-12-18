export function PhysicalResult() {
    return fetch('/masuku_project/pages/physical_result.html')
        .then(response => response.text())
        .then(data => data);
}

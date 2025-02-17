const lastModified = document.lastModified;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('js-update').textContent = lastModified;
});

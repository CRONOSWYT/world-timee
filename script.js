function showCategory(category) {
    document.querySelectorAll('.category').forEach(cat => {
        cat.style.display = 'none';
    });

    document.getElementById(category).style.display = 'block';
}

function openLink(url) {
    window.open(url, '_blank');
}

function navigateTo(sectionId) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

function goBack() {
    document.getElementById('homePage').style.display = 'block';

    // Hide all sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
}

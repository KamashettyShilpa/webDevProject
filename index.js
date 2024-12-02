function toggleOptions(unit) {
    // Reset all unit-box elements styles
    document.querySelectorAll('.unit-box').forEach(function(el) {
        el.classList.remove('enlarge');
    });

    // Hide all options
    document.querySelectorAll('.unit-options').forEach(function(el) {
        el.classList.remove('active');
    });

    // Apply styles based on the selected unit
    if (unit === 1) {
        document.getElementById('box').classList.add('enlarge');
        document.getElementById('box1Options').classList.add('active');
    } else if (unit === 2) {
        document.getElementById('box2').classList.add('enlarge');
        document.getElementById('box2Options').classList.add('active');
    } else if (unit === 3) {
        document.getElementById('box3').classList.add('enlarge');
        document.getElementById('box3Options').classList.add('active');
    }
}
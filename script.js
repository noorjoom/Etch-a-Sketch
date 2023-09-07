document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#container');
    
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);
        }
    }
    
    const hoverGrid = document.querySelectorAll('.grid');
    
    hoverGrid.forEach((grid) => {
        grid.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "red";
        });
    });
});



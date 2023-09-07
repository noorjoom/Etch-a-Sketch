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

const btn = document.querySelector('#btn');

btn.onclick = () => {
    const userInput= prompt("Enter a number between 1 and 100 to create a grid of given number.");

    if (userInput !== null) {
        const number = parseInt(userInput);
        if (!isNaN(number) && number >= 1 && number <= 100) {
            return number;
        } else {
            alert("Invalid input. Please enter a number between 1 and 100.");
        }
    }
};

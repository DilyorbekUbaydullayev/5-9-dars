function task1(){
   
    const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

    const colorBlocksContainer = document.getElementById("color-blocks");
    const textElement = document.getElementById("text");
    const currentColorElement = document.getElementById("current-color");
    colors.forEach(color => {
        const colorBlock = document.createElement("div");
        colorBlock.className = "color-block";
        colorBlock.style.backgroundColor = color;
        colorBlock.addEventListener("click", () => {
         
            textElement.style.color = color;
            
            currentColorElement.textContent = `Hozirgi rang: ${color}`;
        });
        colorBlocksContainer.appendChild(colorBlock);
    });
} export {task1}

function task2(){
        let time = 0;
        let intervalId = null;

        const timeDisplay = document.getElementById("time");
        const startButton = document.getElementById("start");
        const stopButton = document.getElementById("stop");
        const resetButton = document.getElementById("reset");

        startButton.addEventListener("click", () => {
            if (intervalId === null) {
                intervalId = setInterval(() => {
                    time++;
                    timeDisplay.textContent = time;
                }, 1000);
                startButton.disabled = true;
                stopButton.disabled = false;
            }
        });

        stopButton.addEventListener("click", () => {
            clearInterval(intervalId);
            intervalId = null;
            startButton.disabled = false;
            stopButton.disabled = true;
        });

        resetButton.addEventListener("click", () => {
            clearInterval(intervalId);
            intervalId = null;
            time = 0;
            timeDisplay.textContent = time;
            startButton.disabled = false;
            stopButton.disabled = true;
        });
    
}export {task2}

function task3(){
    const images = [
        { src: "https://avatars.mds.yandex.net/i?id=58fd29d2834e768a3d85c66c2c33ab3e85ace059-9181886-images-thumbs&n=13", category: "Tabiat" },
        { src: "https://www.1zoom.me/big2/819/321881-svetik.jpg", category: "Mashina" },
        { src: "https://avatars.mds.yandex.net/i?id=03bbe87875a3e06b2789ae61665923f7b1b6d766-11413071-images-thumbs&n=13", category: "Hayvon" },
        
    ];

    const imageGrid = document.getElementById("image-grid");
    const searchInput = document.getElementById("search");
    const filterButton = document.getElementById("filter");
    const resetButton = document.getElementById("reset");

    
    images.forEach(image => {
        const imageCard = document.createElement("div");
        imageCard.className = "image-card";
        imageCard.dataset.category = image.category.toLowerCase();

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.category;

        const categoryLabel = document.createElement("div");
        categoryLabel.className = "category";
        categoryLabel.textContent = image.category;

        imageCard.appendChild(img);
        imageCard.appendChild(categoryLabel);
        imageGrid.appendChild(imageCard);
    });

 
    filterButton.addEventListener("click", () => {
        const query = searchInput.value.trim().toLowerCase();
        const imageCards = document.querySelectorAll(".image-card");

        imageCards.forEach(card => {
            if (card.dataset.category.includes(query)) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });

  
    resetButton.addEventListener("click", () => {
        searchInput.value = "";
        const imageCards = document.querySelectorAll(".image-card");
        imageCards.forEach(card => card.classList.remove("hidden"));
    });
} export {task3}
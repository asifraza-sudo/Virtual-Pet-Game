let myHunger = 0;
let myHappiness = 10;
let myEnergy = 10;

const myPetImage = document.getElementById('myPetImage');
const myHungerStatus = document.getElementById('myHungerStatus');
const myHappinessStatus = document.getElementById('myHappinessStatus');
const myEnergyStatus = document.getElementById('myEnergyStatus');
const myFeedButton = document.getElementById('myFeedButton');
const myPlayButton = document.getElementById('myPlayButton');
const mySleepButton = document.getElementById('mySleepButton');

myFeedButton.addEventListener('click', () => {
    myHunger = Math.max(myHunger - 2, 0);
    updateStatus();
    myPetImage.src = 'pet.jpeg';
});

myPlayButton.addEventListener('click', () => {
    if (myEnergy > 0) {
        myHappiness = Math.min(myHappiness + 2, 10);
        myEnergy--;
        updateStatus();
        myPetImage.src = 'playful_pet.jpeg';
    } else {
        alert('Your pet is too tired to play!');
    }
});

mySleepButton.addEventListener('click', () => {
    myEnergy = Math.min(myEnergy + 2, 10);
    myHunger = Math.min(myHunger + 1, 10);
    updateStatus();
    myPetImage.src = 'sleeping-pet.jpeg';
});

function updateStatus() {
    myHungerStatus.textContent = myHunger;
    myHappinessStatus.textContent = myHappiness;
    myEnergyStatus.textContent = myEnergy;
}


setInterval(() => {
    myHunger = Math.min(myHunger + 1, 10);
    myHappiness = Math.max(myHappiness - 1, 0);
    updateStatus();

    if (myHunger >= 10 || myHappiness <= 0) {
        myPetImage.src = 'sad_pet.jpeg';
        alert('Your pet needs more care!');
    }
}, 5000);

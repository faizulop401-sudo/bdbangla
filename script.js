// Words animation
const welcomeText = document.getElementById("welcome-text");
const words = ["WELCOME", "TO", "@BDbangla-111", "Website"];
let i = 0;

function showWord() {
    if(i < words.length){
        welcomeText.innerHTML += words[i] + " ";
        i++;
        setTimeout(showWord, 1000); // 1 second per word
    } else {
        // Show menu after animation
        document.getElementById("menu").style.display = "block";
    }
}
showWord();

// Subscriber logic
const submitBtn = document.getElementById("submitBtn");
const seeSubsBtn = document.getElementById("seeSubsBtn");
const subList = document.getElementById("subList");

let subscribers = []; // Save names temporarily

submitBtn.addEventListener("click", () => {
    const name = document.getElementById("subName").value.trim();
    const number = document.getElementById("subNumber").value.trim();
    if(name && number){
        subscribers.push({name, number});
        document.getElementById("subName").value = "";
        document.getElementById("subNumber").value = "";
        alert("Subscriber added!");
    } else {
        alert("Please enter name and number.");
    }
});

seeSubsBtn.addEventListener("click", () => {
    subList.innerHTML = "";
    if(subscribers.length === 0){
        subList.innerHTML = "<p>No subscribers yet!</p>";
        return;
    }
    subscribers.forEach(sub => {
        const p = document.createElement("p");
        p.textContent = `${sub.name} - ${sub.number}`;
        subList.appendChild(p);
    });
});

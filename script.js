// Load available trades from localStorage
function loadTrades() {
    let trades = JSON.parse(localStorage.getItem("trades")) || [];
    let tradeList = document.getElementById("trade-list");
    tradeList.innerHTML = "";

    trades.forEach((trade, index) => {
        let tradeDiv = document.createElement("div");
        tradeDiv.classList.add("trade");
        tradeDiv.style.backgroundImage = `url(${trade.image})`;
        tradeDiv.style.backgroundSize = "cover";
        tradeDiv.style.backgroundPosition = "center";
        
        tradeDiv.innerHTML = `
            <p><strong>Item:</strong> ${trade.item}</p>
            <p><strong>Roblox Username:</strong> ${trade.username}</p>
            <button onclick="acceptTrade(${index})">Accept</button>
            <button onclick="rejectTrade(${index})">Reject</button>
        `;
        tradeList.appendChild(tradeDiv);
    });
}

// Add a new trade
function addTrade() {
    let item = document.getElementById("item-name").value.trim();
    let username = document.getElementById("roblox-username").value.trim();
    let image = document.getElementById("item-image").value.trim();

    if (item && username && image) {
        let trades = JSON.parse(localStorage.getItem("trades")) || [];
        trades.push({ item, username, image });
        localStorage.setItem("trades", JSON.stringify(trades));
        loadTrades();
        alert("Trade Posted Successfully!");
    } else {
        alert("Please fill in all fields.");
    }
}

// Accept a trade
function acceptTrade(index) {
    let trades = JSON.parse(localStorage.getItem("trades")) || [];
    trades.splice(index, 1);
    localStorage.setItem("trades", JSON.stringify(trades));
    loadTrades();
    alert("Trade Accepted!");
}

// Reject a trade
function rejectTrade(index) {
    let trades = JSON.parse(localStorage.getItem("trades")) || [];
    trades.splice(index, 1);
    localStorage.setItem("trades", JSON.stringify(trades));
    loadTrades();
    alert("Trade Rejected!");
}

// Load trades on page load
loadTrades();
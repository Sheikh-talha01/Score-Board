let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

function incrementHome(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

function incrementGuest(points) {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
}

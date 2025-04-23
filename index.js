// Show greeting based on time
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning!";
  if (hour < 18) return "Good Afternoon!";
  return "Good Evening!";
}

document.getElementById("greeting").textContent = getGreeting();

// Show current time and update every second
function showTime() {
  const now = new Date();
  document.getElementById("time").textContent = now.toLocaleTimeString();
}
setInterval(showTime, 1000);
showTime(); // Show immediately

// Google search on Enter key
document.getElementById("search-box").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const query = event.target.value;
    const url = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.location.href = url;
  }
});






















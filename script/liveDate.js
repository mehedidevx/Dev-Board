function updateDate() {
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
    document.getElementById("liveDate").innerText = now.toLocaleDateString('en-US', options);
}

updateDate();
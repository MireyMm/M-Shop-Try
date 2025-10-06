// Event ketika tombol "Sapa saya!" diklik
document.getElementById("sapaButton").addEventListener("click", function () {
    alert("Hai! Terima kasih sudah berkunjung ke M SHOP 😊");
});

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Simpan preferensi dark mode ke localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem(

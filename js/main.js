document.addEventListener("DOMContentLoaded", function() {
  loadHTML("header", "layouts/header.html");
  loadHTML("TopImage", "layouts/TopImage.html");
  loadHTML("staff", "layouts/staff.html");
  loadHTML("thanks", "layouts/thanks.html");
  loadHTML("header", "layouts/header.html");
  loadHTML("footer", "layouts/footer.html");
});

function loadHTML(elementId, url) {
  fetch(url)
      .then(response => response.text())
      .then(data => document.getElementById(elementId).innerHTML = data)
      .catch(error => console.error('Error loading HTML:', error));
}

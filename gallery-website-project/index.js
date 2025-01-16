const galleryContainer = document.getElementById("gallery-container");

galleryContainer.addEventListener("click", function(event) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-image").src = event.target.src;
  document.getElementById("modal-caption").textContent = event.target.alt;
  document.getElementById("gallery-container").style.display = "none";
});
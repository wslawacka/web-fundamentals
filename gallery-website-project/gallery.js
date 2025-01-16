const galleryContainer = document.getElementById("gallery-container");

galleryContainer.addEventListener("click", function(event) {
  if(event.target.tagName === "IMG") {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-image").src = event.target.src;
    document.getElementById("modal-caption").textContent = event.target.alt;
    document.getElementById("gallery-container").style.display = "none";
  }
});

const allTags = document.querySelectorAll("#tags-container > span");
const allTag = document.getElementById("all-tag");
const summerTag = document.getElementById("summer-tag");
const winterTag = document.getElementById("winter-tag");
const sunsetTag = document.getElementById("sunset-tag");
const seaTag = document.getElementById("sea-tag");
const mountainsTag = document.getElementById("mountains-tag");
const favouritesTag = document.getElementById("favourites-tag");
const allImages = document.querySelectorAll("#gallery-container .gallery-item");

allTag.addEventListener("click", function() {
  allTags.forEach(tag => {
    tag.classList.remove("active");
  });
  allTag.classList.add("active");
  allImages.forEach(image => {
    image.style.display = "block";
  });
});

summerTag.addEventListener("click", function() {
  allTags.forEach(tag => {
    tag.classList.remove("active");
  });
  summerTag.classList.add("active");

  allImages.forEach(image => {
    if (image.classList.contains("summer")) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

winterTag.addEventListener("click", function() {
  allTags.forEach(tag => {
    tag.classList.remove("active");
  });
  winterTag.classList.add("active");

  allImages.forEach(image => {
    if (image.classList.contains("winter")) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

sunsetTag.addEventListener("click", function() {
  allTags.forEach(tag => {
    tag.classList.remove("active");
  });
  sunsetTag.classList.add("active");

  allImages.forEach(image => {
    if (image.classList.contains("sunset")) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

seaTag.addEventListener("click", function() {
  allTags.forEach(tag => {
    tag.classList.remove("active");
  });
  seaTag.classList.add("active");

  allImages.forEach(image => {
    if (image.classList.contains("sea")) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

mountainsTag.addEventListener("click", function() {
  allTags.forEach(tag => {
    tag.classList.remove("active");
  });
  mountainsTag.classList.add("active");
  allImages.forEach(image => {
    if (image.classList.contains("mountains")) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

const heartIcons = document.querySelectorAll(".gallery-item i");

heartIcons.forEach(icon => {
  icon.addEventListener("click", function() {
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    const image = icon.closest(".gallery-item");
    image.classList.toggle("favourite");

    const activeTag = document.querySelector("#tags-container .active");
    if (activeTag && activeTag.id === "favourites-tag" && !image.classList.contains("favourite")) {
      image.style.display = "none";
    }
    
  });
});

favouritesTag.addEventListener("click", function() {
  allTags.forEach(tag => {
    tag.classList.remove("active");
  });
  favouritesTag.classList.add("active");
  allImages.forEach(image => {
    if (image.classList.contains("favourite")) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

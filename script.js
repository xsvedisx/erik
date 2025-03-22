document.getElementById("load-more").addEventListener("click", function () {
  let newImages = [
    "images/10.jpeg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpeg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
  ];

  let gallery = document.querySelector(".gallery");
  let wrapper = document.querySelector(".gallery-wrapper");
  let fadeOverlay = document.querySelector(".fade-overlay");

  // Check if all images are already loaded
  if (gallery.children.length >= 18) {
    this.style.display = "none"; // Hide button when all images are loaded
    return;
  }

  // Add new images
  newImages.forEach((src) => {
    let img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });

  // Expand wrapper height dynamically
  wrapper.style.maxHeight = wrapper.scrollHeight + 500 + "px";

  // Hide fade effect after loading
  setTimeout(() => {
    fadeOverlay.style.opacity = "0";
  }, 500);
});

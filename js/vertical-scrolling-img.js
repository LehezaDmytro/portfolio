const images = document.querySelectorAll(".vertical-scrolling-img");

images.forEach((image) => {
  const originalHeight = image.clientHeight;
  const parentHeight = image.parentNode.clientHeight;

  image.addEventListener("mouseenter", () => {
    image.style.transform = `translateY(-${originalHeight - parentHeight}px)`;
  });

  image.addEventListener("mouseleave", () => {
    image.style.transform = "translateY(0%)";
  });
});

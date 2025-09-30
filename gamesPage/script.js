// Select all anchor tags that contain videos
const anchors = document.querySelectorAll(".container a");

anchors.forEach((anchor) => {
  const video = anchor.querySelector("video"); // Get the video inside the anchor

  // Play the video when hovering over the anchor
  anchor.addEventListener("mouseenter", () => {
    video.play();
  });

  // Pause the video when the mouse leaves the anchor
  anchor.addEventListener("mouseleave", () => {
    video.pause();
  });
});

// Display an alert when the page loads
window.onload = function () {
  alert(
    "Welcome to the Games Page! Enjoy playing your favorite games "
  );
};

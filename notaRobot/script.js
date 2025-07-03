const imageContainer = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const message = document.getElementById("para");
const header = document.getElementById("h");

const imageClasses = ["img1", "img2", "img3", "img4", "img5"];
let selectedImages = [];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateImages() {
  const duplicateIndex = Math.floor(Math.random() * imageClasses.length);
  const images = [...imageClasses];
  images.push(imageClasses[duplicateIndex]); // Add duplicate
  const shuffled = shuffleArray(images);

  imageContainer.innerHTML = "";
  shuffled.forEach((imgClass, index) => {
    const img = document.createElement("img");
    img.classList.add(imgClass);
    img.dataset.imgId = imgClass;
    img.addEventListener("click", () => handleClick(img));
    imageContainer.appendChild(img);
  });

  resetState();
}

function handleClick(img) {
  if (img.classList.contains("selected") || selectedImages.length >= 2) return;

  img.classList.add("selected");
  selectedImages.push(img);

  resetBtn.style.display = "inline-block";

  if (selectedImages.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}

function resetState() {
  selectedImages = [];
  message.textContent = "";
  verifyBtn.style.display = "none";
  resetBtn.style.display = "none";
  header.textContent = "Please click on the identical tiles to verify that you are not a robot.";

  const allImages = document.querySelectorAll("img");
  allImages.forEach(img => img.classList.remove("selected"));
}

resetBtn.addEventListener("click", resetState);

verifyBtn.addEventListener("click", () => {
  if (selectedImages.length !== 2) return;

  const [img1, img2] = selectedImages;
  const match = img1.dataset.imgId === img2.dataset.imgId;

  message.textContent = match
    ? "You are a human. Congratulations!"
    : "We can't verify you as a human. You selected the non-identical tiles.";

  verifyBtn.style.display = "none";
});

generateImages();

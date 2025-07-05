const output = document.getElementById("output");
const errorDiv = document.getElementById("error");
const loadingDiv = document.getElementById("loading");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
  });
}

function downloadImages() {
  output.innerHTML = "";
  errorDiv.textContent = "";
  loadingDiv.style.display = "block";

  const promises = images.map(image => downloadImage(image.url));

  Promise.all(promises)
    .then(loadedImages => {
      loadedImages.forEach(img => output.appendChild(img));
    })
    .catch(err => {
      errorDiv.textContent = err.message;
    })
    .finally(() => {
      loadingDiv.style.display = "none";
    });
}

btn.addEventListener("click", downloadImages);

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

window.addEventListener("DOMContentLoaded", () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
});

let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fontSize = document.getElementById('fontsize').value;
    let fontColor = document.getElementById('fontcolor').value;

    document.cookie = `fontsize=${fontSize}; path=/; max-age=${60}`;
    document.cookie = `fontcolor=${encodeURIComponent(fontColor)}; path=/; max-age=${60}`;

    document.documentElement.style.setProperty("--fontsize", fontSize + "px");
    document.documentElement.style.setProperty("--fontcolor", fontColor);
})


const getColorSchemeBtn = document.getElementById("get-color-scheme-btn");
let colorPicker = document.getElementById("color-picker");
let colorTheme = document.getElementById("color-theme");
const colorPalette = document.getElementById("colorpalette");
getColorSchemeBtn.addEventListener("click", function () {
  getColorScheme();
});

function getColorScheme() {
  let colorInput = encodeURIComponent(colorPicker.value.trim());
  let modeInput = colorTheme.value;

  console.log(colorInput);
  console.log(modeInput);

  return fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorInput}&mode=${modeInput}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      colorPalette.innerHTML = "";
      for (const color of data.colors) {
        colorPalette.innerHTML += `
            <div class="color-value">
              <img class="color-img" src="${color.image.bare}">
              <h3>${color.hex.value}</h3>
            </div>`;
      }
    });
}

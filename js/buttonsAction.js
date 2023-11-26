document.addEventListener("DOMContentLoaded", function () {

  const colorButtons = document.querySelectorAll('.color-button');
  colorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const color = button.id;
      changeMaterial(color);
    });
  });

  function changeMaterial(material) {
    let iframe = document.getElementById("ifrm");
    iframe.contentWindow.postMessage(material, "*");
  }
});

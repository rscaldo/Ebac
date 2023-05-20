/** */
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-area");
  document.addEventListener("submit", function (e) {
    e.preventDefault();
    let lado1 = document.getElementById("lado1").value;
    lado1 = parseInt(lado1);
    let lado2 = document.getElementById("lado2").value;
    lado2 = parseInt(lado2);
    let area = lado1 * lado2;

    document.getElementById("resultado-area").innerText = area;
    document.querySelector(".resultado").style.display = "block";
  });
});

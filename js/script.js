document.getElementById("jscheck").textContent = ``;
document.addEventListener("DOMContentLoaded", function() {
    let num = 0;

    document.getElementById("increase").onclick = function() {
        num++;
        document.getElementById("out").textContent = num;
    };

    document.getElementById("decrease").onclick = function() {
        num--;
        document.getElementById("out").textContent = num;
    };

    document.getElementById("reset").onclick = function() {
        num = 0;
        document.getElementById("out").textContent = num;
    };
});

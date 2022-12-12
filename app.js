let div = document.getElementById('di');

try {
    let a = 5, b = 36;
    div.innerHTML = "somme de a et de b : " + (a + b);
}
catch (e) {
    alert("Une erreur est survenue !");
}
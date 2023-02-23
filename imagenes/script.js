const left = document.getElementById("my_left");
left.addEventListener("mouseenter", (event) => {
    event.target.style.color = "#e6ac00";
  }, false);

left.addEventListener("mouseleave", (event) => {
    event.target.style.color = "black";
}, false);

const right = document.getElementById("my_right");
right.addEventListener("mouseenter", (event) => {
    event.target.style.color = "#cc6600";
  }, false);

right.addEventListener("mouseleave", (event) => {
    event.target.style.color = "black";
}, false);

const Experiencia = document.getElementById("Experiencia");
Experiencia.addEventListener ("mouseenter", (event) => {
    if (Info_Exp.style.display === "none") {
        Info_Exp.style.display = "block";
    } else {
        Info_Exp.style.display = "none";
    }
  }, false);

  Experiencia.addEventListener("mouseleave", (event) => {
    Info_Exp.style.display = "none";
}, false);

const Educacion = document.getElementById("Educacion");
Educacion.addEventListener ("mouseenter", (event) => {
    if (Info_Ed.style.display === "none") {
        Info_Ed.style.display = "block";
    } else {
        Info_Ed.style.display = "none";
    }
  }, false);

  Educacion.addEventListener("mouseleave", (event) => {
    Info_Exp.style.display = "none";
}, false);

const Atitudes = document.getElementById("Atitudes");
Atitudes.addEventListener ("mouseenter", (event) => {
    if (Info_At.style.display === "none") {
        Info_At.style.display = "block";
    } else {
        Info_At.style.display = "none";
    }
  }, false);

  Atitudes.addEventListener("mouseleave", (event) => {
    Info_Exp.style.display = "none";
}, false);

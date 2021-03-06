function playerGenerate() {
  fetch("https://randomuser.me/api/?nat=us,dk,fr,gb") 
    .then(function (answerLoco) {
      return answerLoco.json(); 
    })
    .then(function (JsonATR) {
      console.log(JsonATR.results); 
      crearTarjeta(JsonATR.results[0]);
    });
}

function crearTarjeta(persona) {
  let bandera;
  let nacionalidad;
  switch (persona.nat) {
    case "GB":
      bandera =
        "https://images.emojiterra.com/google/noto-emoji/unicode-13.1/128px/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png";
      break;
    case "DK":
      bandera =
        "https://images.emojiterra.com/google/noto-emoji/unicode-13.1/128px/1f1e9-1f1f0.png";
      break;
    case "FR":
      bandera =
        "https://images.emojiterra.com/google/noto-emoji/unicode-13.1/128px/1f1eb-1f1f7.png";
      break;
    case "US":
      bandera =
        "https://images.emojiterra.com/google/noto-emoji/unicode-13.1/128px/1f1fa-1f1f8.png";
      break;

    default:
      break;
  }
  switch (persona.nat) {
      case "GB":
          nacionalidad="Inglaterra"
          break;
      case "DK":
          nacionalidad="Dinamarca"
          break;
      case "FR":
          nacionalidad="Francia"
          break;
      case "US":
          nacionalidad="Estados Unidos"
          break;
      default:
          break;
  }
  let deuda=Math.floor(Math.random()*500)*1000000;
  let numeroRandom = Math.floor(Math.random() * 456);
  let body = document.getElementById("main");

  function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}

  body.innerHTML = `
            <section class="tarjeta">
              <h1>Participante Nro ${numeroRandom}: </br> <span>${persona.name.first} ${persona.name.last}</span></h1>
              <span class="simbols">△<img class="pic" src="${persona.picture.medium}" alt="">✕</span>
              <h4 id="deuda">Deuda: $${separator(deuda)} USD</h4>
              <hr>
              <a href="${persona.picture.medium}">${persona.email}</a>
              <h6>Localidad:</h6>
              <h5>${persona.location.city}, ${nacionalidad} <img class="bandera" src=${bandera} /> </h5>
              <h6 class="phone">Teléfono:</h6>
              <h5class="phoneNumber">${persona.phone}</h5>
            </section>
              `;
}

playerGenerate()

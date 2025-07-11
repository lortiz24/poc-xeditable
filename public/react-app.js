/* MODULE: Dashboard Principal */
let appData = {
  nombre: "Juan",
  edad: 25,
  fechaNacimiento: "1998-05-15",
};

function renderApp() {
  const template = `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">React: Formulario Editable</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label>Nombre: </label> 
          <a href="#" class="react-nombre" data-pk="1" data-type="text" data-mode="inline">${appData.nombre}</a>
        </div>
        <div class="form-group">
          <label>Edad: </label> 
          <a href="#" class="react-edad" data-pk="1" data-type="number" data-mode="inline">${appData.edad}</a> años
        </div>
        <div class="form-group">
          <label>Fecha de nacimiento: </label> 
          <a href="#" class="react-fecha" data-pk="1" data-type="date" data-mode="popup">${appData.fechaNacimiento}</a>
        </div>
      </div>
    </div>
  `;

  document.getElementById("react-root").innerHTML = template;
  initializeXEditable();
}

function initializeXEditable() {
  if (typeof $ === "undefined") {
    console.error("jQuery no está disponible en React");
    return;
  }

  $(".react-nombre").editable({
    type: "text",
    title: "Editar nombre",
    value: appData.nombre,
    success: function (response, newValue) {
      appData.nombre = newValue;
      renderApp();
    },
  });

  $(".react-edad").editable({
    type: "number",
    title: "Editar edad",
    value: appData.edad,
    success: function (response, newValue) {
      appData.edad = parseInt(newValue);
      renderApp();
    },
  });

  $(".react-fecha").editable({
    type: "date",
    title: "Editar fecha de nacimiento",
    value: appData.fechaNacimiento,
    format: "yyyy-mm-dd",
    success: function (response, newValue) {
      appData.fechaNacimiento = newValue;
      renderApp();
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderApp();
});

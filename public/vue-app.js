/* MODULE: Gestión de Usuarios */
const { createApp, nextTick } = Vue;

createApp({
  data() {
    return {
      nombre: "Luis",
      edad: 30,
      fechaNacimiento: "1998-05-15",
      pk: 1,
    };
  },
  methods: {
    initXEditable() {
      nextTick(() => {
        if (typeof $ === "undefined") {
          console.error("jQuery no está disponible");
          return;
        }

        try {
          $(".vue-nombre, .vue-edad, .vue-fecha").editable("destroy");
        } catch (e) {
        }

        $(".vue-nombre").editable({
          type: "text",
          title: "Editar nombre",
          mode: "inline",
          value: this.nombre,
          success: (response, newValue) => {
            this.nombre = newValue;
          },
          display: function (value) {
            $(this).text(value);
          },
        });

        $(".vue-edad").editable({
          type: "number",
          title: "Editar edad",
          mode: "inline",
          value: this.edad,
          success: (response, newValue) => {
            this.edad = parseInt(newValue);
          },
          display: function (value) {
            $(this).text(value);
          },
        });

        $(".vue-fecha").editable({
          type: "date",
          title: "Editar fecha de nacimiento",
          mode: "popup",
          value: this.fechaNacimiento,
          format: "yyyy-mm-dd",
          placement: "bottom",
          success: (response, newValue) => {
            this.fechaNacimiento = newValue;
          },
          display: function (value) {
            $(this).text(value);
          },
        });
      });
    },
  },
  mounted() {
    this.initXEditable();
  },
  updated() {
    this.initXEditable();
  },
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Vue: Formulario Editable</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label>Nombre: </label> <a href="#" class="vue-nombre" data-pk="1">{{ nombre }}</a>
        </div>
        <div class="form-group">
          <label>Edad: </label> <a href="#" class="vue-edad" data-pk="1">{{ edad }}</a> años
        </div>
        <div class="form-group">
          <label>Fecha de nacimiento: </label> <a href="#" class="vue-fecha" data-pk="1">{{ fechaNacimiento }}</a>
        </div>
      </div>
    </div>
  `,
}).mount("#vue-root");

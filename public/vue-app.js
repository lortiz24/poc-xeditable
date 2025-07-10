const { createApp, nextTick } = Vue;

createApp({
  data() {
    return {
      nombre: "Luis",
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
          $(".vue-editable").editable("destroy");
        } catch (e) {
          // Si no estaba inicializado, ignoramos el error
        }

        $(".vue-editable").editable({
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
    <div>
      <h3>Vue: Nombre editable</h3>
      <a href="#" class="vue-editable" data-pk="1">{{ nombre }}</a>
    </div>
  `,
}).mount("#vue-root");

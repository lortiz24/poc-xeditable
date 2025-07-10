const { createApp } = Vue;

createApp({
  data() {
    return { nombre: 'Luis', editando: false }
  },
  methods: {
    cambiarNombre() {
      this.editando = !this.editando;
    }
  },
  template: `
    <div>
      <h3>Vue: Nombre editable</h3>
      <div v-if="!editando" @click="cambiarNombre">{{ nombre }}</div>
      <input v-else v-model="nombre" @blur="cambiarNombre" />
    </div>
  `
}).mount('#vue-root');

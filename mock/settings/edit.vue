<!-- MODULE: Configuración del Sistema -->
<template>
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">Configuración del Sistema</h3>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-md-6">
          <h4>Configuraciones Generales</h4>
          <div class="form-group">
            <label>Nombre de la Aplicación:</label>
            <a href="#" class="x-editable" data-pk="config" data-type="text" data-title="Nombre de la aplicación" data-mode="inline">
              {{ appName }}
            </a>
          </div>

          <div class="form-group">
            <label>Versión:</label>
            <a href="#" class="x-editable" data-pk="config" data-type="text" data-title="Versión del sistema" data-mode="inline">
              {{ version }}
            </a>
          </div>

          <div class="form-group">
            <label>Fecha de Lanzamiento:</label>
            <a href="#" class="x-editable date-picker" data-pk="config" data-type="date" data-mode="popup" data-title="Fecha de lanzamiento" data-format="yyyy-mm-dd">
              {{ releaseDate }}
            </a>
          </div>

          <div class="form-group">
            <label>Mantenimiento Programado:</label>
            <a href="#" class="x-editable" data-pk="config" data-type="datetime" data-mode="popup" data-title="Próximo mantenimiento" data-format="yyyy-mm-dd hh:ii">
              {{ maintenanceDate }}
            </a>
          </div>
        </div>

        <div class="col-md-6">
          <h4>Configuraciones Avanzadas</h4>
          <div class="form-group">
            <label>Tema de la Aplicación:</label>
            <a href="#" class="x-editable" data-pk="config" data-type="select" data-source="[{value: 'light', text: 'Claro'}, {value: 'dark', text: 'Oscuro'}, {value: 'auto', text: 'Automático'}]" data-title="Seleccionar tema" data-mode="inline">
              {{ theme }}
            </a>
          </div>

          <div class="form-group">
            <label>Idioma por Defecto:</label>
            <a href="#" class="x-editable" data-pk="config" data-type="select" data-source="[{value: 'es', text: 'Español'}, {value: 'en', text: 'English'}, {value: 'fr', text: 'Français'}]" data-title="Idioma del sistema" data-mode="inline">
              {{ language }}
            </a>
          </div>

          <div class="form-group">
            <label>Funciones Habilitadas:</label>
            <a href="#" class="x-editable" data-pk="config" data-type="checklist" data-source="[{value: 'notifications', text: 'Notificaciones'}, {value: 'backup', text: 'Backup Automático'}, {value: 'analytics', text: 'Analytics'}]" data-title="Seleccionar funciones" data-mode="inline">
              {{ enabledFeatures }}
            </a>
          </div>

          <div class="form-group">
            <label>Descripción del Sistema:</label>
            <a href="#" class="x-editable" data-pk="config" data-type="textarea" data-mode="popup" data-rows="5" data-title="Descripción del sistema">
              {{ description }}
            </a>
          </div>
        </div>
      </div>

      <hr />
      <div class="well">
        <h4>Configuración de Backup</h4>
        <div class="row">
          <div class="col-md-4">
            <strong>Frecuencia:</strong>
            <a href="#" class="x-editable" data-pk="backup" data-type="select" data-source="[{value: 'daily', text: 'Diario'}, {value: 'weekly', text: 'Semanal'}, {value: 'monthly', text: 'Mensual'}]" data-mode="inline">
              {{ backupFrequency }}
            </a>
          </div>
          <div class="col-md-4">
            <strong>Hora de Backup:</strong>
            <a href="#" class="x-editable" data-pk="backup" data-type="time" data-mode="popup">
              {{ backupTime }}
            </a>
          </div>
          <div class="col-md-4">
            <strong>Retención (días):</strong>
            <a href="#" class="x-editable" data-pk="backup" data-type="number" data-min="1" data-max="365" data-mode="inline">
              {{ retentionDays }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsEdit",
  data() {
    return {
      appName: "Sistema MVC Híbrido",
      version: "1.0.0",
      releaseDate: "2024-01-15",
      maintenanceDate: "2024-02-01 02:00",
      theme: "Claro",
      language: "Español",
      enabledFeatures: "Notificaciones, Analytics",
      description:
        "Sistema completo de gestión empresarial con capacidades de edición inline.",
      backupFrequency: "Diario",
      backupTime: "03:00",
      retentionDays: 30,
    };
  },
  mounted() {
    this.initializeXEditable();
  },
  methods: {
    initializeXEditable() {
      $(".x-editable").editable({
        mode: "inline",
        emptytext: "No configurado",
        success: (response, newValue) => {
          console.log("Configuración actualizada:", newValue);
        },
      });

      $(".date-picker").editable({
        mode: "popup",
        type: "date",
        format: "yyyy-mm-dd",
        viewformat: "dd/mm/yyyy",
        datepicker: {
          weekStart: 1,
        },
      });
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  margin-right: 10px;
}

.x-editable {
  border-bottom: 1px dashed #428bca;
  text-decoration: none;
}

.x-editable:hover {
  background-color: #f5f5f5;
}
</style>

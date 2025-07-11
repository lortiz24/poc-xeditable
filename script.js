const { glob } = require("glob");
const fs = require("fs");

// Patrón para buscar archivos
const pattern = "**/*.{erb,haml,vue,js}";

(async () => {
  try {
    // Buscar archivos
    const files = await glob(pattern, {
      ignore: ["node_modules/**", "script.js"],
    });

    const resultsMap = {};

    for (const file of files) {
      const content = fs.readFileSync(file, "utf-8");

      // Buscar el módulo en el metadata (ej: <!-- MODULE: Usuarios -->)
      // Buscar el módulo en el metadata
      const moduleMatch = content.match(/MODULE: (.+)/);

      const moduleName = moduleMatch
        ? moduleMatch[1].trim().replace(" -->", "").replace(" */", "")
        : "Desconocido";

      // Regex para detectar <a ... data-pk="..." data-type="..." ...>
      const regex = /<a[^>]*data-pk="[^"]+"[^>]*data-type="[^"]+"[^>]*>/g;
      const matches = content.match(regex) || [];

      matches.forEach((match) => {
        const typeMatch = match.match(/data-type="([^"]+)"/);
        const modeMatch = match.match(/data-mode="([^"]+)"/);
        const type = typeMatch ? typeMatch[1] : "Desconocido";
        const mode = modeMatch ? modeMatch[1] : "Desconocido";
        const archivoNombre = file.replace(/^.*[\\\/]/, "");
        const rutaLimpia = file.replace(/\\/g, "/");

        // Clave única por archivo + tipo + modo
        const key = `${file}|${type}|${mode}`;

        if (resultsMap[key]) {
          resultsMap[key].frecuencia += 1;
        } else {
          resultsMap[key] = {
            archivo: archivoNombre,
            ruta: rutaLimpia,
            modulo: moduleName,
            tipoDeCampo: type,
            modoDeEdicion: mode,
            frecuencia: 1,
          };
        }
      });
    }

    // Convertir mapa a array
    const results = Object.values(resultsMap);

    fs.writeFileSync(
      "x-editable-results.json",
      JSON.stringify(results, null, 2)
    );

    console.log(
      "✅ Detección completada. Resultados guardados en x-editable-results.json"
    );
  } catch (err) {
    console.error("❌ Error al buscar archivos:", err);
  }
})();

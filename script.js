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

    const results = [];

    for (const file of files) {
      const content = fs.readFileSync(file, "utf-8");

      // Buscar el módulo en el metadata
      const moduleMatch = content.match(/MODULE: (.+)/);
      const moduleName = moduleMatch ? moduleMatch[1].trim() : "Desconocido";

      // Buscar instancias de x-editable que cumplan con todas las condiciones
      const regex =
        /<a[^>]*class="[^"]*x-editable[^"]*"[^>]*data-pk="[^"]+"[^>]*data-type="[^"]+"[^>]*>/g;
      const matches = content.match(regex) || [];

      matches.forEach((match) => {
        const pkMatch = match.match(/data-pk="([^"]+)"/);
        const typeMatch = match.match(/data-type="([^"]+)"/);
        const pk = pkMatch ? pkMatch[1] : "Desconocido";
        const type = typeMatch ? typeMatch[1] : "Desconocido";

        results.push({
          file,
          module: moduleName,
          pk,
          type,
        });
      });
    }

    fs.writeFileSync(
      "x-editable-results.json",
      JSON.stringify(results, null, 2)
    );
    console.log(
      "Detección completada. Resultados guardados en x-editable-results.json"
    );
  } catch (err) {
    console.error("Error al buscar archivos:", err);
  }
})();

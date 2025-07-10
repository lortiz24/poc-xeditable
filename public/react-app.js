const { useEffect, useState } = React;

function App() {
  const [nombre, setNombre] = useState("Juan");
  const [edad, setEdad] = useState(25);
  const [fechaNacimiento, setFechaNacimiento] = useState("1998-05-15");

  useEffect(() => {
    // Verificar que jQuery esté disponible
    if (typeof $ === "undefined") {
      console.error("jQuery no está disponible en React");
      return;
    }

    // Inicializar x-editable para nombre (inline)
    $(".react-nombre").editable({
      type: "text",
      title: "Editar nombre",
      mode: "inline",
      value: nombre,
      success: (response, newValue) => {
        setNombre(newValue);
      },
    });

    // Inicializar x-editable para edad (inline, tipo number)
    $(".react-edad").editable({
      type: "number",
      title: "Editar edad",
      mode: "inline",
      value: edad,
      success: (response, newValue) => {
        setEdad(parseInt(newValue));
      },
    });

    // Inicializar x-editable para fecha (modal)
    $(".react-fecha").editable({
      type: "date",
      title: "Editar fecha de nacimiento",
      mode: "popup",
      value: fechaNacimiento,
      format: "yyyy-mm-dd",
      success: (response, newValue) => {
        setFechaNacimiento(newValue);
      },
    });
  }, []); // Se ejecuta solo una vez al montar el componente

  return React.createElement(
    "div",
    { className: "panel panel-default" },
    React.createElement(
      "div",
      { className: "panel-heading" },
      React.createElement(
        "h3",
        { className: "panel-title" },
        "React: Formulario Editable"
      )
    ),
    React.createElement(
      "div",
      { className: "panel-body" },
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("label", null, "Nombre: "),
        React.createElement("span", null, " "),
        React.createElement(
          "a",
          {
            href: "#",
            className: "react-nombre",
            "data-pk": "1",
          },
          nombre
        )
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("label", null, "Edad: "),
        React.createElement("span", null, " "),
        React.createElement(
          "a",
          {
            href: "#",
            className: "react-edad",
            "data-pk": "1",
          },
          edad
        ),
        " años"
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("label", null, "Fecha de nacimiento: "),
        React.createElement("span", null, " "),
        React.createElement(
          "a",
          {
            href: "#",
            className: "react-fecha",
            "data-pk": "1",
          },
          fechaNacimiento
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("react-root")).render(
  React.createElement(App)
);

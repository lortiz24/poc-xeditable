const { useEffect, useState } = React;

function App() {
  const [nombre, setNombre] = useState("Juan");
  
  useEffect(() => {
    // Inicializar x-editable
    $('.react-editable').editable({
      type: 'text',
      title: 'Editar nombre',
      mode: 'inline',
      value: nombre,
      success: (response, newValue) => {
        setNombre(newValue);
      }
    });
  }, []); // Se ejecuta solo una vez al montar el componente

  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "React: Nombre editable"),
    React.createElement(
      "a",
      {
        href: "#",
        className: "react-editable",
        "data-pk": "2"
      },
      nombre
    )
  );
}

ReactDOM.createRoot(document.getElementById("react-root")).render(
  React.createElement(App)
);

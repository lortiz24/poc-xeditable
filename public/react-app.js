const { useState } = React;

function App() {
  const [nombre, setNombre] = React.useState("Juan");
  const [editando, setEditando] = React.useState(false);

  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "React: Nombre editable"),
    !editando
      ? React.createElement("div", { onClick: () => setEditando(true) }, nombre)
      : React.createElement("input", {
          value: nombre,
          onChange: (e) => setNombre(e.target.value),
          onBlur: () => setEditando(false),
        })
  );
}

ReactDOM.createRoot(document.getElementById("react-root")).render(
  React.createElement(App)
);

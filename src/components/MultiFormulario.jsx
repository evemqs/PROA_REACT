import React from "react";

function MultiFieldForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Função genérica para lidar com a mudança em qualquer campo de entrada
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ 
      ...formData, 
      [name]: value, // Atualiza o campo correspondente no estado
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Dados submetidos: ${JSON.stringify(formData)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input 
          type="text"
          name="name"
          value={formData.name} 
          onChange={handleInputChange} 
        />
      </label>
      <label>
        Email:
        <input
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Mensagem:
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MultiFieldForm;
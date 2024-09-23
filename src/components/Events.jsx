import { useState } from "react";

function ClickButton() {
    function handleClick() {
        alert('O botão foi clicado!');
    }

    return <button onClick={handleClick}>Click me</button>;
}

// Função para o campo de input
function InputField() {
    const [value, setValue] = useState('');
    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>Você digitou: {value}</p>
        </div>
    );
}

// O evento onSubmit é usado para capturar o envio de formulários
function FormSubmit() {
    const [name, setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); // Evita o comportamento padrão de recarregar a página
        alert(`Form submitted with name: ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

function KeyDownComponent() {
    function handleKeyDown(event) {
        console.log(`Key pressed: ${event.key}`);
    }
    return <input type="text" onKeyDown={handleKeyDown} />;
}

function FocusBlurComponent() {
    function handleFocus() {
        console.log('Input focused');
    }

    function handleBlur() {
        console.log('Input lost focus');
    }

    return <input type="text" onFocus={handleFocus} onBlur={handleBlur} />;
}

function HoverComponent() {
    function handleMouseEnter() {
        alert('Mouse entrou na div!');
    }

    function handleMouseLeave() {
        alert('Mouse saiu!');
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            Hover over this text
        </div>
    )
}

export { ClickButton, InputField, FormSubmit, KeyDownComponent, FocusBlurComponent, HoverComponent }
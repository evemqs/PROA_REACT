import React, { useState } from "react";

function Calculation() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    
    function handleChangeNum1(event) {
        setValue1(event.target.value);
    }

    function handleChangeNum2(event) {
        setValue2(event.target.value);
    }

    function handleClickSomar() {
        alert(Number(value1) + Number(value2))
    }

    function handleClickSubtrair() {
        alert(Number(value1) - Number(value2))
    }

    function handleClickMultiplicar() {
        alert(Number(value1) * Number(value2))
    }

    function handleClickDividir() {
        if (Number(value2) >= 0) {
            alert(Number(value1) / Number(value2))
        } else {
            alert("Não é possivel dividir por zero.")
        }
    }

    return (
        <div>
            <label htmlFor="">Número 1: </label>
            <input type="number" onChange={handleChangeNum1} />
            <label htmlFor="">Número 2: </label>
            <input type="number" onChange={handleChangeNum2} />

            <button onClick={handleClickSomar}>Somar</button>
            <button onClick={handleClickSubtrair}>Subtrair</button>
            <button onClick={handleClickMultiplicar}>Multiplicar</button>
            <button onClick={handleClickDividir}>Dividir</button>
        </div>
    )
}

export default Calculation;
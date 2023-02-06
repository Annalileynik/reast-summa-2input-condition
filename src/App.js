import {useState} from "react";

function App() {
    const [number1, setNumber1] = useState(10)
    const [number2, setNumber2] = useState(10)

    const changeNumber1 = (event) => {
        console.log(typeof event.target.value)
        event.target.value == +event.target.value
            ? event.target.value = event.target.value
            : event.target.value = 0
        setNumber1(+event.target.value)
    }
    const changeNumber2 = (event) => {
        event.target.value == +event.target.value
            ? event.target.value = event.target.value
            : event.target.value = 0
        setNumber2(+event.target.value)
    }

    return (
        <div>
            <input value={number1} onChange={changeNumber1}/>
            <input value={number2} onChange={changeNumber2}/>
            <hr/>
            <br/> <strong> Plus: </strong> {number1} + {number2} = {number1 + number2}
            <br/> <strong> Minus:</strong> {number1} - {number2} = {number1 - number2}
            <br/> <strong> Multiplication: </strong> {number1} * {number2} = {number1 * number2}

            <br/> <strong>Division: </strong> {number1} / {number2} = {number1 / number2}


        </div>
    );
}

export default App;

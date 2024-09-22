import React from 'react';
import {useState} from 'react'

export const Contador = () => {
    const [valor, setValor] = useState(0);

    const acumular = (numero) => {
        setValor(valor + numero);
    };
    
    return (
        <div>
            <h1>
                Hook useState
            </h1>
           
            <h2>
                <h3>
                    Contador: <small>{valor}</small>
                </h3>
            </h2>

            <button onClick={() => acumular(1)}>
                    Suma +1
            </button>
            &nbsp;
            <button onClick={() => acumular(-1)}>
                    Resta -1
            </button>

        </div>
    )
}
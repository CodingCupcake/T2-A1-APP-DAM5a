//import React from 'react';
import { useCounter } from './hooks/useCounter';

export const ContadorHook = () => {

    const {valor, acumular} = useCounter();
    
    return (
        <div>
            <h2>
                <h3>
                    ContadorHook: <small>{valor}</small>
                </h3>
            </h2>

            <button onClick={() => acumular(1)}>
                    Sumar (+1)
            </button>
            &nbsp;
            <button onClick={() => acumular(-1)}>
                    Restar (-1)
            </button>

        </div>
    )
}
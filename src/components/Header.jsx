import React from 'react'
import NuevoPresupuesto from "./NuevoPresupuesto.jsx";
import ControlPresupuesto from "./ControlPresupuesto.jsx";

// eslint-disable-next-line react/prop-types
const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto,gastos,setGastos}) => {
    return(
        <header>
            <h1>Planificador de gastos</h1>
            {isValidPresupuesto ? (
                <ControlPresupuesto
                    presupuesto = {presupuesto}
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    gastos = {gastos}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            ):(
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}
        </header>
    )
}

export default Header
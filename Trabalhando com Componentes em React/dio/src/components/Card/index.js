import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [valor, setValor] = useState(0)

    const Adicionar = () => {
        setValor(valor + 1)
    }

    const Remover = () => {
        setValor(valor - 1)
    }

    return (
        <div className="card">
            <div className="card-header">Meu primeiro Card</div>
            <div className="card-body">

                <Button
                    type="button" 
                    className="btn btn-success"
                    onClick={Adicionar}>
                    Adicionar
                </Button>
                <Button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={Remover}
                    >
                    Remover
                </Button>
                <p>{valor}</p>
            </div>
        </div>
    );
};

export default Card;

import React from "react";

const Episodio = () => {

    return (
        <li>
            <div className="row">
                <div className="col-1 my-auto text-center">
                    <h3 className="text-white">1</h3>
                </div>
                <div className="col-4">
                    <img className="img-fluid" src={require("../../assets/capa diabo de cada dia.png")} />
                </div>
                <div className="col-7">
                    <h6 className="text-white">Nome do Episódio</h6>
                    <p className="text-muted">
                        Um cirurgião plástico passa anos fingindo ser casado, até que conhece a mulher perfeita.
                        Agora, ele precisa que sua assistente se passe por sua futura ex.
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Episodio;
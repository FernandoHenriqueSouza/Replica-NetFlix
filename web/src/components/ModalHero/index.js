import React from "react";

const ModalHero = () => {

    return (
        <div id="hero" className="container-fluid">
            <div className="row" id="hero_infos">
                <div className="col-6">
                    <img className="logo" src={require("../../assets/Diabo de cada dia logo.png")} />
                    <h1 className="text-white">
                        <img src={require("../../assets/Badge top10.png")} />Top 1 de hoje no Brasil.
                    </h1>
                    <p className="text-white">
                        Pregadores profanos. Autoridades corruptas. Amantes assassinos.
                        Numa cidade cheia de pecadores, um jovem busca justiça.
                    </p>
                    <br />
                    <button className="btn btn-lg btn-custom-white">
                        <span className="mdi mdi-play"></span>
                        Assistir
                    </button>
                    {' '}
                    <button className="btn btn-lg btn-custom-translucent">
                        <span className="mdi mdi-information-outline"></span>
                        Mais informações
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalHero;
import React from 'react';
import Episodio from '../Episodio';

const ModalFilme = () => {

    return (
        <div className="modal fade" id="modal-filme">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-hero">
                        <img src={require("../../assets/Diabo de cada dia logo.png")} />
                        <div className="col-12 modal-hero-infos">
                            <button className="btn btn-lg btn-custom-white">
                                <span className="mdi mdi-play"></span> Assistir
                            </button>
                            <a href="#" className="btn btn-custom-round btn-lg btn-light rounded-circle">
                                <span className="mdi mdi-play"></span>
                            </a>
                            <a href="#" className="btn btn-custom-round btn-lg border-white rounded-circle opacity-50">
                                <span className="mdi mdi-thumb-up text-white"></span>
                            </a>
                            <a href="#" className="btn btn-custom-round btn-lg border-white rounded-circle opacity-50">
                                <span className="mdi mdi-thumb-down text-white"></span>
                            </a>
                        </div>

                    </div>
                    <div className="modal-infors"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-7">
                                <p
                                    className="filme_descricao">Pregadores profanos. Autoridades corruptas. Amantes assassinos.
                                    Numa cidade cheia de pecadores, um jovem busca justiça.
                                </p>
                            </div>
                            <div className="col-5">
                                <p className="filme_elenco">
                                    Elenco: <text>Silvio Sampaio, Juliana Righi, Imar Sampaio, Fernando Henrique.</text>
                                    <br />
                                    <br />
                                    Gêneros: <text>Ação, Aventura, Dramático.</text>
                                    <br />
                                    <br />
                                    Cenas e momentos: <text>Violentos.</text>
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-7">
                                <h3 className="text-white">Episódios</h3>
                            </div>
                            <div className="col-5 text-right">
                                <select className="form-control">
                                    <option >Temporada 1</option>
                                    <option >Temporada 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <ul id="lista_episodios">
                                <Episodio />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ModalFilme;
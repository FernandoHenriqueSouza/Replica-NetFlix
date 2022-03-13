import React from "react";

 const Filme = () => {

    return (
        <li className="filme" data-bs-toggle="modal" data-bs-target="#modal-filme">
            <img className="img-fluid" src={require("../../assets/filmes/cafe com aroma.jpg")} />
            <div className="filme_info">
                <div className="col-12">
                    <a href="#" className="btn btn-custom-round btn-light rounded-circle">
                        <span className="mdi mdi-play"></span>
                    </a>
                    <a href="#" className="btn btn-custom-round border-white rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a href="#" className="btn btn-custom-round border-white rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-down text-white"></span>
                    </a>
                    <a href="#" className="btn btn-custom-round border-white rounded-circle opacity-50">
                        <span className="mdi mdi-plus text-white"></span>
                    </a>
                </div>
                <p>T3:E5 <text>"Meu Episódio"</text></p>
            </div>
        </li>
    )
 }

 export default Filme;
import React from "react";

const Header = ({hideMenu}) => {

    return (
        <header className="row">
            <div className="col-2">
                <img src={require("../../assets/Logo.png")} />
            </div>
            {!hideMenu && <div className="col-8">
                <ul className="menu_list">
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Séries</a>
                    </li>
                    <li>
                        <a href="#">Filmes</a>
                    </li>
                    <li>
                        <a href="#">Mais Recentes</a>
                    </li>
                    <li>
                        <a href="#">Minha Lista</a>
                    </li>
                </ul>
            </div>}
        </header>
    )
}

export default Header;
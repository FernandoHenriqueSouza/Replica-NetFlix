import React, {useState, useEffect} from 'react';
import ModalFilme from '../../components/ModalFilme';
import Header from '../../components/Header';
import ModalHero from '../../components/ModalHero';
import Section from '../../components/Section';

const Home = () => {


    //Retornar o HTML do componente
    return (
    <>
    <ModalFilme />

    <div className="container-fluid">
        <Header />
    </div>

    <ModalHero />
    

    <div id="main-content">
        <Section />
    </div>
    </>   
    );
};

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">SOBRE NÓS</h1>
            </div>
            <p>Idealizado e criado por um redes</p>
            <p className="mid">
            Somos a chave para elevar o nível do seu jogo! 
            É de conhecimento geral que um um bom redes pode fazer 
            toda a diferença em uma partida. Imagine ter à sua 
            disposição um guardião habilidoso e confiável pronto para proteger o seu 
            gol com paixão e dedicação. Com nossa seleção de 
            guarda-redes de alto calibre, estamos comprometidos
             em aumentar a qualidade dos seus jogos. 
             Não deixe a defesa ao acaso - conte conosco para 
             garantir que cada defesa seja impecável e cada 
             vitória seja conquistada com segurança. 
             Junte-se a nós e eleve o seu jogo a novos patamares!
            </p>
            
          </div>
          <div className="banner">
            <img src="klipartz.com.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

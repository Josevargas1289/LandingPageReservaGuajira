import React from "react";
import imgArbolesPlus2 from "../assets/img/imgBig/ImgArbolesPlus2.jpg";
import imgArbolesPlus from "../assets/img/imgBig/imgArbolesPlus.jpg";

const ArbolesComponent = () => {
  return (
    <div className="about-section order-1 order-lg-2  section-space--inner--120 animate__animated animate__backInLeft">
      <div className="container">
        <div className="about-wrapper row">
          <div className="col-sm-6 col-12 order-1 order-lg-2">
            <div className="about-image about-image-1">
              <img src={imgArbolesPlus} alt="" />
            </div>
          </div>
          <div className="col-sm-6 col-12 order-2 order-lg-3">
            <div className="about-image about-image-2">
              <img src={imgArbolesPlus2} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-12 order-3 order-lg-1">
            <div className="about-content about-content-1">
              <h1>
                <span>Arboles Plus</span>
              </h1>
              <p>
                Los árboles plus son individuos destacados fenotípicamente en
                una o varias características de interés para la conservación. Su
                tiene como objetivo utilizarlos como progenitores en poblaciones
                de mejoramiento y selección de producción en el invernadero
                establecido por SOLARPACK en la Reserva Natural "El Paraíso de
                los Deseos". Esto puede realizarse en plantaciones dentro de la
                reserva, especialmente en áreas de selección, durante el primer
                ciclo del proyecto. Sin embargo, también se pueden incorporar
                árboles plus en ciclos de generación avanzada, particularmente
                en zonas de vegetación secundaria alta para el recambio
                genético.
                <br />
                <br />
                La selección de árboles plus se realiza cuidadosamente
                considerando ciertas características: deben presentar variación
                genética, buen estado de madurez, importancia económica y
                ecológica, y niveles aceptables de control genético. Este método
                implica comparar el árbol candidato con sus vecinos dentro de la
                reserva, observando sus características. Usualmente, se comparan
                con los cinco mejores árboles dentro de una radio de 10 a 20
                metros alrededor del candidato.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 order-4">
            <div className="about-content about-content-2">
              <p>
                Se han identificado siete individuos reportados como árboles
                plus, cumpliendo con los criterios establecidos, pertenecientes
                a cinco especies de importancia ecológica. Se ha iniciado el
                muestreo de biodiversidad en la reserva, identificando árboles
                plus de la especie Cavanillesia platanifolia, conocida como
                Macondo en Colombia, una especie casi amenazada según la UICN.
                Esta especie es vital para los ecosistemas de bosque seco y es
                el hábitat natural del águila arpía, además de tener significado
                cultural en varios países. Se sugiere recolectar semillas y
                reproducir esta especie en vivero.
                <br />
                <br />
                Se ha documentado este proceso mediante registro fotográfico y
                toma de datos dasométricos como diámetro a la altura del pecho
                (DAP), altura, nombre común y nombre científico. Además, se ha
                implementado la identificación visual en campo mediante pintura
                amarilla para georreferenciar los individuos forestales con
                anillos en sus circunferencias
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArbolesComponent;

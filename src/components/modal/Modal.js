import React, { useState } from "react";
import { Modal } from "antd";
const ModalB = () => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <button
        className="ht-btn ht-btn--round"
        style={{ background: "#0A9D33", border: "none" }}
        onClick={() => setModal2Open(true)}
      >
        LEER MÁS
      </button>

      <Modal
        title="Reserva natural paraiso de los deseos"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          En el corazón de Córdoba, Colombia, nuestra reserva es mucho más que
          un espacio natural; es un testimonio de conexión con la naturaleza y
          un homenaje al legado cultural indígena. Fundada en 2007 según la
          Resolución IS N° 0233, esta tierra sagrada es el resultado de un sueño
          arraigado en la infancia de su creador, e inspirado por las
          tradiciones de los cabildos Zenúes que enriquecían su vida diaria.{" "}
          <br /> <br /> La adquisición estratégica de tierras en los municipios
          de Canalete y Montería marcó el inicio de una misión: conservar una
          porción única de Colombia, abundante en biodiversidad y belleza. Hoy,
          la reserva se muestra como un santuario para una variada fauna, desde
          ardillas y guacharacas hasta el majestuoso venado, conviviendo en
          armonía con una rica diversidad de árboles y plantas nativas. Más que
          un guardián de la tierra, el visionario detrás de esta reserva
          concibió un proyecto integral. Transformamos nuestro espacio en un
          referente de ecoturismo y educación ambiental sostenible. <br />{" "}
          <br /> Con respaldo de instituciones como{" "}
          <strong>Corpored, Agrosavia y la Universidad de Córdoba,</strong>{" "}
          hemos creado un modelo ejemplar de conservación. Los invitamos a
          sumergirse en la riqueza natural y cultural de "El Paraíso de los
          Deseos". <br /> <br /> Es una oportunidad única para explorar una
          historia apasionante de conservación, aprender sobre prácticas
          agrícolas sostenibles y apreciar la diversidad de vida que Colombia
          nos regala. Únanse a nosotros en este viaje de descubrimiento y
          compromiso. ¡Bienvenidos a nuestro paraíso compartido!
        </p>
      </Modal>
    </div>
  );
};
export default ModalB;

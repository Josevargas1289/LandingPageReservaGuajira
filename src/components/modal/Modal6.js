import React, { useState } from "react";
import { Modal } from "antd";
const Modal6 = () => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <button
        className="ht-btn ht-btn--round modalBtn"
        onClick={() => setModal2Open(true)}
      >
        LEER MÁS
      </button>

      <Modal
        title="Viveros"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          También tiene como objetivo el secuestro de carbono en paisajes de
          producción y corredores biológicos, beneficiando tanto a la comunidad
          de la vereda San Rafael y el municipio de Montería como a la
          biodiversidad de la reserva. El vivero de la reserva se estableció
          cerca de la represa para facilitar el acceso y el mantenimiento
          requerido para el riego de las plantas en proceso de germinación. Se
          evaluaron diversas características, como la disponibilidad de agua,
          cercas para delimitar el sitio, caminos de acceso y orientación de las
          plantas para aprovechar la luz solar.
          <br />
          <br />
          El área de establecimiento del vivero fue seleccionada tras la
          limpieza de especies arvenses. Se perforaron postes y se construyó una
          estructura de madera para sostener la cama de germinación de 2x1m2. Se
          instaló un plástico para evitar el escurrimiento del sustrato y se
          llenó con materia orgánica y componentes nutricionales para la
          germinación de las semillas. Se instalaron una polisombra y una malla
          protectora para garantizar el crecimiento adecuado de las plantas y se
          colocó una cerca eléctrica para protegerlas del ganado. Se dejó una
          era germinada con brinzales de especies como Macondo, Ollita de Mono,
          Algarrobillo e Indio en Cuero, con un total de 100 plántulas sembradas
        </p>
      </Modal>
    </div>
  );
};
export default Modal6;

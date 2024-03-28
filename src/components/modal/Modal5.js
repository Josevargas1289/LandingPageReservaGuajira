import React, { useState } from "react";
import { Modal } from "antd";
const Modal5 = () => {
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
        title="Pastos Enmalezados"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          Surgen debido a la falta de prácticas de manejo o al abandono de la
          tierra. Esta cobertura se caracteriza por pastizales y rastrojos de
          hierbas y arbustos heterogéneos, con una altura promedio de 2 metros.
          Entre las especies comunes se encuentran la Dormilona, ​​el Abrojo,
          entre otras.
        </p>
      </Modal>
    </div>
  );
};
export default Modal5;

import React, { useState } from "react";
import { Modal } from "antd";
const Modal9 = () => {
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
        title="Reptiles"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          Desde serpientes coloridas hasta lagartos ágiles, estos fascinantes
          animales son parte esencial de nuestro ecosistema. No solo añaden un
          toque de misterio y belleza a nuestro entorno, sino que también
          desempeñan un papel crucial en el equilibrio de la naturaleza. Como
          depredadores de insectos y pequeños mamíferos, ayudan a controlar las
          poblaciones y mantienen el equilibrio del ecosistema.
        </p>
      </Modal>
    </div>
  );
};
export default Modal9;

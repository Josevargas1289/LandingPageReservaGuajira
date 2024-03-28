import React, { useState } from "react";
import { Modal } from "antd";
const Modal4 = () => {
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
        title="Vegetación secundaria baja"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          Está compuesta principalmente por arbustos y hierbas, con árboles
          esporádicos. Incluye especies como Indio en Cuero, Ollita de Mono, El
          Abarcó, El Corozo, El Achiote, El Carbonero, El Trébol y El
          Cordoncillo, junto con vegetación herbácea que desaparece en épocas
          secas.
        </p>
      </Modal>
    </div>
  );
};
export default Modal4;

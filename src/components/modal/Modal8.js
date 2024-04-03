import React, { useState } from "react";
import { Modal } from "antd";
const Modal8 = () => {
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
        title="Anfibios"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          Desde coloridas ranas hasta sorprendentes salamandras, estos pequeños
          habitantes desempeñan un papel vital en el equilibrio ecológico.
          Descubre cómo su presencia indica la salud de nuestros ecosistemas y
          cómo contribuyen al ciclo vital de la biodiversidad
        </p>
      </Modal>
    </div>
  );
};
export default Modal8;

import React, { useState } from "react";
import { Modal } from "antd";
const Modal3 = () => {
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
        title="Vegetación Secundaria alta"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          En el predio en cuestión, se caracteriza por árboles de tamaño mediano
          con dosel discontinuo, incluyendo especies como Guácimo, Majagua
          Colorada, Ollita de Mono, Orejero, Polvillo, Roble, Macondo, entre
          otras. Esta etapa se presenta varios años después de la primera
          intervención y constituye un paso importante en la recuperación del
          ecosistema.
        </p>
      </Modal>
    </div>
  );
};
export default Modal3;

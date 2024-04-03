import React, { useState } from "react";
import { Modal } from "antd";
const Modal7 = () => {
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
        title="Aves"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          Se enfatizó en el sotobosque y bordes de bosque, además de áreas
          abiertas como potreros. Se registraron datos como localidad, fecha,
          condiciones climáticas, especies observadas, tipo de registro, número
          de individuos y actividad observada. Las aves fueron identificadas
          hasta el nivel de especie utilizando guías especializadas y la
          taxonomía más reciente según la clasificación de aves de Suramérica de
          la American Ornithologists' Union.
          <br />
          <br />
          Se capturaron 8 especies de aves mediante redes de niebla, registrando
          detalladamente con fotografías para su posterior análisis y creación
          de piezas publicitarias.
        </p>
      </Modal>
    </div>
  );
};
export default Modal7;

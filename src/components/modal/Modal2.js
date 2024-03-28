import React, { useState } from "react";
import { Modal } from "antd";
const Modal2 = () => {
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
        title="Conoce nuestro proyecto"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        ower
      >
        <p>
          La reserva natural "Paraíso de los Deseos" es un área donde SOLARPACK
          COLOMBIA SAS ESP está llevando a cabo un programa de desarrollo en pro
          de la conservación de la alta biodiversidad . Este lugar alberga una
          gran diversidad de ecosistemas, incluyendo bosques tropicales secos y
          húmedos, así como pastizales, que son hogar de una amplia variedad de
          especies de flora y fauna, algunas de las cuales están en peligro. <br/><br/> La
          conservación de estos recursos naturales es fundamental para mantener
          el equilibrio biológico del ecosistema. <strong>SOLARPACK</strong> está implementando
          estrategias para fortalecer el ecosistema y crear conciencia sobre la
          importancia de la alta biodiversidad, centrándose en especies
          vegetales maderables en peligro. Esto incluye la creación de un diseño
          paisajístico llamado Arboretum, que además busca establecer alianzas
          estratégicas para el proyecto, utilizando el marketing digital como
          herramienta de evidencia y difusión. <br/><br/> Buscamos comprender, conservar y
          utilizar de manera sostenible la rica biodiversidad que alberga la
          reserva natural "El Paraíso de los Deseos". Trabajamos con el objetivo
          de fortalecer alianzas estratégicas destinadas a la preservación de
          los ecosistemas y especies amenazadas, además de implementar proyectos
          ecoturísticos, ambientales y productivos que promuevan la justicia
          social y una sana relación con el medio ambiente. La reserva está
          ubicada en la vereda San Rafael, a unos 40 minutos del municipio de
          Montería, en un terreno propiedad de Alfredo Manuel Pérez Rivero. Sus
          coordenadas geográficas son N08°41'32,04” y W 76°8'0. La descripción
          del entorno se llevó a cabo mediante recorridos aleatorios y
          observaciones detalladas de la vegetación en las áreas designadas para
          la conservación.
        </p>
      </Modal>
    </div>
  );
};
export default Modal2;

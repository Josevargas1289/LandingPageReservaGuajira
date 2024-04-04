import React, { Component } from "react";

class SidebarFlora extends Component {
  render() {
    let data = [
      {},
      {
        sidebarListText:
          "Descubre el corazón de nuestra conservación en nuestros viveros.  Aquí, cada planta es más que un brote: es un símbolo de esperanza y compromiso con la biodiversidad.  Únete a nosotros mientras cultivamos el futuro.",
      },
      {
        sidebarListIcon: "Volver a Galería",
        icon: (
          <box-icon color="#009492" type="solid" name="door-open"></box-icon>
        ),
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <li key={i}>
          <i className={val.sidebarListIcon} />
          {val.sidebarListText}
          <a href="/galeria">
            {val.icon} {val.sidebarListIcon}
          </a>
        </li>
      );
    });

    return (
      <div className="animate__animated animate__fadeInTopRight">
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <h3 className="sidebar-title">Viveros</h3>
            <ul className="sidebar-list">{Datalist}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarFlora;

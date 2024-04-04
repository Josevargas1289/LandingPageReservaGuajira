import React, { Component } from "react";

class SidebarFauna extends Component {
  render() {
    let data = [
      {},
      {
        sidebarListText:
          "¡Descubre la increíble biodiversidad que habita en nuestra reserva! Explora nuestra galería de fauna y maravíllate con las diversas especies que llaman a nuestro paraíso su hogar.",
      },
      {
        sidebarListIcon: "Galería",
        icon: <box-icon name="arrow-back"></box-icon>,
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
            <h3 className="sidebar-title">Fauna</h3>
            <ul className="sidebar-list">{Datalist}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarFauna;

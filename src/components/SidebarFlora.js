import React, { Component } from "react";

class SidebarFlora extends Component {
  render() {
    let data = [
      {},
      {
        sidebarListText:
          "Explora la exuberante vida vegetal que adorna nuestra reserva. Adéntrate en nuestra galería de flora y descubre la diversidad de plantas, árboles y flores que hacen de nuestro paraíso un lugar único",
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
            <h3 className="sidebar-title">Flora</h3>
            <ul className="sidebar-list">{Datalist}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarFlora;

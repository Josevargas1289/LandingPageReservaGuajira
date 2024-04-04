import React, { Component } from "react";

class SidebarFlora extends Component {
  render() {
    let data = [
      {},
      {
        sidebarListText:
          "Sumérgete en nuestro arboretum y descubre un mundo de belleza natural.  Explora nuestros árboles y plantas, cada uno con su historia y significado en el ecosistema",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <li key={i}>
          <i className={val.sidebarListIcon} />
          {val.sidebarListText}
        </li>
      );
    });

    return (
      <div className="animate__animated animate__fadeInTopRight">
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <h3 className="sidebar-title">Arboretum</h3>
            <ul className="sidebar-list">{Datalist}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarFlora;

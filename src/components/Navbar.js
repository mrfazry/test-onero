import React from "react";

let menu = [
  ["TENTANG KAMI", "#tentang-kami"],
  ["PRODUK", "#produk"],
  ["PRO-SHOP", "#pro-shop"],
  ["PURNA JUAL", "#purna-jual"],
  ["PELATIHAN", "#pelatihan"],
  ["HUBUNGI KAMI", "#hubungi-kami"]
];

function List() {
  return menu.map(item => {
    return (
      <li className="nav-item">
        <a href={item[1]} className="nav-link">
          {item[0]}
        </a>
      </li>
    );
  });
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="../../public/assets/aset daikin-14.png" alt="logo daikin" />
        </a>
        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            {List()}
            <li>
              <form className="navbar-form" role="search">
                <div className="input-group add-on">
                  <input
                    className="form-control"
                    placeholder="Search"
                    name="search-term"
                    id="search-term"
                    type="text"
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

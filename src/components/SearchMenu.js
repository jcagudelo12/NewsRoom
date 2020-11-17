import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const SearchMenu = ({ onGet, getNewsHome, getNews }) => {
  let input;

  return (
    <div>
      <header className="row p-0 m-0 d-flex align-items-center">
        <div className="col-6 col-md-2 align-middle">
          <h4>News Feeds</h4>
        </div>
        <div className="col-6 col-md-3 offset-md-7">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => onGet("/search/" + input.value)}
              >
                Buscar
              </button>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Palabra clave"
              aria-label=""
              aria-describedby="basic-addon1"
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  onGet("/search/" + input.value);
                }
              }}
              ref={(node) => (input = node)}
            />
          </div>
        </div>
      </header>
      <div className="col-12 mt-3">
        <Router>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                exact={true}
                onClick={() => getNewsHome()}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/politic"
                className="nav-link"
                activeClassName="active"
                exact={true}
                onClick={() => getNews(1)}
              >
                POLITICA
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/international"
                className="nav-link"
                activeClassName="active"
                exact={true}
                onClick={() => getNews(2)}
              >
                INTERNACIONAL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/tecnology"
                className="nav-link"
                activeClassName="active"
                exact={true}
                onClick={() => getNews(3)}
              >
                TECNOLOGIA
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/entertaiment"
                className="nav-link"
                activeClassName="active"
                exact={true}
                onClick={() => getNews(4)}
              >
                ESPECTACULOS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/sports"
                className="nav-link"
                activeClassName="active"
                exact={true}
                onClick={() => getNews(5)}
              >
                DEPORTES
              </NavLink>
            </li>
          </ul>
        </Router>
      </div>
    </div>
  );
};

export default SearchMenu;

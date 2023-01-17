import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Header, HomeCard01 } from "./components";

export const App: React.FC = () => {
  return (
    <div className="main">
      <Header />

      <section className="part-1">
        <div className="main-container">
          <div className="label">
            All-in-one <br />
            decentralized data
            <br /> infrastructure.
          </div>

          <div className="description">
            Our mission is to address the information asymmetry in crypto. L3
            Atom stores billions
            <br /> of crypto and Web3 data points, transactions, and historical
            records so anyone can
            <br /> access them without censorship.
          </div>

          <div className="action">
            <div className="label">Version 3 is Live!</div>
            <div className="arrow">
              <svg
                data-bbox="19.117 18.918 161.766 162.164"
                viewBox="19.117 18.918 161.766 162.164"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
              >
                <g>
                  <path
                    d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="part-2">
        <div className="main-container">
          <HomeCard01
            title="Unified API"
            description="Live & historical data"
            url="image-01.webp"
          />
          <HomeCard01
            title="Power Query"
            description="Live & historical data"
            url="image-02.webp"
          />
          <HomeCard01
            title="Opensource"
            description="Live & historical data"
            url="image-03.webp"
          />
          <HomeCard01
            title="Decentralization"
            description="Live & historical data"
            url="image-04.png"
          />
          <HomeCard01
            title="Analytics"
            description="Live & historical data"
            url="image-06.png"
          />
          <HomeCard01
            title="Transparency"
            description="Live & historical data"
            url="image-05.webp"
          />
          <HomeCard01
            title="Free data feeds"
            description="Live & historical data"
            url="image-07.png"
          />
        </div>
      </section>
    </div>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home-main">
      <ul className="list-main">
        <li>
          <Link className="link" to={"/accordion"}>
            Accordion
          </Link>
        </li>
        <li>
          <Link className="link" to={"/image-slider"}>
            Image slider
          </Link>
        </li>
        <li>
          <Link className="link" to={"/random-color"}>
            Random color
          </Link>
        </li>
        <li>
          <Link className="link" to={"/star-rating"}>
            Star Rating
          </Link>
        </li>
        <li>
          <Link className="link" to={"/load-more"}>
            Load More
          </Link>
        </li>
        <li>
          <Link className="link" to={"/tree-view"}>
            Tree View
          </Link>
        </li>
        <li>
          <Link className="link" to={"/qr-code-generator"}>
            QR Code Generator
          </Link>
        </li>
        <li>
          <Link className="link" to={"/theme-change"}>
            Light/Dark Mode
          </Link>
        </li>
        <li>
          <Link className="link" to={"/scroll-indicator"}>
            Scroll Indicator
          </Link>
        </li>
        <li>
          <Link className="link" to={"/custom-tabs"}>
            Custom Tabs
          </Link>
        </li>
        <li>
          <Link className="link" to={"/custom-model-components"}>
            Custom Components
          </Link>
        </li>
        <li>
          <Link className="link" to={"/github-profile-finder"}>
            Github Profile Finder
          </Link>
        </li>
        <li>
          <Link className="link" to={"search-autocomplete"}>
            Search Auto Complete
          </Link>
        </li>
        <li>
          <Link className="link" to={"tic-tac-toe"}>
            Tic Tac Toe
          </Link>
        </li>
        <li>
          <Link className="link" to={"use-outside-click"}>
            Close on Click Outside
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

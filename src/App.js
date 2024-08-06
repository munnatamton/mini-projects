import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accordion from "./Components/Accoridan";
import ImageSlider from "./Components/Image-slider";
import RandomColor from "./Components/Random-color";
import StarRating from "./Components/Star-rating";
import Home from "./Components/Home/Index";
import LoadMore from "./Components/Load-more";
import TreeView from "./Components/Tree-view";
import { menus } from "./Components/Tree-view/data";
import QrCodeGenerator from "./Components/Qr-code-generator";
import LightDarkTheme from "./Components/Theme-change";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes className="list-main">
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route
            path="/image-slider"
            element={
              <ImageSlider
                url={"https://picsum.photos/v2/list"}
                limit={10}
                page={1}
              />
            }
          />
          <Route path="/random-color" element={<RandomColor />} />
          <Route path="/star-rating" element={<StarRating />} />
          <Route path="/load-more" element={<LoadMore />} />
          <Route path="/tree-view" element={<TreeView menus={menus} />} />
          <Route path="/theme-change" element={<LightDarkTheme />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

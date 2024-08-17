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
import ScrollIndicator from "./Components/Scroll-indicator";
import CustomTabs from "./Components/Custom-tabs/tabs";
import TabTest from "./Components/Custom-tabs/tab-test";
import ModelTest from "./Components/Custom-model-components/model-test";
import GithubProfileFinder from "./Components/Github-profile-finder";
import SearchAutoComplete from "./Components/Search-autocomplete";
import TicTacToe from "./Components/Tic-tac-toe";
import UseOnclickOutsideTest from "./Components/Use-outside-click/test";

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
          <Route path="/qr-code-generator" element={<QrCodeGenerator />} />
          <Route path="/theme-change" element={<LightDarkTheme />} />
          <Route
            path="/scroll-indicator"
            element={
              <ScrollIndicator
                url={"https://dummyjson.com/products?limit=100"}
              />
            }
          />
          <Route path="/custom-tabs" element={<TabTest />} />
          <Route path="/custom-model-components" element={<ModelTest />} />
          <Route
            path="/github-profile-finder"
            element={<GithubProfileFinder />}
          />
          <Route path="/search-autocomplete" element={<SearchAutoComplete />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/use-outside-click" element={<UseOnclickOutsideTest />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

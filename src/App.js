import { useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Section from "./Component/Section/Section";
import Portal from "./Portal";
import { RejookContext } from "./Context";
import { Games, oldGames, tips } from "./data.s";
import Footer from "./Component/Footer/Footer";
import ScrollTop from "./ScrollTop";

function App() {
  const [humbergerMenuShow, setHumbergerMenuShow] = useState(false);
  const [showPortal, setShowPortal] = useState(false);
  const [allGames, setAllGames] = useState(Games);
  const [allComments, setAllComments] = useState([]);
  const [date, setDate] = useState();
  const [textArea, setTextArea] = useState("");
  const [gamesGenre, setGamesGenre] = useState([]);
  const [popularGamesArray, setpopularGamesArray] = useState(oldGames);
  const [searchValue, setSearchValue] = useState();
  const [findGame, setFindGame] = useState([]);
  const [allTips, setAllTips] = useState(tips);

  return (
    <RejookContext.Provider
      value={{
        humbergerMenuShow,
        setHumbergerMenuShow,
        showPortal,
        setShowPortal,
        popularGamesArray,
        setpopularGamesArray,
        allGames,
        setAllGames,
        allComments,
        setAllComments,
        date,
        setDate,
        textArea,
        setTextArea,
        gamesGenre,
        setGamesGenre,
        searchValue,
        setSearchValue,
        findGame,
        setFindGame,
        allTips,
        setAllTips,
      }}
    >
      <div className="App">
        <ScrollTop/>
        <Portal />
        <Header />
        <Section />
        <Footer />
      </div>
    </RejookContext.Provider>
  );
}

export default App;

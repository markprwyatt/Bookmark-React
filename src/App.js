import React, { useState } from "react";
import styled from "styled-components";
import AddBookmark from "./components/AddBookmark";
import DisplayBookmark from "./components/DisplayBookmark";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  margin: 0 2rem;
`;

const Ul = styled.ul`
  list-style: none;
  margin: auto;
  font-size: 1.3rem;
`;

const PageLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: "Roboto", sans-serif;
`;

const App = () => {
  const [cardData, setCardData] = useState([
    { linkTitle: "My link", link: "https://www.google.com" }
  ]);

  return (
    <>
      <Nav>
        <img src={require("./images/bookmarklogo.png")} alt="logo" />
        <Ul>
          <li>Home</li>
        </Ul>
      </Nav>
      <PageLayout>
        <AddBookmark submitBookmark={setCardData} cardData={cardData} />
        <DisplayBookmark cardData={cardData} />
      </PageLayout>
    </>
  );
};

export default App;

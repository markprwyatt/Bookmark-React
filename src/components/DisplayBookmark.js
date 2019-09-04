import React from "react";
import BookmarkCard from "./BookmarkCard";

const DisplayBookmark = ({ cardData }) => {
  return (
    <main>
      {cardData.map((card, i) => (
        <BookmarkCard title={card.linkTitle} link={card.link} key={i} />
      ))}
    </main>
  );
};

export default DisplayBookmark;

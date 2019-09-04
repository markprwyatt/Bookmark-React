import React, { useState } from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
`;

const BookmarkCard = ({ title, link }) => {
  return (
    <CardWrapper>
      <img src={require("../images/bookmarkicon.png")} alt="bookmark icon" />

      <a href={link}>
        <h3>{title}</h3>
      </a>
    </CardWrapper>
  );
};

export default BookmarkCard;

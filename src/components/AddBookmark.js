import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
  border-radius: 8px;
`;

const Input = styled.div`
  margin: 1rem;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  input {
    font-size: 1.2rem;
    border: none;
    padding: 0.1rem;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  width: 75%;
  border-radius: 15px;
  margin: 0.4rem auto;
`;

const H2 = styled.h2`
  margin: 1rem auto;
`;

const AddBookmark = ({ submitBookmark, cardData }) => {
  const [newCard, setNewCard] = useState({ linkTitle: "", link: "" });

  return (
    <main>
      <Form onSubmit={e => e.preventDefault()}>
        <H2>Add a bookmark</H2>
        <Input>
          <label htmlFor="bookmark-title">Enter a bookmark title</label>
          <input
            onChange={e =>
              setNewCard({ ...newCard, linkTitle: e.target.value })
            }
            value={newCard.linkTitle}
            type="text"
            name="bookmark-title"
            minLength="1"
            maxLength="25"
            placeholder="Title"
          />
        </Input>
        <Input>
          <label htmlFor="bookmark-link">Enter bookmark link</label>
          <input
            onChange={e => setNewCard({ ...newCard, link: e.target.value })}
            value={newCard.link}
            type="text"
            name="bookmark-link"
            minLength="7"
            placeholder="Link"
          />
        </Input>
        <Button
          onClick={() => {
            submitBookmark([
              ...cardData,
              { linkTitle: newCard.linkTitle, link: newCard.link }
            ]);
            setNewCard({ linkTitle: "", link: "" });
          }}>
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default AddBookmark;

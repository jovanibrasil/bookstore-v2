import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { books } from "./searchData";

const SearchContainer = styled.section`
  background-image: linear-gradient(97.45deg, #002F52 35.49%, #326589 165.37%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const SearchTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`

const SearchSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 30px;
`

const BookSearchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <SearchContainer>
      <SearchTitle>Já sabe por onde começar?</SearchTitle>
      <SearchSubtitle>Encontre seu livro em nova estante</SearchSubtitle>
      <Input
        placeholder="Encontre sua próxima leitura"
        onChange={e => {
          const searchText = e.target.value;
          const searchResult = books.filter(book => book.name.includes(searchText));
          setSearchResult(searchResult);
        }}
      />

      {searchResult.map(book => (
        <BookSearchResult>
          <p>{book.name}</p>
          <img src={book.src}></img>
        </BookSearchResult>
      ))}

    </SearchContainer>
  );
}
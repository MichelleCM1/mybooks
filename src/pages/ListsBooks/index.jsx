import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListBooks from './components/ListBooks';
import api from './services/api';

const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ccc;
  padding: 10px;
`;

function ListaBooks () {
    const[books, setBooks] = useState([]); 
  // useState é para gerenciar o estado de algum valor
  //  getter setter 


  useEffect( () => {
      api.get('/books')
        .then( (response) => {
          // console.log(response.data)
          setBooks(response.data)
        })
  },[])  
// useEffect para lidar com efeitos colaterais em um componente como chamada para API


return (
    <Container>
        <h1>Minhas Lista de Livros</h1>
        <ListContainer>
          {
            books.map(book => {
              return ( <ListBooks 
                key={book.url} 
                books={book}
                
                   /> )
            })
          }
          
        </ListContainer>
    </Container>

  )
}

export default ListaBooks;
import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`

border-radius: 4px;
background-color: #fff;
height: 120px;
width: 252px;
color: #29303b;
margin-bottom: 10px;
margin-right: 10px;
padding: 10px;
`
const Thumbnail = styled.img`
width: auto;
height: 100%;
border:0;
vertical-align: middle;
float: left;
margin-right: 10px;
`
const Title= styled.div`
font-weight: 700;
margin-bottom: 5px;
`

const Price= styled.div`
margin-bottom: 5px;
`

const Button = styled.div`
display: inline-block;
margin-bottom: -50px;
font-weight: 400;
text-align: center;
white-space: nowrap;
vertical-align: middle;
cursor: pointer;
border: 1px solid transparent;
font-size: 14px;
padding: 6px 12px;
color: #fff;
background-color: #65ecd6;
color: #5036c2;
border-radius: 4px;
`
const ItemLink = styled.a`
text-decoration: none;

`



export default function ListBooks({books}) {
  return (
    <>
    <ItemLink href= {books.url} target ="_blank">
      <ItemContainer>
        <Thumbnail src={books.image}/>
        <Title>{books.title}</Title>
        <Price>{books.price}</Price>
        <Button>Comprar</Button>


      </ItemContainer>
      </ItemLink>
    </>
  )
}


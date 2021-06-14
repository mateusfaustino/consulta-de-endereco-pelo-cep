import React, {useState } from 'react'
import styled from 'styled-components'
import {shadow} from  '../StyleGuide/styles'
import {SearchButton} from './Button';
import { border } from '../StyleGuide/atoms/animations';
import borders from '../StyleGuide/atoms/borders';

const Container = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
`;
const Search = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    color: #fff;
    font-family: "Segoe UI", sans-serif;
    width:100%;
    max-width:900px;
    background:#fff;
    margin: 8px 0;
    border-radius: ${borders.border32};
    box-shadow:${shadow.shadow3};
    @media(max-width: 400px) {
    }
    `;
    const Input = styled.input`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    font-family: "Segoe UI", sans-serif;
    width:100%;
    hight:100%;
    border-radius:${borders.border32};
    line-height: 25px;
    background-color: transparent;
    border: none;
    margin: 7px 0 6px;
    padding: 0 0 0 19px;
    font-size: 18px;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    
    
    @media(max-width: 400px) {
        
    }
    `; 
    
export default function SearchByZipCode() {
    return (
        <Container>
            <Search>
                <Input id="ZipCodeInput" type="search" spellcheck="false" role="combobox" placeholder="Digite um CEP" aria-live="polite"></Input>
                <SearchButton style="height:100%">Pesquisar</SearchButton>
            </Search>
        </Container>
    )
}

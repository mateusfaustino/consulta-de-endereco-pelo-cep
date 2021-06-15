import React, {useState } from 'react'
import styled from 'styled-components'
import {color, shadow,border,anime,typography} from  '../StyleGuide/styles'
import {SearchButton} from './Button';
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
    border: none;
    margin: 7px 0 6px;
    padding: 0 0 0 19px;
    font-size: 18px;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif;
    color: rgba(0,0,0,.87);
    word-wrap: break-word;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    background: ${color.white}!important;
    
    
    @media(max-width: 400px) {
        
    }
    `; 
    const AdressData = styled.div`
        display:${props => props.visible ? 'flex' : 'none' };
        flex-direction:column;
        background:${color.white};
        color:${color.dark2};
        width:100%;
        padding:8px;
        border-radius:${border.border8};
        box-shadow: ${shadow};
        max-width:900px;
        ${anime.scaleUp}
        h2{
            margin-bottom:8px;
            ${typography.paragraph_bold}
        }
        
    `
    const ErrorMessage = styled.div`
        display:${props => props.visible ? 'flex' : 'none' };
        flex-direction:column;
        color:${color.dark2};
        width:100%;
        padding:8px;
        border-radius:${border.border8};
        box-shadow: ${shadow};
        max-width:900px;
        background:${color.warning0};
        ${anime.scaleUp}
        h2{
            margin-bottom:8px;
            ${typography.header_5}
        }
    `
export default function SearchByZipCode() {
    var zipCode = ""
    const [cep,setcep] = useState();
    const [logradouro,setLogradouro] = useState();
    const [bairro,setBairro] = useState();
    const [localidade,setLocalidade] = useState();
    const [uf,setUf] = useState();
    const [ddd,setDdd] = useState();
    const [errorState,setError] = useState(false);
    
    const handleZipcode= (zipInputValue) => zipInputValue.replace("-","");
    
    function getZipcode(){
        const zipInputValue = document.getElementById("zipCodeElement").value;
        zipCode=handleZipcode(zipInputValue);
        return(zipCode)
    }
    function searchAdress() {
        const parameters ={
            method:'GET',
            mode:'cors',
            cache:'default'
        }
        const url = `https://viacep.com.br/ws/${getZipcode()}/json/`
        return fetch(url, parameters)
        .then(response => response.json()
        ).then((data) => {
            setError(false)
            showData(data)
        })
        .catch((error) => {
            setError(true)
            setcep(null)
        })
    }
    const showData = (data)=>{
            setcep(data.cep);
            setLogradouro(data.logradouro);
            setLocalidade(data.localidade);
            setUf(data.uf);
            setBairro(data.bairro);
            setDdd(data.ddd)
    }
    return (
        <Container>
            <Search >
                <Input  maxLength="9" id="zipCodeElement" type="text" spellcheck="false" role="combobox" placeholder="Digite um CEP" aria-live="polite"></Input>
                <SearchButton onClick={()=>searchAdress()} >Pesquisar</SearchButton>
            </Search>
            <AdressData visible={cep?true:false}>
                <h2>Cep: {cep}</h2>
                <h2>Rua: {logradouro}</h2>
                <h2>Bairro: {bairro}</h2>
                <h2>Estado: {uf}</h2>
                <h2>Cidade: {localidade}</h2>
                <h2>DDD: {ddd}</h2>
            </AdressData>
            <ErrorMessage visible={errorState} >
                <h2>Atenção! Algo deu errado. Verifique se o cep está correto e tente novamente</h2>
            </ErrorMessage>

        </Container>
    )
}

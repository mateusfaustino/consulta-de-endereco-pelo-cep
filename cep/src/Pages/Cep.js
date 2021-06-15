import React from 'react'
import styled from 'styled-components'
import SearchByZipCode from '../Components/Search'
import {color, typography} from  '../StyleGuide/styles'

const Page = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:#10101E;
    width:100%;
    padding:0 10vw;
    background: ${color.dark2};
`
const Title = styled.h1`
color:#fff;
padding-bottom:32px;
${typography.header_2('#fff')}
`

export default function Cep() {
    return (
        <Page>
            <Title>Encontre um endereço pelo CEP</Title>
            <SearchByZipCode/>
        </Page>
    )
}

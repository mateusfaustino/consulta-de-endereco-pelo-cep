import { color, shadow, border,typography,breakpoint } from "../StyleGuide/styles"
import styled from "styled-components"
import { MdSearch } from 'react-icons/md';

const Btn =styled.button`
width: fit-content;
min-width: 136px;
height: 36px;
display: inline-flex;
align-items: center;
justify-content: center;
background-color: ${color.primary0};
border-radius: ${border.border32};
margin: 0 auto;
padding: 8px 12px;
overflow: hidden;
cursor: pointer;
position: relative;
border: none;
outline: 0;
box-shadow: ${shadow.shadow1};
`
const SearchBtn =styled.button`
width: fit-content;
height: 100%;
display: inline-flex;
align-items: center;
justify-content: center;
background-color: ${color.primary0};
border-radius: 0 32px 32px 0;
margin: 0 auto;
padding: 8px 12px;
overflow: hidden;
cursor: pointer;
position: relative;
border: none;
outline: 0;
box-shadow: ${shadow.shadow1};
p{
    display:none;
}
svg{
    fill:${color.white};
    width:32px;
    height:32px;
}
@media (min-width: ${breakpoint.mobile}) {
    p{
        display:block;
    }
    svg{
        display:none;
    }    
}
`
const Text = styled.p`
    
    ${typography.paragraph_bold(color.white)}
    text-align: center;
    &::selection {
        background-color: transparent;
    }
@media (min-width: ${breakpoint.mobile}) {
    
}



`
export const button_small = styled.button`

    height: 28px;
    padding: 4px 12px;
    .text {
        @include paragraph-regular($white);
    }

    @media (min-width: $mobile-breakpoint) {
        height: 32px;
    }

`    
export default function Button (props){
    return(
        <SearchButton>
            <Text>
            {props.children}
            </Text>
        </SearchButton>
    )
}
export function SearchButton (props){
    return(
        <SearchBtn onClick={props.onClick} type="button">
        <MdSearch/>
            <Text>
            {props.children}
            </Text>       
        </SearchBtn>
    )
}

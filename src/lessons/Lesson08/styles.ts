import styled from '@emotion/styled'

interface ButtonStyledComponentProps {
  main?: boolean
  close?: boolean
}

export const BoxInfo = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 width: 250px;
 height: 250px;
 background: rgb(243, 241, 243);
`

export const ButtonStyledComponent = styled.button<ButtonStyledComponentProps>`
 width: 200px;
 height: 70px;
 border: none;
 /* background: #4D1840; */
 background: ${(props) => props.main ? '#4D1840' : '#5B2A8F'};
 border-radius: 6px;
 /* font-size: 24px; */
 font-size: ${({ close }) => close ? '20px' : '24px'};
 padding: 10px;
 color: white;
 cursor: pointer;

 &:hover{
  background: #D945DE
 }
`


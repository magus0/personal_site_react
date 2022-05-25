import styled from "styled-components";
import {GoChevronDown} from 'react-icons/go'

export const HeroContainer = styled.div`
  background: #38474e;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  position: relative;
  z-index: 1;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${props => props.image});
  background-color: #38474e;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const HeroContent = styled.div`
  position: absolute;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`

export const HeroHeader = styled.h1`
  font-size: 6rem;
  text-align: center;

  color: white;
  -webkit-text-stroke: 1.5px;
  -webkit-text-stroke-color: black;

  @media screen and (max-width: 780px){
    font-size: 5rem;
    -webkit-text-stroke: 1.2px;
    -webkit-text-stroke-color: black;
  }
`

export const HeroText = styled.p`
  font-size: 2.5rem;
  text-align: center;

  color: white;
  -webkit-text-stroke: .8px;
  -webkit-text-stroke-color: black;

  @media screen and (max-width: 780px){
    font-size: 2rem;
    -webkit-text-stroke: .7px;
    -webkit-text-stroke-color: black;
  }
`

export const HeroBtnContainer = styled.div`
  margin-top: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ChevronDown = styled(GoChevronDown)`
  margin: auto;
`
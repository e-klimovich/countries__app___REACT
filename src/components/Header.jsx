import styled from "styled-components";
import { Container } from "./Container";
import { IoMoonOutline, IoMoon } from 'react-icons/io5'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HeaderEl = styled.header`
box-shadow: var(--shadow);
background-color: var(--color-ui-base);
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 0;
`;
const Tittle = styled(Link).attrs({ to: '/' })`
color: var(--color-text);
font-size: var(--fs-sm);
font-weight: var(--fw-bold);
text-decoration: none;
`;
const ModeSwitcher = styled.div`
color: var(--color-text);
font-size: var(--fs-sm);
font-weight: var(--fw-bold);
cursor: pointer;
text-transform: capitalize;
`;

const Header = () => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])


  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Tittle>Where is the world?</Tittle>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
            <span style={{ marginLeft: '0.20rem' }}> {theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>

  )
}
export default Header
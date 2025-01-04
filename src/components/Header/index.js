import Logo from '../Logo'
import HeaderOptions from '../HeaderOptions';
import HeaderOptionsIcons from '../HeaderOptionsIcons';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderOptions />
      <HeaderOptionsIcons />
    </HeaderContainer>
  );
}
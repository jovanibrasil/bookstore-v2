import ProfileIcon from '../../images/profile.svg'
import ShoppingCartIcon from '../../images/shoppingCart.svg'
import styled from 'styled-components';

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`

const IconsList = styled.ul`
  display: flex;
  align-items: center;
`

const headerOptionsIcons = [ProfileIcon, ShoppingCartIcon];

export default function HeaderOptionsIcons() {
  return (
    <IconsList>
      {headerOptionsIcons.map(optionIcon => (
        <Icon><img src={optionIcon}></img></Icon>
      ))}
    </IconsList>
  );
}
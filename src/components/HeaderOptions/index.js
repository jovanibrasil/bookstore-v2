import styled from "styled-components";

const Option = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 120px;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

const OptionList = styled.ul`
  display: flex;
`;


const headerOptions = ['Categorias', 'Minha estante', 'Favoritos'];

export default function HeaderOptions() {
  return (
    <OptionList>
      {headerOptions.map(option => (
        <Option>{option}</Option>
      ))}
    </OptionList>
  );
}
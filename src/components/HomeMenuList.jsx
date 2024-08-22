import styled from "styled-components";

const Menu = styled.li`
  width: 120px;
  background-color: white;
  flex: 0 0 auto;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Name = styled.p`
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  line-height: 18px;
`

function HomeMenuList() {
  return (
    <Menu>
      <Img src="src\assets\images\(SubPick)ItalianBMT_Front (3)_20240205094239598.png" />
      <Name>이탈리안 비엠티 썹픽</Name>
    </Menu>
  );
}

export default HomeMenuList;

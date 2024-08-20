import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 20px;
  background-color: #f5f5f5;
`;

const Terms = styled.div`
  padding-top: 4px;
  font-size: 0.85rem;

  a {
    color: #5a5a5a;
    text-decoration: none;
    margin-right: 20px;
  }
  a:hover {
    color: black;
    text-decoration: underline;
  }
`;

const Info = styled.div`
  margin-top: 20px;
  font-size: 0.7rem;
  color: #5a5a5a;

  p {
    margin-bottom: 5px;
  }
`;

const Rights = styled.div`
  margin: 20px 0 10px 0;
  font-size: 0.7rem;
  color: #909090;
`;

function Footer() {
  return (
    <StyledFooter>
      <Terms>
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
      </Terms>
      <Info>
        <p>서울시 서초구 강남대로 535 프린스빌딩 15층</p>
        <p>대표 : INSOO CHO(인수조)</p>
        <p>전화 : 02-797-5036</p>
        <p>사업자등록번호 : 101-84-04143</p>
      </Info>
      <Rights>
        SUBWAY® is a Registered Trademark of Subway IP LLC. © 2021 Subway IP
        LLC. All Rights Reserved.
      </Rights>
    </StyledFooter>
  );
}

export default Footer;

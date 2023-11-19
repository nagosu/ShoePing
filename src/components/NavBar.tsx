import styled from 'styled-components';
import ShoePing from '../assets/logo/ShoePing.png';

const NavigationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4.2rem;
  border-bottom: 1px solid #ebe7e7;
`;

const Logo = styled.img`
  height: 2.5rem;
  margin-top: 0.4rem;
  margin-left: 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

const CategoryUl = styled.ul`
  padding: 0;
`;

const Category = styled.a`
  font-family: Pretendard;
  font-size: 1rem;
  margin: 0 1.6rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const AuthenticationDiv = styled.div``;

const Authentication = styled.a`
  font-family: Pretendard;
  font-size: 1rem;
  margin-right: 1.8rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function NavBar() {
  return (
    <NavigationBar>
      <Logo src={ShoePing} alt="ShoePing Logo" />
      <CategoryUl>
        <Category>스니커즈</Category>
        <Category>러닝화</Category>
        <Category>슬리퍼</Category>
        <Category>구두</Category>
        <Category>부츠</Category>
        <Category>샌들</Category>
        <Category>로퍼</Category>
      </CategoryUl>
      <AuthenticationDiv>
        <Authentication>로그인</Authentication>
        <Authentication>회원가입</Authentication>
      </AuthenticationDiv>
    </NavigationBar>
  );
}

export default NavBar;

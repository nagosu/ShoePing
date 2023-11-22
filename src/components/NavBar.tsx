import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
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

export type Sneakers = {
  brand: string;
  price: number;
  thumbnail: string;
  title: string;
};

function NavBar() {
  const [sneakersData, setSneakersData] = useState<Sneakers[]>([]);

  const navigate = useNavigate();

  const redirectToHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const fetchData = async () => {
      const sneakersCollectionRef = collection(db, 'sneakers');
      const querySnapshot = await getDocs(sneakersCollectionRef);

      const sneakersArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Sneakers),
      }));

      setSneakersData(sneakersArray);
    };

    fetchData();
  }, []);

  return (
    <NavigationBar>
      <Logo src={ShoePing} alt="ShoePing Logo" onClick={redirectToHome} />
      <CategoryUl>
        <Category
          onClick={() =>
            navigate('/category', { state: { sneakersProps: sneakersData[0] } })
          }
        >
          스니커즈
        </Category>

        <Category onClick={() => navigate('/category')}>러닝화</Category>
        <Category onClick={() => navigate('/category')}>슬리퍼</Category>
        <Category onClick={() => navigate('/category')}>구두</Category>
        <Category onClick={() => navigate('/category')}>부츠</Category>
        <Category onClick={() => navigate('/category')}>샌들</Category>
        <Category onClick={() => navigate('/category')}>로퍼</Category>
      </CategoryUl>
      <AuthenticationDiv>
        <Authentication>로그인</Authentication>
        <Authentication>회원가입</Authentication>
      </AuthenticationDiv>
    </NavigationBar>
  );
}

export default NavBar;

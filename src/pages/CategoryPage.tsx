import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { url } from 'inspector';
import NavBar, { Sneakers } from '../components/NavBar';
import shoes from '../assets/shoes/shoes.png';
//  import { CategoryType } from '../utils/types';

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 46rem;
  margin: 24px auto;
  text-align: left;
`;

const CategoryTitle = styled.span`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 30px;
  text-align: left;
  width: 90%;
`;

const CategoryItemContainer = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(4, 1fr); // 4개의 열
  grid-template-rows: repeat(2, 1fr); // 2개의 행
  gap: 20px; // 셀 간격 조절
`;

const CategoryContentContainer = styled(Link)`
  display: flex;
  width: 100%;
  height: 22rem;
  flex-direction: column;
  align-items: left;
  text-decoration: none;
  color: inherit;
  &:hover {
    background-color: #ddd;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CategoryImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18rem;
  background-color: #e8e8e8;
`;

const ShoesImage = styled.img`
  width: 100%;
`;

const CategoryBrandTitle = styled.span`
  font-family: Pretendard;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 3px;
  margin-left: 5px;
  color: #959595;
`;

const CategoryProductTitle = styled.span`
  font-family: Pretendard;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0;
  margin-top: 3px;
  margin-left: 5px;
`;

const CategoryPriceTitle = styled.span`
  font-family: Pretendard;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 0;
  margin-left: 5px;
  color: #959595;
`;

export default function CategoryPage() {
  const location = useLocation();
  const { sneakersProps } = location.state as { sneakersProps: Sneakers };

  return (
    <>
      <NavBar />
      <CategoryContainer>
        <CategoryTitle>스니커즈</CategoryTitle>
        <CategoryItemContainer>
          <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={sneakersProps.thumbnail} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>{sneakersProps.brand}</CategoryBrandTitle>
            <CategoryProductTitle>{sneakersProps.title}</CategoryProductTitle>
            <CategoryPriceTitle>₩ {sneakersProps.price}</CategoryPriceTitle>
          </CategoryContentContainer>
          <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={shoes} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>NIKE</CategoryBrandTitle>
            <CategoryProductTitle>NIKE W DUNK LOW PRM</CategoryProductTitle>
            <CategoryPriceTitle>₩ 139,000</CategoryPriceTitle>
          </CategoryContentContainer>
          <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={shoes} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>NIKE</CategoryBrandTitle>
            <CategoryProductTitle>NIKE W DUNK LOW PRM</CategoryProductTitle>
            <CategoryPriceTitle>₩ 139,000</CategoryPriceTitle>
          </CategoryContentContainer>
          <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={shoes} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>NIKE</CategoryBrandTitle>
            <CategoryProductTitle>NIKE W DUNK LOW PRM</CategoryProductTitle>
            <CategoryPriceTitle>₩ 139,000</CategoryPriceTitle>
          </CategoryContentContainer>
          <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={shoes} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>NIKE</CategoryBrandTitle>
            <CategoryProductTitle>NIKE W DUNK LOW PRM</CategoryProductTitle>
            <CategoryPriceTitle>₩ 139,000</CategoryPriceTitle>
          </CategoryContentContainer>
          <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={shoes} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>NIKE</CategoryBrandTitle>
            <CategoryProductTitle>NIKE W DUNK LOW PRM</CategoryProductTitle>
            <CategoryPriceTitle>₩ 139,000</CategoryPriceTitle>
          </CategoryContentContainer>
          <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={shoes} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>NIKE</CategoryBrandTitle>
            <CategoryProductTitle>NIKE W DUNK LOW PRM</CategoryProductTitle>
            <CategoryPriceTitle>₩ 139,000</CategoryPriceTitle>
          </CategoryContentContainer>
          <CategoryContentContainer to="/detail">
            <CategoryImageContainer>
              <ShoesImage src={shoes} alt="shoes image" />
            </CategoryImageContainer>
            <CategoryBrandTitle>NIKE</CategoryBrandTitle>
            <CategoryProductTitle>NIKE W DUNK LOW PRM</CategoryProductTitle>
            <CategoryPriceTitle>₩ 139,000</CategoryPriceTitle>
          </CategoryContentContainer>
        </CategoryItemContainer>
      </CategoryContainer>
    </>
  );
}

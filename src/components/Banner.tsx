import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Img = styled.img`
  width: 100%;
  height: 28.375rem;
`;

const setting = {
  dots: true,
  infinity: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility: true,
  arrows: false,
};

function Banner({ BannerImg }) {
  return (
    <div>
      <Slider {...setting}>
        {BannerImg.map((item, index) => (
          <div key={index}>
            <Img src={item} alt="배너 이미지" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;

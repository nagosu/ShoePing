import NavBar from '../components/NavBar';
import Banner from '../components/Banner';

import Banner1 from '../assets/main/Banner1.png';
import Banner2 from '../assets/main/Banner2.png';
import Banner3 from '../assets/main/Banner3.png';
import Banner4 from '../assets/main/Banner4.png';

const CustomBanner = [Banner1, Banner2, Banner3, Banner4];

function MainPage() {
  return (
    <div>
      <NavBar />
      <Banner BannerImg={CustomBanner} />
    </div>
  );
}

export default MainPage;

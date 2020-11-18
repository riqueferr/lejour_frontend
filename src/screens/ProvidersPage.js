import '../App.scss';
import Navbar from '../components/Navbar';
import MainProviders from '../components/MainProviders';

function mainProviders() {
  return (
    <div>
      <Navbar />
      <MainProviders />
    </div>
  );
}

export default mainProviders;
import '../App.scss';
import Navbar from '../components/Navbar';
import Main from '../components/MainInvoices'; 


function invoicesPage() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default invoicesPage;
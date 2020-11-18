import '../App.scss';
import Navbar from '../components/Navbar';
import MainAppointments from '../components/MainAppointments';

function mainAppointments() {
  return (
    <div>
      <Navbar />
      <MainAppointments />
    </div>
  );
}

export default mainAppointments;
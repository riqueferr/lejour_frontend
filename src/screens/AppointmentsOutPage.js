import '../App.scss';
import Navbar from '../components/Navbar';
import MainAppointments from '../components/MainAppointmentsOut';

function mainAppointmentsOut() {
  return (
    <div>
      <Navbar />
      <MainAppointments />
    </div>
  );
}

export default mainAppointmentsOut;
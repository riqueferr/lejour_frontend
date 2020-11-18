import '../App.scss';
import Navbar from '../components/Navbar';
import MainAppointments from '../components/MainAppointmentsSet';

function mainAppointmentsSet() {
  return (
    <div>
      <Navbar />
      <MainAppointments />
    </div>
  );
}

export default mainAppointmentsSet;
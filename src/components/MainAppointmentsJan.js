import React from 'react';
import GraphOne from './ChartAppointmentsJan';

function Main() {
    return (
        <main>
        <div className="big-little-box">


            <div className="data-box">
                <form>
                    <select id="year" name="country">
                        <option value="number">2020</option>
                        <option value="number">2019</option>
                        <option value="number">2018</option>
                    </select>
                </form>
                <div class="months">
                <ul className="lista1">
                            <li className="selecaoMenu"><a href="/appointmentsJan">jan</a></li>
                            <li><a href="/appointmentsFev">fev</a></li>
                            <li><a href="/appointmentsMar">mar</a></li>
                            <li><a href="/appointmentsAbr">abr</a></li>
                            <li><a href="/appointmentsMai">mai</a></li>
                            <li><a href="/appointmentsJun">jun</a></li>
                        </ul>
                        <ul className="lista2">
                            <li><a href="/appointmentsJul">jul</a></li>
                            <li><a href="/appointmentsAgo">ago</a></li>
                            <li><a href="/appointmentsSet">set</a></li>
                            <li><a href="/appointmentsOut">out</a></li>
                            <li><a href="#">nov</a></li>
                            <li><a href="#">dez</a></li>
                        </ul>
                </div>
            </div>


            <div className="title1-box">
                    <p>Total Appointments (Qtd) - Janeiro</p>
                </div>
                <div className="first-part">
                    <div className="box-one">
                        <p>Total Appointments</p>
                        <h2>0</h2>
                    </div>
                    <div className="box-two">
                        <p>Total Confirmados</p>
                        <h2>0</h2>
                    </div>
                    <div className="box-three">
                        <p>Total Visitados</p>
                        <h2>0</h2>
                    </div>
                </div>



                <div className="title-box-2">
                    <p>KPI Appointments (Qtd) - Janeiro</p>
                </div>
                <div className="secound-part">
                    <div className="grafico-1">
                        <GraphOne />
                    </div>
                </div>



                <div className="title-box-3">
                    <p>Total Appointments (Qtd) - Janeiro</p>
                </div>
                <div className="first-part-2">
                    <div className="box-one-2">
                        <p>Total Confirmados</p>
                        <h2>0</h2>
                    </div>
                    <div className="box-two-2">
                        <p>Total Cancelados</p>
                        <h2>0</h2>
                    </div>
                </div>


        </div>
    </main>
    );
}

export default Main;




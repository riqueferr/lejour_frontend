import React from 'react';
import GraphOne from './ChartAppointments';

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
                        <li><a href="#">jan</a></li>
                        <li><a href="#">fev</a></li>
                        <li><a href="#">mar</a></li>
                        <li><a href="#">abr</a></li>
                        <li><a href="#">mai</a></li>
                        <li><a href="#">jun</a></li>
                    </ul>
                    <ul className="lista2">
                        <li><a href="#">jul</a></li>
                        <li><a href="#">ago</a></li>
                        <li><a href="#">set</a></li>
                        <li><a href="#">out</a></li>
                        <li><a href="#">nov</a></li>
                        <li><a href="#">dez</a></li>
                    </ul>
                </div>
            </div>


            <div className="title1-box">
                <p>Total Appointments (R$)</p>
            </div>
            <div className="first-part">
                <div className="box-one">
                    <p>Total Appointments</p>
                    <h2>R$ 35.750</h2>
                </div>
                <div className="box-two">
                    <p>Total Pendentes</p>
                    <h2>R$ 11.200</h2>
                </div>
                <div className="box-three">
                    <p>Total Aprovados</p>
                    <h2>R$ 18.678</h2>
                </div>
                <div className="box-four">
                    <p>Total Cancelados</p>
                    <h2>R$ 8.775</h2>
                </div>
            </div>



            <div className="title-box-2">
                <p>Resumo Total Appointments/Ano (R$)</p>
            </div>
            <div className="secound-part">
                <div className="grafico-1">
                    <GraphOne />
                </div>
            </div>



            <div className="title-box-3">
                <p>Total Appointments (Qtd)</p>
            </div>
            <div className="first-part-2">
                <div className="box-one-2">
                    <p>Total Appointments</p>
                    <h2>100</h2>
                </div>
                <div className="box-two-2">
                    <p>Total Pendentes</p>
                    <h2>20</h2>
                </div>
                <div className="box-three-2">
                    <p>Total Aprovados</p>
                    <h2>70</h2>
                </div>
                <div className="box-four-2">
                    <p>Total Cancelados</p>
                    <h2>10</h2>
                </div>
            </div>


        </div>
    </main>
    );
}

export default Main;




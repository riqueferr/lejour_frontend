import React from 'react';
import GraphOne from './ChartProviders';

function MainProviders() {
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


                <div className="title-box-3">
                    <p>Total Providers (Qtd) - 2020</p>
                </div>
                <div className="first-part-2">
                    <div className="box-one-2">
                        <p>Total Providers</p>
                        <h2>94</h2>
                    </div>
                    {/* <div className="box-two-2">
                        <p>Total Pendentes</p>
                        <h2>20</h2>
                    </div> */}
                    <div className="box-three-2">
                        <p>Provider mais escolhido (ID)</p>
                        <h2>268</h2>
                    </div>
                    {/* <div className="box-four-2">
                        <p>Total Cancelados</p>
                        <h2>10</h2>
                    </div> */}
                </div>

                <div className="title-box-2">
                    <p>KPI Category Providers - 2020</p>
                </div>
                <div className="secound-part">
                    <div className="grafico-1">
                        <GraphOne />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainProviders;




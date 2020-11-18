import React from 'react';
import GraphOne from './ChartWeedings';

function mainWeedings() {
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
                <p>Weddings Styles - 2020</p>
            </div>
            <div className="first-part">
                <div className="box-one">
                    <p>Total Weddings</p>
                    <h2>3.761</h2>
                </div>
                <div className="box-two">
                    <p>Total Clássico</p>
                    <h2>2.221</h2>
                </div>
                <div className="box-three">
                    <p>Total Rústico</p>
                    <h2>1.258</h2>
                </div>
                <div className="box-four">
                    <p>Total Moderno</p>
                    <h2>282</h2>
                </div>
            </div>



            <div className="title-box-2">
                <p>KPI Weddings Style  (%) - 2020</p>
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

export default mainWeedings;




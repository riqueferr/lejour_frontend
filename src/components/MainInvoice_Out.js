import React from 'react';
import GraphOne from './ChartInvoices';

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
                        <li><a href="/invoiceJan">jan</a></li>
                        <li><a href="/invoiceFev">fev</a></li>
                        <li><a href="/invoiceMar">mar</a></li>
                        <li><a href="/invoiceAbr">abr</a></li>
                        <li><a href="/invoiceMai">mai</a></li>
                        <li><a href="/invoiceJun">jun</a></li>
                    </ul>
                    <ul className="lista2">
                        <li><a href="/invoiceJul">jul</a></li>
                        <li><a href="/invoiceAgo">ago</a></li>
                        <li><a href="/invoiceSet">set</a></li>
                        <li><a href="/invoiceOut">out</a></li>
                        <li><a href="/invoiceNov">nov</a></li>
                        <li><a href="/invoiceDez">dez</a></li>
                    </ul>
                </div>
            </div>


            <div className="title1-box">
                <p>Total Invoices (R$)</p>
            </div>
            <div className="first-part">
                <div className="box-one">
                    <p>Total Invoices</p>
                    <h2>R$ 559.019,00</h2>
                </div>
                {/* <div className="box-three">
                    <p>Total Pendentes</p>
                    <h2>R$ </h2>
                </div> */}
                <div className="box-two">
                    <p>Total Aprovados</p>
                    <h2> R$ 495.299,00</h2>
                </div>
                <div className="box-three">
                    <p>Total Cancelados</p>
                    <h2> R$ 63.720,00</h2>
                </div>
            </div>



            <div className="title-box-2">
                <p>Resumo Total Invoices/Ano (R$)</p>
            </div>
            <div className="secound-part">
                <div className="grafico-1">
                    <GraphOne />
                </div>
            </div>



            <div className="title-box-3">
                <p>Total Invoices (Qtd)</p>
            </div>
            <div className="first-part-2">
            <div className="box-one-2">
                    <p>Total Invoices</p>
                    <h2>42</h2>
                </div>
                {/* <div className="box-two-2">
                    <p>Total Pendentes</p>
                    <h2>20</h2>
                </div> */}
                <div className="box-two-2">
                    <p>Total Aprovados</p>
                    <h2>33</h2>
                </div>
                <div className="box-three-2">
                    <p>Total Cancelados</p>
                    <h2>9</h2>
                </div>
            </div>


        </div>
    </main>
    );
}

export default Main;




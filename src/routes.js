import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InvoicesPage from './screens/InvoicesPage';
import ProvidersPage from './screens/ProvidersPage';
import WeedingsPage from './screens/WeedingsPage';
import AppointmentsPage from './screens/AppointmentsPage';
import LoginPage from './screens/Login';
import InvoiceJanPage from './screens/InvoiceJanPage';
import InvoiceFevPage from './screens/InvoiceFevPage';
import InvoiceMarPage from './screens/InvoiceMarPage';
import InvoiceAbrPage from './screens/InvoiceAbrPage';
import InvoiceMaiPage from './screens/InvoiceMaiPage';
import InvoiceJunPage from './screens/InvoiceJunPage';
import InvoiceJulPage from './screens/InvoiceJulPage';
import InvoiceAgoPage from './screens/InvoiceAgoPage';
import InvoiceSetPage from './screens/InvoiceSetPage';
import InvoiceOutPage from './screens/InvoiceOutPage';



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/' component={InvoicesPage} />
                <Route exact path='/providers' component={ProvidersPage} />
                <Route exact path='/appointments' component={AppointmentsPage} />
                <Route exact path='/weddings' component={WeedingsPage} />
                <Route exact path='/invoiceJan' component={InvoiceJanPage} />
                <Route exact path='/invoiceFev' component={InvoiceFevPage} />
                <Route exact path='/invoiceMar' component={InvoiceMarPage} />
                <Route exact path='/invoiceAbr' component={InvoiceAbrPage} />
                <Route exact path='/invoiceMai' component={InvoiceMaiPage} />
                <Route exact path='/invoiceJun' component={InvoiceJunPage} />
                <Route exact path='/invoiceJul' component={InvoiceJulPage} />
                <Route exact path='/invoiceAgo' component={InvoiceAgoPage} />
                <Route exact path='/invoiceSet' component={InvoiceSetPage} />
                <Route exact path='/invoiceOut' component={InvoiceOutPage} />


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
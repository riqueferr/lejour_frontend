import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InvoicesPage from './screens/InvoicesPage';
import ProvidersPage from './screens/ProvidersPage';
import WeedingsPage from './screens/WeedingsPage';
import AppointmentsPage from './screens/AppointmentsPage';
import LoginPage from './screens/Login';
import InvoiceJanPage from './screens/InvoiceJanPage';
import InvoiceFevPage from './screens/InvoiceFevPage';


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


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
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
import AppointmentsJanPage from './screens/AppointmentsJanPage';
import AppointmentsFevPage from './screens/AppointmentsFevPage';
import AppointmentsMarPage from './screens/AppointmentsMarPage';
import AppointmentsAbrPage from './screens/AppointmentsAbrPage';
import AppointmentsMaiPage from './screens/AppointmentsMaiPage';
import AppointmentsJunPage from './screens/AppointmentsJunPage';
import AppointmentsJulPage from './screens/AppointmentsJulPage';
import AppointmentsAgoPage from './screens/AppointmentsAgoPage';
import AppointmentsSetPage from './screens/AppointmentsSetPage';
import AppointmentsOutPage from './screens/AppointmentsOutPage';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route exact path='/invoices' component={InvoicesPage} />
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
                <Route exact path='/appointmentsJan' component={AppointmentsJanPage} />
                <Route exact path='/appointmentsFev' component={AppointmentsFevPage} />
                <Route exact path='/appointmentsMar' component={AppointmentsMarPage} />
                <Route exact path='/appointmentsAbr' component={AppointmentsAbrPage} />
                <Route exact path='/appointmentsMai' component={AppointmentsMaiPage} />
                <Route exact path='/appointmentsJun' component={AppointmentsMaiPage} />
                <Route exact path='/appointmentsJul' component={AppointmentsJunPage} />
                <Route exact path='/appointmentsAgo' component={AppointmentsJulPage} />
                <Route exact path='/appointmentsAgo' component={AppointmentsAgoPage} />
                <Route exact path='/appointmentsAgo' component={AppointmentsSetPage} />
                <Route exact path='/appointmentsAgo' component={AppointmentsOutPage} />


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
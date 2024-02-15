import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './bus/about-us/about-us.component';
import { BookingSuccessComponent } from './bus/booking-success/booking-success.component';
import { BusHireSuccessComponent } from './bus/bus-hire-success/bus-hire-success.component';
import { BusHireComponent } from './bus/bus-hire/bus-hire.component';
import { BushireReceiptComponent } from './bus/bushire-receipt/bushire-receipt.component';
import { CancelRecordSuccessComponent } from './bus/cancel-record-success/cancel-record-success.component';
import { CancelRecordUnsuccessComponent } from './bus/cancel-record-unsuccess/cancel-record-unsuccess.component';
import { CancellationComponent } from './bus/cancellation/cancellation.component';
import { ContactUsComponent } from './bus/contact-us/contact-us.component';
import { CreditPaymentComponent } from './bus/credit-payment/credit-payment.component';
import { CreditPaymentLoginComponent } from './bus/credit-payment-login/credit-payment-login.component';
import { FeedbackComponent } from './bus/feedback/feedback.component';
import { FeedbackSubmitedComponent } from './bus/feedback-submited/feedback-submited.component';
import { GalleryComponent } from './bus/gallery/gallery.component';
import { HomeComponent } from './bus/home/home.component';
import { LoginPaymetComponent } from './bus/login-paymet/login-paymet.component';
import { NetBankingPaymetLoginComponent } from './bus/net-banking-paymet-login/net-banking-paymet-login.component';
import { ReceiptComponent } from './bus/receipt/receipt.component';
import { RecordNotFoundComponent } from './bus/record-not-found/record-not-found.component';
import { SearchDoneComponent } from './bus/search-done/search-done.component';
import { ShowbookComponent } from './bus/showbook/showbook.component';
import { TermsAndConditionsComponent } from './bus/terms-and-conditions/terms-and-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BookingSuccessComponent,
    BusHireSuccessComponent,
    BusHireComponent,
    BushireReceiptComponent,
    CancelRecordSuccessComponent,
    CancelRecordUnsuccessComponent,
    CancellationComponent,
    ContactUsComponent,
    CreditPaymentComponent,
    CreditPaymentLoginComponent,
    FeedbackComponent,
    FeedbackSubmitedComponent,
    GalleryComponent,
    HomeComponent,
    LoginPaymetComponent,
    NetBankingPaymetLoginComponent,
    ReceiptComponent,
    RecordNotFoundComponent,
    SearchDoneComponent,
    ShowbookComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

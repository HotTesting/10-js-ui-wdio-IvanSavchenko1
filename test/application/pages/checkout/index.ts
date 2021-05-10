import { CheckoutOptionsComponent } from "./components/steps/1.checkoutOptions.components";
import { BilingDetailsComponent } from "./components/steps/2.billingDetails.components";
import { DeliveryDetailsComponent} from "./components/steps/3.deliverDetails.component";
import { DeliveryMethodComponent } from "./components/steps/4.delieveryMethod.components";
import { PaymentMethodComponent } from "./components/steps/5.paymentMethod.components";
import { ConfirmOrderComponent } from "./components/steps/6.confirmOrder.components";


export class CheckoutPage {

    get checkoutOptions () {
        return new CheckoutOptionsComponent();
    }

    get billingDetails () {
        return new BilingDetailsComponent();
    }

    get deliveryDetails () {
        return new DeliveryDetailsComponent;
    }

    get deliveryMethod () {
        return new DeliveryMethodComponent();
    }

    get paymentMethod () {
        return new PaymentMethodComponent();
    }

    get confirmOrder () {
        return new ConfirmOrderComponent();
    }


    open() {
        browser.url('/index.php?route=checkout/checkout')
        expect($('#content h1')).toHaveTextContaining('Checkout',{wait:2000, interval:200})
        browser.pause(500)
    }

}
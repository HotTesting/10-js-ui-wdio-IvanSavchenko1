import {HomePage} from "./pages/Home.page";
import {ProductCategoryPage} from "./pages/ProductCategory.page";
import {CheckoutPage} from "./pages/checkout/index";
import {ConfirmationPage} from "./pages/checkout/confirmation.page";
import {ShoppingCartPage} from "./pages/ShoppingCart.page";
import {ComparisonPage} from "./pages/Comparison.page";
import {LoginPage} from "./pages/Login.page";
import {WishlistPage} from "./pages/Wishlist.page";

export class App {
    home: HomePage
    productCategory: ProductCategoryPage
    checkout: CheckoutPage
    confirmation: ConfirmationPage
    shoppingCart: ShoppingCartPage
    comparison: ComparisonPage
    loginPage: LoginPage
    wishlist: WishlistPage

    constructor() {
        this.home = new HomePage()
        this.productCategory = new ProductCategoryPage()
        this.checkout = new CheckoutPage()
        this.confirmation = new ConfirmationPage()
        this.shoppingCart = new ShoppingCartPage()
        this.comparison = new ComparisonPage()
        this.loginPage = new LoginPage()
        this.wishlist = new WishlistPage()
    }
}
export class AlertMessages {
    private get root(): WebdriverIO.Element {
        return $('.alert')
    }

    openComparison(){
        const openComparisonButton = this.root.$('a=product comparison')
        expect(openComparisonButton).toBeVisible({ message: 'Expected comparison in alert to be visible' })
        openComparisonButton.click()
    }
    openWishlist(){
        const openWishlist = this.root.$('a=wish list')
        expect(openWishlist).toBeVisible({ message: 'Expected Wish list in alert to be visible' })
        openWishlist.click()
    }
}
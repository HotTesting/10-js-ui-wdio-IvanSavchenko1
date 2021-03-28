export class WishlistPage{
    private get root(): WebdriverIO.Element {
        return $('#content')
    }
    removeFromWishList(){
        const removeFromWishList = this.root.$('.btn-danger')
        expect(removeFromWishList).toBeVisible({message: 'Expected remove button to be visible'})
        removeFromWishList.click()
    }
    isEmpty(): boolean {
        return $('#content p').getText() === 'Your wish list is empty.'
    }
}

export class ComparisonPage {
    private get root(): WebdriverIO.Element {
        return $('#content')
    }
    removeFromComparison(){
        const removeButton = $('a=Remove')
        expect(removeButton).toBeVisible({message: 'Expected Remove button to be visible'})
        removeButton.click()
    }
    isEmpty(): boolean {
        return this.root.$('p').getText() === 'You have not chosen any products to compare.'
    }
}
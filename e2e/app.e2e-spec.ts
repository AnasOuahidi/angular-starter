import {AppPage} from './app.po';

describe('App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should show the page', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toContain('!');
    });
});

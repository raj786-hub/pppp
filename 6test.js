import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://dev-marketplace.claims-mp-dev.dev.us.insurance.dxc.com/claims/`;

test('New Test', async t => {
    await t
        .click(Selector('header a').withText('LOGIN').nth(1))
        .typeText('#userName', 'rajkumar2')
        .typeText('#userPassword', '123@Mummy')
        .click(Selector('button').withText('SIGN IN'))
        .click(Selector('header a').withText('News & Events'))
        .click(Selector('#mainContent a').withText('Conference Presentations'))
        .click(Selector('#mainContent a').withText('Press Release News'))
        .click(Selector('#mainContent a').withText('Webinars'))
        .click(Selector('#mainContent a').withText('Newsletter'))
        .click(Selector('header a').withText('LOGOUT').nth(1));
});

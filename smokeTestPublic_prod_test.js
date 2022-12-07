Feature('etc');

Scenario('Переход на страницу "Расписание"',  ({ I }) => {
    I.amOnPage('https://med.studio/');
    I.click('Расписание');
    I.wait(1);
    I.see('РАСПИСАНИЕ', 'h1');
    I.see('НМО', '.el-checkbox__label');
    I.seeElement({css: 'input[placeholder="Фильтр по специальности"]'});
    I.seeElement({css: 'input[placeholder="Поиск"]'});
    I.wait(1);
    I.seeElement({css: '.schedule-item__link'});
    I.see('Показать еще', '.link-btn');
    I.seeElement({css: '.startBtn__img'});
});
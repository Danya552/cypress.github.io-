describe ( 'Проверка ', function () {

    it('Проверяем покупку аватара', function () {
        cy.visit('https://pokemonbattle.ru/'); 
        cy.get('#k_email').type('USER_LOGIN');
        cy.get('#k_password').type('USER_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.intercept('GET', 'pokemons?sort=asc_date&status=1&page=1').as('getUsers'); // Перехватываем запрос и присваиваем ему алиас
        cy.wait('@getUsers').then((interception) => { // Ожидаем завершения запроса
        expect(interception.response.statusCode).to.eq(200); // Проверяем статус ответа
        })
        cy.get('.header_card_trainer').click();
        cy.get('[data-qa="shop"]').click();
        cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
        cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
        cy.get('.card_csv').type('125');                             // вводим CVV карты
        cy.get('.card_date').type('1226');                           // вводим срок действия карты
        cy.get('.card_name').type('NAME');                           // вводим имя владельца действия карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
        cy.wait(15);
        cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
        cy.contains('Покупка прошла успешно').should('be.visible'); 
        

        
    })
})
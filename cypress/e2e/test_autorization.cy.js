describe ( 'Проверка формы Логина и Пароля', function () {
   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio');                                                       //Открываем сайт с формой
        cy.get('#mail').type('german@dolnikov.ru');                                                //Вводим правильный Логин
        cy.get('#pass').type('iLoveqastudio1');                                                    //Вводим правильный пароль
        cy.get('#loginButton').click();                                                            //Нажимаем войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click(); 
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    it('Неверный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio');                                                       //Открываем сайт с формой
        cy.get('#mail').type('germa@dolnikov.ru');                                                 //Вводим правильный Логин
        cy.get('#pass').type('iLovqastudio1');                                                     //Вводим правильный пароль
        cy.get('#loginButton').click();                                                            //Нажимаем войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio');                                                       //Открываем сайт с формой
        cy.get('#mail').type('german@dolnikov.ru');                                                //Вводим правильный Логин
        cy.get('#pass').type('iLovqastudio1');                                                     //Вводим неправильный пароль
        cy.get('#loginButton').click();                                                            //Нажимаем войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio');                                                       //Открываем сайт с формой
        cy.get('#mail').type('germandolnikov.ru');                                                 //Вводим невалидный Логин
        cy.get('#pass').type('iLoveqastudio1');                                                    //Вводим правильный пароль
        cy.get('#loginButton').click();                                                            //Нажимаем войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Проверка приведения к строчнм буквам', function () {
        cy.visit('https://login.qa.studio');                                                       //Открываем сайт с формой
        cy.get('#mail').type('GerMan@Dolnikov.ru');                                                //Вводим Логин
        cy.get('#pass').type('iLoveqastudio1');                                                    //Вводим правильный пароль
        cy.get('#loginButton').click();                                                            //Нажимаем войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

})

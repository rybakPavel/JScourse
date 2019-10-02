function myApp(name, age) {
    alert(`Здарова, щеглы! Меня зовут ${name}, мне ${age} лет и это мой первый говнокод.`);

    
    checkAge();
    showSkills();
    calculator();


    function showSkills() {
        let skills = [' вождение', ' продвинутая эксплуатация ПК', ' отыгрыш ролей', ' мелкий бытовой ремонт'];
        alert(`\n Я владею следующими навыками: ${skills}`);
    }


    function checkAge() {
        let age = prompt('Укажи свой возраст', '');
            if (age < 18) {
                alert('Маловат ты еще!');
            } else if (age > 18) {
                alert('Проходи!');
            } else {
                alert('Хуита какая-то, вводи по-новой!');
            }
        return age;
    }


    function calculator() {
        let num = prompt('Укажи число, которое следует возвести в квадрат.', '');
        alert(num * num);
    }
}

myApp('Павел', 31);
function myApp(name, age) {
    alert(`Привет, меня зовут ${name}, мне ${age} и это моя первая программа.`);
    
    showSkills();
    checkAge();
    calculator();


    function showSkills() {
        document.write('Я владею следующими навыками: <br/>');
        let skills = ['вождение <br/>', 'продвинутая эксплуатация ПК <br/>', 'отыгрыш ролей <br/>', 'мелкий бытовой ремонт <br/>'];
        for (let i = 0; i < skills.length; i++) {
            document.write(skills[i]);
        }
    }


    function checkAge() {
        let age = prompt('Укажи свой возраст', '');
            if (age < 18) {
                alert('Маловат ты еще!');
            } else if (age > 18) {
                alert('Проходи!');
            } else {
                alert('Значение должно быть числовым.');
            }
    }


    function calculator() {
        let num = prompt('Укажи число, которое следует возвести в квадрат.', '');
        console.log(num * num);
    }
}

myApp('Павел', 31);
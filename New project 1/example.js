function myFirstApp(name, age) {

    alert("Привет, меня зовут " + name + " и это моя первая программа");
    
    
    
    function showSkills(){
    
    let skills = [' вождение', ' продвинутая эксплуатация ПК', ' отыгрыш ролей', ' мелкий бытовой ремонт'];
    
    
    
    for(let i = 0; i < skills.length; i++) {
    
    // вывести на страницу в столбик "Я владею [...]" с перечислением своих навыков
    
    alert("Я владею "+ skills[i]+"<br>")
    
    }
    
    }
    
    showSkills();
    
    
    
    function checkAge(age) {
    
    if(age > 18) {
    
    alert("You can enter");// Оповестить пользователя
    
    } else {
    
    alert("Sorry, you must wait "+(18-age)+" years more!" );// Оповестить пользователя
    
    }
    
    }
    
    checkAge();
    
    
    
    function calcPow(num) {
    
    console.log(num*num);// вывод в консоль квадрата числа
    
    }
    
    calcPow(4)
    
    }
    
    
    
    myFirstApp("John", 32);
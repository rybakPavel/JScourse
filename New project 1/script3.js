let answers = [],
    questions = [
        'Первый вопрос',
        'Второй вопрос',
        'Третий вопрос'
    ];


let num = 0;
while (num < questions.length) {
    answers[num] = prompt(questions[num], '');
    num++;
}


document.write(answers);
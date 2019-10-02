let answers = [],
    questions = [
        'Первый вопрос',
        'Второй вопрос',
        'Третий вопрос'
    ];


let num = 0;
do {
    answers[num] = prompt(questions[num], '');
    num++;
} while (num < questions.length);

document.write(answers);
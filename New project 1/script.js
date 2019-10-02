let answers = [],
    questions = [
        'Первый вопрос',
        'Второй вопрос',
        'Третий вопрос'
    ];


for (let i = 0; i < questions.length; i++) {
    answers[i] = prompt(questions[i], '');
}


document.write(answers);
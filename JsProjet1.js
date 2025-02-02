function calculateScore() {
    const quizForm = document.getElementById('quiz-form');
    const formData = new FormData(quizForm);
    let score = 0;

    if (formData.get('q1') === 'Paris') {
        score++;
    }
    if (formData.get('q2') === 'Bleu') {
        score++;
    }
    if (formData.get('q3') === '4') {
        score++;
    }

    alert(`Votre score est de ${score} sur 3.`);
}

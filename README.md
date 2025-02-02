<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz de Questions</title>
  <link rel="stylesheet" href="styleProjet1.css">
</head>
<body>
  <header>
    <P>Attention une mauvaise répondue c'est -1</P>
    <P>Vous avez 30 minutes pour répondre aux questions</P>
    <p>BONNE CHANCE !</p>
  </header>
  <div class="quiz-container">
    <h1>Quiz de questions</h1>

    <form id="quiz-form">
      <div class="question">
        <label>question 1 ?</label><br>
        <input type="radio" name="q1" value="Paris"> Touba <br>
        <input type="radio" name="q1" value="Londres"> Louga <br>
        <input type="radio" name="q1" value="Berlin"> Diokoul
      </div>
        <br>
      <div class="question">
        <label>question 2 ?</label><br>
        <input type="radio" name="q2" value="Bleu"> Bleu <br>
        <input type="radio" name="q2" value="Rouge"> Rouge <br>
        <input type="radio" name="q2" value="Vert"> Vert
      </div>
          <br>
      <div class="question">
        <label> question 3 ?</label><br>
        <input type="radio" name="q3" value="5"> 5 <br>
        <input type="radio" name="q3" value="6"> 6 <br>
        <input type="radio" name="q3" value="7"> 7 
      </div>

      <button type="button" id="submit-btn">Soumettre</button>
    </form>
  </div>

  <script src="JsProjet1.js"></script>
</body>
</html>



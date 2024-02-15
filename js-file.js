<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Calculator</title>
    <script src="js-file.js" defer></script>
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="wrapper">
      <div class="screen">0</div>
      <div class="column_wrapper">
        <div class="left_column">
          <div class="other_buttons">
            <button class="clear">C</button>
            <button class="toggle_num_type">+/-</button>
            <button class="percentage">%</button>
          </div>
          <div class="numbers">
            <button class="number">7</button>
            <button class="number">8</button>
            <button class="number">9</button>
            <button class="number">4</button>
            <button class="number">5</button>
            <button class="number">6</button>
            <button class="number">1</button>
            <button class="number">2</button>
            <button class="number">3</button>
            <button class="zero number">0</button>
            <button class="decimal">.</button>
          </div>
        </div>
        <div class="right_column">
          <button class="operation">/</button>
          <button class="operation">*</button>
          <button class="operation">-</button>
          <button class="operation">+</button>
          <button class="equals_to">=</button>
        </div>
      </div>
    </div>
  </body>
</html>

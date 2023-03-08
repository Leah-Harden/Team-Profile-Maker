// TODO: Import the parent class


askToPlayAgain() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "choice",
        message: "Play Again?"
      },
      {
        type: "confirm",
        name: "choice",
        message: "Play Again?"
      },
    ])
    .then(val => {

      if (val.choice) {
        this.play();
      } else {
        this.quit();
      }
    });
}

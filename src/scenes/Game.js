import {Trash} from  '../GameObjects/Trash.js'; //can copy the path
import {TrashCan} from '../GameObjects/TrashCan.js';

export class Game extends Phaser.Scene {
    constructor() {
        super('Game');

    }

    create() {
        this.problems = [
          {question: "3+4", answer: 7},
          {question: "5+2", answer: 7},
          {question: "10+10", answer: 20},
          {question: "12+6", answer: 18},
          {question: "11+5", answer: 16},
          {question: "4+4", answer: 8},
          {question: "5+5", answer: 10},
          {question: "3+3", answer: 6}
        ]; //2D array for questions and their respective answers

      this.add.image(400, 300, 'space');
      this.add.image(400, 0, 'dump').setScale(0.60);
      this.add.image(400, 650, 'dirt').setScale(0.40);

      //this.add.image(5, 350,'trash').setScale(4).setOrigin(0, 0);
            //an added image DOES NOT HAVE a physics body!!!
    
    /*let i = 0
    this.trashCans.children.iterate(child =>{
      child.setScale(3);
      child.setInteractive();   

      child.setSize(40, 20); //changes hit box size(width, height)
      child.setOffset(15,15); // changes hit box position around sptire
      child.refreshBody(); // required for static bodies so they know its being changed
   })*/
      this.problem1 = Phaser.Utils.Array.GetRandom(this.problems);
          Phaser.Utils.Array.Remove(this.problems, this.problem1);

      this.problem2 = Phaser.Utils.Array.GetRandom(this.problems);
          Phaser.Utils.Array.Remove(this.problems, this.problem2);

      this.problem3 = Phaser.Utils.Array.GetRandom(this.problems);
          Phaser.Utils.Array.Remove(this.problems, this.problem3);

      this.problem4 = Phaser.Utils.Array.GetRandom(this.problems);
          Phaser.Utils.Array.Remove(this.problems, this.problem4);

      this.problem5 = Phaser.Utils.Array.GetRandom(this.problems);
          Phaser.Utils.Array.Remove(this.problems, this.problem5);

      //createes and array of randomized problems
      this.possibleQuestions = [
        this.problem1,
        this.problem2,
        this.problem3,
        this.problem4,
        this.problem5
      ]

      //each question is one of the random problems
      this.question1 = Phaser.Utils.Array.GetRandom(this.possibleQuestions);
        Phaser.Utils.Array.Remove(this.possibleQuestions, this.question1);

      this.question2 = Phaser.Utils.Array.GetRandom(this.possibleQuestions);
        Phaser.Utils.Array.Remove(this.possibleQuestions, this.question2);

      this.question3 = Phaser.Utils.Array.GetRandom(this.possibleQuestions);
        Phaser.Utils.Array.Remove(this.possibleQuestions, this.question3);

      this.question4 = Phaser.Utils.Array.GetRandom(this.possibleQuestions);
        Phaser.Utils.Array.Remove(this.possibleQuestions, this.question4);

      this.question5 = Phaser.Utils.Array.GetRandom(this.possibleQuestions);
        Phaser.Utils.Array.Remove(this.possibleQuestions, this.question5); 

      // creates an array of randomized answers
      this.possibleAnswers = [
        this.problem1,
        this.problem2,
        this.problem3,
        this.problem4,
        this.problem5
      ]

      //assign a random answer to one of the answer#
      this.answer1 = Phaser.Utils.Array.GetRandom(this.possibleAnswers);
        Phaser.Utils.Array.Remove(this.possibleAnswers, this.answer1);

      this.answer2 = Phaser.Utils.Array.GetRandom(this.possibleAnswers);
        Phaser.Utils.Array.Remove(this.possibleAnswers, this.answer2);

      this.answer3 = Phaser.Utils.Array.GetRandom(this.possibleAnswers);
        Phaser.Utils.Array.Remove(this.possibleAnswers, this.answer3);

      this.answer4 = Phaser.Utils.Array.GetRandom(this.possibleAnswers);
        Phaser.Utils.Array.Remove(this.possibleAnswers, this.answer4);

      this.answer5 = Phaser.Utils.Array.GetRandom(this.possibleAnswers);
        Phaser.Utils.Array.Remove(this.possibleAnswers, this.answer5);
      

// creates trashcans and their individual answers
      this.trashCan1 = new TrashCan(this, 50, 500, this.answer1);
      this.trashCan2 = new TrashCan(this, 210, 500, this.answer2);
      this.trashCan3 = new TrashCan(this, 390, 500, this.answer3);
      this.trashCan4 = new TrashCan(this, 570, 500, this.answer4);
      this.trashCan5 = new TrashCan(this, 750, 500, this.answer5);


// Createse trash and their individual questions
      this.trash1 = new Trash(this, 100, 280, this.question1).setScale(0.6);
      this.trash2 = new Trash(this, 250, 340, this.question2).setScale(0.6);
      this.trash3 = new Trash(this, 400, 280, this.question3).setScale(0.6);
      this.trash4 = new Trash(this, 550, 340, this.question4).setScale(0.6);
      this.trash5 = new Trash(this, 700, 280, this.question5).setScale(0.6);



      this.numCorrect = 0; //Will keep track of number of right guesses
      this.numWrong = 0; //Will keep track of number of wrong guesses
      this.numWrongGuesses = this.add.text(20, 20, 'Num Wrong: 0', {fontSize: '40px', fill: '#ffffff'});

      //March 3
      // Will trigger when a piece of trash is over a garbage can
      this.physics.add.overlap(this.trash1, this.trashCan1, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash1, this.trashCan2, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash1, this.trashCan3, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash1, this.trashCan4, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash1, this.trashCan5, 
      this.putInTrash, null, this);


      this.physics.add.overlap(this.trash2, this.trashCan1, 
      this.putInTrash, null, this); 
      this.physics.add.overlap(this.trash2, this.trashCan2, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash2, this.trashCan3, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash2, this.trashCan4, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash2, this.trashCan5, 
      this.putInTrash, null, this);
      
      this.physics.add.overlap(this.trash3, this.trashCan1, 
      this.putInTrash, null, this); 
      this.physics.add.overlap(this.trash3, this.trashCan2, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash3, this.trashCan3, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash3, this.trashCan4, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash3, this.trashCan5, 
      this.putInTrash, null, this);

      this.physics.add.overlap(this.trash4, this.trashCan1, 
      this.putInTrash, null, this); 
      this.physics.add.overlap(this.trash4, this.trashCan2, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash4, this.trashCan3, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash4, this.trashCan4, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash4, this.trashCan5, 
      this.putInTrash, null, this);

      this.physics.add.overlap(this.trash5, this.trashCan1, 
      this.putInTrash, null, this); 
      this.physics.add.overlap(this.trash5, this.trashCan2, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash5, this.trashCan3, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash5, this.trashCan4, 
      this.putInTrash, null, this);
      this.physics.add.overlap(this.trash5, this.trashCan5, 
      this.putInTrash, null, this);
      
    
      /*this.testText = this.add.text(this.trash.x, this.trash.y, '3+4', {
        fontSize: '15px', fill: '#ffffff'
      }); //Obviously this only attaches text to one piece of trash
          //it would be annoying/time consuming to do this for each and every
          //possible equation that could appear.*/
    
    }

    
    putInTrash(trash, trashCan)
    {
      if(trash.correctAnswer === trashCan.answer) {
        this.correct = this.add.text(30, 200, 'That is Correct!', {fontSize: '80px', fill: '#ffffff'})
        trash.destroy();
        trashCan.getAt(0).setTint(0x8c8c8c);
        trashCan.destroy();
        this.numCorrect += 1;
        this.removeCorrect = this.time.delayedCall(550, this.onCorrect, [], this);
      }

      else{
        
      }

      if(this.numCorrect == 5)
          {
              this.endGame = this.time.delayedCall(1000, this.onFinish, [], this);
          }
    }

    onCorrect()
    {
      this.correct.destroy();
    };

    onWrong()
    {
      //this.wrong.destroy();
    };

    /*onFinish()
    {
      this.endGame = this.add.text(30, 200, 'Congradulations! You Finished!', {fontSize: '40px', fill: '#ffffff'});
      this.correctGuesses = this.add.text(40, 300, 'Number of Correct Guesses: ' + this.numCorrect, {fontSize: '40px', fill: '#ffffff'});
      this.wrongGuesses = this.add.text(40, 400, 'Number of Wrong Guesses: ' + this.numWrong, {fontSize: '40px', fill: '#ffffff'});*/
    onFinish() { 
      window.dispatchEvent(
        new CustomEvent('toast', {
          detail: {
            type: "finish",
            text:"Congratulations! You Finished!",
            correct: this.numCorrect,
            wrong: this.numWrong
          },
        })
      );
    };
}



/*

possible solution for randomiztation

  const problems = [
    { question: "3+4", answer: 7 },
    { question: "5+2", answer: 7 },
    { question: "2+6", answer: 8 },
    { question: "9-3", answer: 6 }
];

const random = Phaser.Utils.Array.GetRandom(problems);

const trash = createTrash(this, 200, 300, "trashSprite", random.question);

// Store the correct answer on the trash object
trash.correctAnswer = random.answer;

*/
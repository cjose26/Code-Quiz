# Code Quiz

## My Task

This task required me to create a Javascript quiz web application from scratch. The quiz should have 5 questions that pertain to Javascript as a way to test your knowledge of JS. The quiz needed to have a timer that will casue the quiz to end once it hits 0. Answering question correctly should add time to the time as well as add points to you score. At the end, the user should be able to input their name to save their score and see the highscores.

## How it works

THe home page is a simple screen with a title and two buttons. One button is to start the game and the other is to see the highscores. 

<img src=".\assets\images\01.PNG">

Once the play button is selected, you are taken to the game page which is a seperate html file. The game page will display a progress bar, a timer and your current score, as well as the question and 4 possible answers.

<img src=".\assets\images\02.PNG">

As you answer the question, you will see you progress updated in real time. The progress bar will grow, score will increase and the timer will increase by 5 seconds with every right answer. Also, the user will know when the answer is correct as the choice that was mad will either turn red for inccorect or green for correct.

<img src=".\assets\images\03.PNG">

<img src=".\assets\images\04.PNG">

When the test is completed by either answering all the question or the time runs out, the user is taken to the end screen/page. On this page the user will see their score and a text area to enter their name. There are also three buttons (save, play again and go home). The "Save" button will save the score and the name the user entered. "Play Again" will take the user back to the game to paly again and "Go Home" will take the user back to the home screen.

<img src=".\assets\images\05.PNG">

After the user inputs a name and clicks on save, they are taken to the high scores page. This page will show the users name and the score they recived on the quiz. The name and score are stored on the local storage. The user can click on "Go Home" to be taken back to the home page.

<img src=".\assets\images\06.PNG">
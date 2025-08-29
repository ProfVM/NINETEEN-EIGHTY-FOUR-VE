//=========================================
// File name: page_final.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Functions included in this file:
// - ready()
// - on beforeunload
// - PrintHeader()
//=========================================

$(document).ready(function ()
{
	PrintTitleAndDescription();
	PrintStatusBar();
	PrintCopyrightMsg();
	RestoreQuiz();
	PrintHeader();
});

$(window).on("beforeunload", function () {
	ClearQuiz();
});

function PrintHeader() {
	if (quiz.isQuizCompleted) {
<<<<<<< HEAD
		$('#idHeaderLastPage').text('Quiz completed');
	}
	else if (quiz.isQuizAbandoned) {
		$('#idHeaderLastPage').text('Quiz abandoned');
=======
		$('#idHeaderLastPage').text('Quiz completato');
	}
	else if (quiz.isQuizAbandoned) {
		$('#idHeaderLastPage').text('Quiz abbandonato');
>>>>>>> 1ff78c9aa2c3ec4f1fc7e84c7553d8d9884e670d
	}
}
//********* Take input from user and arithmetic display number ************//

// var a = +prompt("Enter your number");

// document.write("Result :"+ "<br>");
// document.write("The value of a is : " + a + "<br>" );
// document.write("........................." + "<br> <br>" );
// document.write("The value of ++a is :" + ++a + "<br>" );
// document.write("Now the value of a is :" + a + "<br> <br>" );
// document.write("The value of a++ is :" + a++ + "<br>" );
// document.write("Now the value of a is :" + a + "<br> <br>" );
// document.write("The value of --a is :" + --a + "<br>" );
// document.write("Now the value of a is :" + a + "<br> <br>" );
// document.write("The value of a-- is :" + a-- + "<br>" );
// document.write("Now the value of a is :" + a + "<br>" );



//********* Take input from user and greet the user ************//

// var greeting = prompt("enter your name");
// document.write("Hi there! "+ greeting);



//********* Take input from user and display multipication table ************//

// var table = +prompt("enter a number") ;

//  if (table == ""){
//       table = 5;
//  }

// for (var i = 1; i <= 10; i++) {
//     document.write(table + " x " + i + " = " + table * i + "<br>");
// } 



//********* Take input from user and calculate the percentage of three subjects ************//


// var sub1 = prompt("Enter Subject 1");
// var marksObtain1 = +prompt("Enter marks obtained in subject 1 out of 100");
// var sub2 = prompt("Enter Subject 2");
// var marksObtain2 = +prompt("Enter marks obtained in subject 2 out of 100");
// var sub3 = prompt("Enter Subject 3");
// var marksObtain3 = +prompt("Enter marks obtained in subject 3 out of 100");
// var totalMarks = 100;
// var sub1Per = marksObtain1 / totalMarks * 100;
// var sub2Per = marksObtain2 / totalMarks * 100;
// var sub3Per = marksObtain3 / totalMarks * 100;
// var totalObtMarks = marksObtain1 + marksObtain2 + marksObtain3;


// document.write("<table><tr><th> Subject </th><th> Total Marks </th><th> Obtained Marks </th><th>Percentage</th></tr> <tr><td>"+sub1+"</td><td>" + totalMarks + "</td><td>" + marksObtain1 + "</td><td>" + sub1Per +"% </td></tr> <tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marksObtain2 + "</td><td>" + sub2Per +"% </td></tr> <tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marksObtain3 + "</td><td>" + sub3Per +"% </td></tr> <tr><td></td><th>"+ totalMarks*3 +"</th><th>"+ totalObtMarks +"</th><th>"+(totalObtMarks/(totalMarks*3 )*100).toFixed(1)+"% </th></tr> </table>");
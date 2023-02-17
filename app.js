
// var myArray = ["apple", "mango", "kiwi", "banana", "orange"];

// var first = myArray[0];
// var last = myArray[myArray.length - 1];

// // myArray[0] = last;
// // myArray[myArray.length - 1] = first;

// console.log(myArray);


//<-------------------------------Chapter no 14 to 16 -------------------------------->

//Question no 01
// var studentNames = new Array();   //"literal Notation"

//Question no 02
// var studentNames = [];  //"Object Notation"

//Questuion no 03

// var strings;
// strings=["a","b","c","d","e"];

//Question no 04

// var numbers;
// numbers=[1,2,3,4,5];

//Question no 05

// var boolean;
// boolean=[true,false]

//Question no 06

// var mixed;
// mixed=["a","b",1,2,true,false]


//Question no 07

// var store;
// store=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<h1>Qualiafications:</h1>")
// document.write("<ol>" + "<b>"+"<li>" + store[0] + "</li>" +"<li>" + store[1] + "</li>" + "<li>" + store[2] + "</li>" + "<li>" + store[3] + "</li>" + "<li>" + store[4] + "</li>"+ "<li>" + store[5] + "<li>" + store[6] + "</li>" + "</li>"+ "<li>" + store[7] + "</li>"+"</b>"+"</ol>")

//Question no 08

// var stuName = ["Umar","Ali","Usman"]
// var score = [320,230,480]
// var total = 500;

// document.write("Score of "+stuName[0] + " is " + score[0] + ". " + "Percentage:" + score[0]/total*100 + "%"  )
// document.write("</br>Score of "+stuName[1] + " is " + score[1] + ". " + "Percentage:" + score[1]/total*100 + "%"  )
// document.write("</br>Score of "+stuName[2] + " is " + score[2] + ". " + "Percentage:" + score[2]/total*100 + "%"  )

//Question no 09
//(.A)
// var color = ["Red","Green","Blue","Orange","Purple","White"]
// document.write("Original Colors: " + color+"</br>")
//  var askcolor = prompt("Write the Color which you want at the beginning")
// color.unshift(askcolor)
// document.write("Updated Colors: "+ color )

//(.B)
//  var askcolor =prompt("Choose the Color which you want at the end")
// color.push(askcolor)
// document.write("Updated Colors :"+ color )

//(.C)
//  var askcolor =prompt("Add two more the Color which you want at the beginning")
// color.unshift(askcolor)
// document.write("Updated Colors :"+ color )

//(.D)
// color.shift()
// document.write("Updated Colors :"+ color )

//(.E)
// color.pop()
// document.write("Updated Colors :"+ color )

//(.F)
// var index = +prompt("Write the index at which you add color")
// var colorName = prompt("Write the color name ")
// color.splice(index,0,colorName)
// document.write("Updated Colors :"+ color)

//(.G)

// var index = +prompt("Write the index at which you delete color")
// var colorNo = prompt("Write the no of color names which you want to delete ")
// color.splice(index,colorNo)
// document.write("Updated Colors :"+ color)

//Question no 10

// var score = [320,230,480,180]
// document.write("Score of Students : " + score + "</br>")
// score.sort(function(a, b){return a-b});
// document.write("Ordered Score of Student : "+score)

//question no 11

// var cities = ['Karachi', 'Islamabad', 'Quetta', 'Lahore', 'Peshawar'];
// var selectedCities = [];
// selectedCities.push(cities[1], cities[2], cities[4]);
// document.write("Citeies list : " + cities); 
// document.write("</br>Selected Cities: " +selectedCities);

//Question no 12
// var arr = ["This ","is ","my ","cat"]
// document.write("Array: </br>"+arr)
// var string = arr.join('')
// document.write("</br>"+"String :"+ string)


//Queation no 13

// var device = ["monitor","keyboard","mouse","printer"]

// document.write("Devices: "+"</br>"+device+"</br>")


// device.push("monitor")
// device.push("keyboard")
// device.push("mouse")
// device.push("printer")

// document.write("Out: "+"</br>"+device.shift()+"</br>")
// document.write("Out: "+"</br>"+device.shift()+"</br>")
// document.write("Out: "+"</br>"+device.shift()+"</br>")
// document.write("Out: "+"</br>"+device.shift()+"</br>")


//Question no 14

// var devices = ["keyboard","mouse","printer","monitor</br>"];

// document.write("Devices: "+"</br>"+devices+"</br>")

// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("Out: "+"</br>"+devices.pop()+"</br>"); 
// document.write("Out: "+"</br>"+devices.pop()+"</br>"); 
// document.write("Out: "+"</br>"+devices.pop()+"</br>"); 
// document.write("Out: "+"</br>"+devices.pop()+"</br>");

//Question no 15

// var mobileBrands = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
// document.write( "<label for='brand'>"+"Choose a mobile Brand: "+"</label>"+ "<select name='mobileBrand' id='brand'>"+"<option value='apple'>"+mobileBrands[0]+"</option>"+"<+ value='samsung'>"+mobileBrands[1]+"<option value='motorola'>"+mobileBrands[2]+"</option>"+"<option value='nokia'>"+mobileBrands[3]+"</option>"+"<option value='sony'>"+mobileBrands[3]+"</option>"+"<option value='hair'>"+mobileBrands[4]+"</option>" +"</select>")

//<----------------------------------------------------Chapter no 17 to 20--------------------------------------------------------------->

//<*********************Pelindrom Words********************>

// var userInput = prompt('Enter a word:');
// var reversedInput = userInput.split('').reverse().join('');
// if (userInput === reversedInput) {
//   alert(userInput+" is a palindrome!");
// } else {
// alert(userInput+" is not a palindrome.");
// }

//<******************Without Method***************************>

// var str =prompt("Enter a vword")
// var reversestr=""

// for(i=str.length-1;i>=0;i--){
//     reversestr=reversestr+str[i]
// }
// if(str===reversestr){
// alert(str+" is a palindrome word")
// }else{
//     alert(str+" is not a palindrome")
// }

//<****************************With For Loop*************************************>

var user = prompt("Enter a word")
for( var u=0;u<user.length;u++){
}
for (var i = user.length - 1; i >= 0; i--) {
}
 if(user[u]===user[i]){
alert("It is a palindrome")
}else{
    alert("It is not a palindrome")
}


//Question no 01

// var multiDimension;
// multiDimension = [[]]

//Qyuestion no 02

// var matrix = [[0,1,2,3],[1,0,1,2)],[2,1,0,1]]
// document.write(matrix[0,[0]] +"</br>"+matrix[1] +"</br>"+matrix[2] )

//Question no 03

// for(var i=1 ; i<=10; i++){
//     document.write(i+"</br>")
// }

//Question no 04

// var tableNo = +prompt("Enter a number to show its multiplication table")
// var lenght = +prompt("Enter the table of "+tableNo + "lenght")
// document.write("<h1>Multiplication table of "+tableNo+"</h1>")
// document.write("<h1> Lenght "+lenght+"</h1>")
// for(var t=1;t<=lenght;t++ ){
//     document.write(tableNo+"x"+ t +"="+ tableNo*t +"</br>")
//  }

//Question no 05

// var array = ["apple","mango","banana","orange","strawberry"]
// for( var f=0; f<array.length ;f++) {
//     document.write(array[f]+"</br>")
// }

//Question no 06

// document.write("<h1>Counting</h1>")
// for(var counting=1;counting<=15;counting++){
//     document.write(counting+",")
// }

// document.write("<h1>Reversing</h1>")
// for(var reverse=10 ; reverse>=1;reverse--){
//     document.write(reverse+",")
// }
// document.write("<h1>Even</h1>")
// for(var even=0; even<=20; even=even+2){
//     document.write(even+",")
// }
// document.write("<h1>Odd</h1>")
// for(var odd=1; odd<=19; odd=odd+2){
//     document.write(odd+",")
// }
// document.write("<h1>Series</h1>")
// for(var series=1; series<=10; series++){
//     document.write(series*2+"k"+",")
// }

// Question no 07

// var userInput = prompt("Welcome to Bakery what do you want Sir/Ma'am")

// var sweet =['cake','applepie','cookie','chips','patties']

// for(var s=0;s<sweet.length;s++){
//     if(sweet[s] === userInput){
    
//         alert(userInput+ " is available at index " + s + " in our bakery" )
//     }else{
//         alert("We are Sorry, "+userInput+" is not available in our bakery ")
//     }
// }

//Question no 08


// var number = [24, 53, 78, 91, 12];
// var largest = number[0];

// for (var i = 0; i < number.length; i++) {
//   if (number[i] > largest) {
//     largest = number[i];
//   }
// }
// alert("Alert Items: "+number)
// alert("The largest number in the array is: " + largest);



//Question no 09

// var number = [24, 53, 78, 91, 12];
// var smallest = number[0];

// for (var i = 0; i < number.length; i++) {
//   if (number[i] < smallest) {
//     smallest = number[i];
//   }
// }
// alert("Alert Items: "+number)
// alert("The smallest number in the array is: " + smallest);

//Question no 10

// for (let i = 1; i <= 20; i++) {
//     let multiple = i * 5;
//     document.write(multiple+",");
//   }
  


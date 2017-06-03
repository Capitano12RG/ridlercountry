//don't put<script> and </script> tag in externally included file

var  optc,score=0,alert12;count=1;
var ques1;

function quiz()
{
document.getElementById("qid").innerHTML="Question = "+count+"/10";
var country=['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Democratic Republic of the Congo','Republic of the Congo','Costa Rica','Cote d Ivoire','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Eritrea','Estonia','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macedonia (FYROM)','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the renadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Ukraine','United Arab Emirates','United Kingdom','United States of America','Uruguay','Uzbekistan','Vanuatu','Vatican City ','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'];


//alert(country.length);


var capital=['Kabul','Tirana','Algiers','Andorra la Vella','Luanda','Saint Johns','Buenos Aires','Yerevan','Canberra','Vienna','Baku','Nassau','Manama','Dhaka','Bridgetown','Minsk','Brussels','Belmopan','Porto-Novo','Thimphu','Sarajevo','Gaborone','Brasilia','Bandar Seri Begawan','Sofia','Ouagadougou','Bujumbura','Praia','Phnom Penh','Yaounde','Ottawa','Bangui','N Djamena','Santiago','Beijing','Bogota','Moroni','Kinshasa','Brazzaville','San Jose','Yamoussoukro','Zagreb','Havana','Nicosia','Prague','Copenhagen','Djibouti (city)','Roseau','Santo Domingo','Quito','Cairo','San Salvador','Asmara','Tallinn','Addis Ababa','Suva','Helsinki','Paris','Libreville','Banjul','Tbilisi','Berlin','Accra','Athens','Saint Georges','Guatemala City','Conakry','Bissau','Georgetown','Port-au-Prince','Tegucigalpa','Budapest','Reykjavik','New Delhi','Jakarta','Tehran','Baghdad','Dublin','Jerusalem','Rome','Kingston','Tokyo','Amman','Astana','Nairobi','Tarawa','Pristina','Kuwait City','Bishkek','Vientiane','Riga','Beirut','Maseru','Monrovia','Tripoli','Vaduz','Vilnius','Luxembourg (city)','Skopje','Antananarivo','Lilongwe','Kuala Lumpur','Male','Bamako','Valletta','Majuro','Nouakchott','Port Louis','Mexico City','Palikir','Chisinau','Monaco','Ulaanbaatar','Podgorica','Rabat','Maputo','Naypyidaw','Windhoek','Yaren District',' Kathmandu','Amsterdam','Wellington','Managua','Niamey','Abuja','Pyongyang','Oslo','Muscat','Islamabad','Ngerulmud','Jerusalem (East)','Panama City','Port Moresby','Asuncion','Lima','Manila','Warsaw','Lisbon','Doha','Bucharest','Moscow','Kigali','Basseterre','Castries','Kingstown','Apia','San Marino','Sao Tome','Riyadh','Dakar','Belgrade','Victoria','Freetown','Singapore','Bratislava','Ljubljana','Honiara','Mogadishu','Pretoria ','Seoul','Juba','Madrid','Sri jayawardenepura Kotte','Khartoum','Paramaribo','Stockholm','Bern','Damascus','Taipei','Dushanbe','Dodoma','Bangkok','Dili','Lome','Nukualofa','Port of Spain','Tunis','Ankara','Ashgabat','Funafuti','Kyiv ','Abu Dhabi','London','Washington, D.C.','Montevideo','Tashkent','Port Vila','Vatican City','Caracas','Hanoi','Sanaa','Lusaka','Harare'];

//alert(capital.length);
var options=['0','1','2','3'];
//alert(options);
var arrayid=Math.round(Math.random()*(country.length-1));
//alert(arrayid);
ques1=country[arrayid];
document.getElementById('question').innerHTML = 'What is the capital of the country:-'+ques1+'?'
//we need to round the value as random can be float value as well
//alert("You chose: "+ques1);
optc=capital[arrayid];
var randoptions = options[Math.round(Math.random()*(options.length-1))];
//alert(randoptions);
//alert(document.getElementById('A1').value);
//document.getElementById('A1').textContent = optc;

var arrayid2=Math.round(Math.random()*(options.length-1));
//alert(arrayid2);
document.getElementsByTagName("Button")[arrayid2].textContent=optc;
//This is important as we gave a random button id and got it to randomize

//________________________work starts for option 2nd

options.splice(arrayid2,1);
//alert(options);
//  var x = document.getElementById("myP").TagName wiwll give tag element name
var new12=[];
var i;
for(i=0;i<capital.length;i++)
{
    new12[i]=capital[i];
}

new12.splice(arrayid,1);
//alert(new12.length);
//select options from this array now and put one correct one
arrayid5=Math.round(Math.random()*(new12.length-1));
//arrayid5 would help us to remove the element from the new spliced array
var wrongopt1= new12[arrayid5];
//wrongopt will pick up from the array of choices left after removing the right answer 
//var arrayid3=Math.round(Math.random()*(options.length-1));
var opt2randomindex=Math.round(Math.random()*(options.length-1));
//opt2randomindex will help us remove elements from the options array so that all values go in a different places
var opt2=options[opt2randomindex];
//opt2 will contain the elements after removing the place where option 1 was left
document.getElementsByTagName("Button")[opt2].textContent=wrongopt1;

//_____________________________for option 3rd
options.splice(opt2randomindex,1);
//This is to splice down the options array so like say original 0,1,2,3 after first 0,1,3 now the value of opt2randomindex is say 1-indexid
// so left with 0,3 now arrayid6 in this portion will chop down any id and we'll be left with a single one
//alert(options);
var new13=[];
//to copy into new array so that we can create a new array for the remaining countries
var j;
for(j=0;j<new12.length;j++)
{
    new13[j]=new12[j];
}

new13.splice(arrayid5,1);
//alert(new13.length);
var arrayid6=Math.round(Math.random()*(new13.length-1));
//to randomise the array we created and to pick a value from there 
var wrongopt2= new13[arrayid6];

var opt3randomindex=Math.round(Math.random()*(options.length-1));
var opt3=options[opt3randomindex];
document.getElementsByTagName("Button")[opt3].textContent=wrongopt2;
//give the button a text content
//_____________________________for option 4th______________________________________
options.splice(opt3randomindex,1);
//alert(options);
var new14=[];
var k;
for(k=0;k<new13.length;k++)
{
    new14[k]=new13[k];
}

new14.splice(arrayid6,1);
//alert(new14.length);
var wrongopt3= new14[Math.round(Math.random()*(new14.length-1))];
//alert(wrongopt3);
var opt4randomindex=Math.round(Math.random()*(options.length-1));
//alert(opt4randomindex);
var opt4=options[opt4randomindex];
//alert(opt4);
document.getElementsByTagName("Button")[opt4].textContent=wrongopt3;
//_________________________________________________________________________________
}

//_____________________function to validate if the answer option selected by user is correct or not

function validation1(k)
{
var alert12=k;
//alert(alert12);
if(alert12 == optc)
{

score++;
document.getElementById('Score12').value="Score = "+score ;
if(count<10)
{
//if the number of questions is <10 then the next question is displayed
count++;
quiz();
}
else
{
//alert("Thanks for hanging out with us! Your score is = "+score);
//Window.prompt("Do you wish to continue?",);
//prompt("Please enter your name", "Harry Potter"); is for asking user a question with harry potter as default string

document.getElementById('abc').style.display='block';
document.getElementById("quiz12").style.display='none';
document.getElementById("Score12").style.display='none';
document.getElementById("quiz14").style.display='block';
document.getElementById("final1").innerHTML="Thanks for hanging out with us!\n Your score is : "+score;

/*if(confirm("Do you want to continue") == true)
{
//this statement will decide what happens once questions are over
location.reload();
}
else
{
alert("Thanks for Playing!!");
location.reload();
}*/
}
}

else
{
//this else is for when the option clicked is incorrect
document.getElementById("quiz12").style.display='none';
document.getElementById("quiz15").style.display='block';
document.getElementById("final12").innerHTML='The capital of the country '+ques1+' is:-'+optc;

}
}

//_____________function to start the quiz
function Start()
{

document.getElementById('quiz13').style.display='none';
document.getElementById("quiz12").style.display='block';
//if we simply write block then it is considered a variable not a value
document.getElementById("Score12").style.display='block';

}

function reload1()
{
location.reload();
}

function fnt123()
{
if(count<10)
{
document.getElementById('abc').style.display='block';
document.getElementById("quiz12").style.display='block';
document.getElementById("Score12").style.display='block';
document.getElementById("quiz15").style.display='none';
count++;
quiz();
}
else
{
//alert("Thanks for hanging out with us! \n Your score is : "+score);
//Window.prompt("Do you wish to continue?");

document.getElementById('abc').style.display='block';
document.getElementById("quiz15").style.display='none';
document.getElementById("quiz12").style.display='none';
document.getElementById("Score12").style.display='none';
document.getElementById("quiz14").style.display='block';
document.getElementById("final1").innerHTML="Thanks for hanging out with us!\n Your score is : "+score;


}
}

//__________________________________________________________JS ends here____________

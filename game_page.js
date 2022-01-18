document.getElementById("player_answer").innerHTML="Answer turn = "+player2_name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("wordinLowerCase ="+word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    length_divide=Math.floor(word.length/2);
    charAt2=word.charAt(length_divide);
    console.log(charAt2);

    length_minus=word.length-1;
    charAt3=word.charAt(length_minus);
    console.log(charAt3);

remove_charAt1=word.replace(charAt1,"_");
remove_charAt2=remove_charAt1.replace(charAt2,"_");
remove_charAt3=remove_charAt2.replace(charAt3,"_");
console.log(remove_charAt3);

question_word="<h4 id='word_display'> Q."+remove_charAt3+"</h4>";
input_box="<br>answer: <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row= question_word + input_box +check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value="";
}
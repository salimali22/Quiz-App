function check(){
    var score =0
    var right_answer_1= document.getElementById("q1_a1");
    var q1_answer_2 = document.getElementById("q1_a2");
    var q1_answer_3 = document.getElementById("q1_a3");
    var q1_answer_4 = document.getElementById("q1_a4");

    if(right_answer_1.checked == true){
        score++
        alert('Answer 1 is correct!')
    }
    else{
        alert('Answer 1 is incorrect')
    }



    var right_answer_1= document.getElementById("q2_a1");
    var q2_answer_2 = document.getElementById("q2_a2");
    var q2_answer_3 = document.getElementById("q2_a3");
    var q2_answer_4 = document.getElementById("q2_a4");
    if(right_answer_1.checked == true){
        score++
        alert('Answer 2 is correct!')
    }
    else{
        alert('Answer 2 is incorrect')
    }

    var q3_answer_1= document.getElementById("q3_a1");
    var right_answer_2 = document.getElementById("q3_a2");
    var q2_answer_3 = document.getElementById("q3_a3");
    var q2_answer_4 = document.getElementById("q3_a4");
    if(right_answer_2.checked == true){
        score++
        alert('Answer 3 is correct!')
    }
    else{
        alert('Answer 3 is incorrect')
    }
 alert("YOur Score is: "+score);
}
var page =0;
var buttonYes;
var buttonNo;
var current, weight;
let desired;
var average;
let opt1 = 0; 
let opt2 = 0;
let opt3 = 0;
let opt4 = 0;
let opt5 = 0;



function setup(){
    //HOME
    canvas = createCanvas(1080,1980);
    buttonYes = createSprite(width/2,1000,375,175);
    buttonNo = createSprite(width/2,1270,375,175);
    buttonNo.shapeColor= rgb(266, 118, 118)
    buttonYes.shapeColor= rgb(266, 118, 118)
    
    //YES
    desired = createInput('');
    desired.style("fontSize","50px");
    desired.input(findGrade);
    desired.position(width/2-250,height/2-200);
    desired.size(500,AUTO);
    //desired.input(()=>{x = this.value(); console.log(x);  });
    // var x = desired.value();
    // console.log(x);

    current = createInput('');
    current.style("fontSize","50px");
    current.input(findGrade);
    current.position(width/2-250,height/2+100);
    current.size(500,AUTO);

    //NO
    opt1 = createInput('');
    opt1.style("fontSize","50px");
    opt1.input(findGradeNO);
    opt1.position(width/2-70,height/2-870);
    opt1.size(500,AUTO);

    opt2 = createInput('');
    opt2.style("fontSize","50px");
    opt2.input(findGradeNO);
    opt2.position(width/2-70,height/2-570);
    opt2.size(500,AUTO);

    opt3 = createInput('');
    opt3.style("fontSize","50px");
    opt3.input(findGradeNO);
    opt3.position(width/2-70,height/2-270);
    opt3.size(500,AUTO);

    opt4 = createInput('');
    opt4.style("fontSize","50px");
    opt4.input(findGradeNO);
    opt4.position(width/2-70,height/2+70);
    opt4.size(500,AUTO);

    opt5 = createInput('');
    opt5.style("fontSize","50px");
    opt5.input(findGradeNO);
    opt5.position(width/2-70,height/2+370);
    opt5.size(500,AUTO);
    
    want = createInput('');
    want.style("fontSize","50px");
    want.input(findGradeNO);
    want.position(width/2-70,height/2+600);
    want.size(500,AUTO);


    //back
    back = createSprite(120,70,175,100);
    back.shapeColor= rgb(266, 118, 118)

    
}

function draw(){
    background(36, 42, 56);
    drawSprites();

    if(mousePressedOver(buttonYes)){
        page = 1;
        buttonYes.visible = false;
        buttonNo.visible = false;
        back.visible = true;
        desired.show();
        current.show();
        opt1.hide();
        opt2.hide();
        opt3.hide();
        opt4.hide();
        opt5.hide();
        want.hide();


    }

    if (mousePressedOver(buttonNo)){
        page=2;
        buttonNo.visible = false;
        buttonYes.visible = false;
        back.visible = true;
        desired.hide();
        current.hide();
        opt1.show();
        opt2.show();
        opt3.show();
        opt4.show();
        opt5.show();
        want.show();

    }

    if(page === 0){
        home();
        buttonNo.visible = true;
        buttonYes.visible = true;
        back.visible = false;
        desired.hide();
        current.hide();
        opt1.hide();
        opt2.hide();
        opt3.hide();
        opt4.hide();
        opt5.hide();
        want.hide();
        
    }

    if (page === 1){
        
        yes();
    }

    if (page === 2){
        no();
    }



}

function findGrade() {
    //console.log('desired', desired.value());
    //console.log('current', current.value());
    x = desired.value()*2 - current.value();
    //console.log(x);
    textSize(36);
    text("PERCENTAGE TO ACHIEVE ON NEXT PROJECT/ TEST: "+ x ,width/2-480,height/2+300);
    if (x> 100){

        fill(255,0,0)
        textSize(32);
        text("UNFORTUNATLEY YOU NEED TO GET A SCORE ABOVE 100% " ,width/2-450,height/2+400);
        text("TO ACHIEVE YOUR DESIRED GRADE. " ,width/2-300,height/2+460);

    }
}

function findGradeNO(){
    q= opt1.value()*1;
    w= opt2.value()*1;
    e= opt3.value()*1;
    r= opt4.value()*1;
    t= opt5.value()*1;
    y = want.value()*1;

    average  = (parseFloat(q+w+e+r+t))
    average1 = average /5;
    
    achieve= y * 2 - average1;

    textSize(32);
    text("YOUR CURRENT AVERAGE % : " + average1, width/2-300,height/2+ 730);
    text("PERCENTAGE TO ACHIEVE ON NEXT PROJECT/TEST: " + achieve, width/2 - 500,height/2+ 830);


    if (achieve> 100){

        fill(255,0,0)
        textSize(22);
        text("UNFORTUNATLEY YOU NEED TO GET A SCORE ABOVE 100% " ,width/2-300,height/2+ 870);
        text("TO ACHIEVE YOUR DESIRED GRADE. " ,width/2-250,height/2+ 900);

    }

}

function yes(){
    fill(200,200,200);
    textSize(74);
    text("DESIRED PERCENTAGE",width/2-400,height/2-250);
    text("CURRENT PERCENTAGE",width/2-410,height/2+20);
    //text("PERCENTAGE TO ACHIEVE: "+ x ,width/2-410,height/2+200);
    text("%",width/2+250,height/2+160);
    text("%",width/2+250,height/2-170);
    findGrade();

    fill(29, 37, 66);
    text("<BACK",50,80);

    if (mousePressedOver(back)){

        page = 0;

    }





    // button = createButton('submit');
    // button.position(width/2-50,height/2+50);
    // button.mousePressed(findGrade);
    // button.size(500,AUTO)

}
//desired * 2 - current = what to score



function no(){
    findGradeNO();

    textSize(34)
    fill(153, 102, 204);
    text("Percentage on test/project 1: ",width/2-520,height/2-840);
    text("Percentage on test/project 2: ",width/2-520,height/2-540);
    text("Percentage on test/project 3: ",width/2-520,height/2-240);
    text("Percentage on test/project 4: ",width/2-520,height/2+90);
    text("Percentage on test/project 5: ",width/2-520,height/2+380);
    text("Percentage Desired: "          ,width/2-400,height/2+620);

    fill(29, 37, 66);
    text("<BACK",50,80);
    
    if (mousePressedOver(back)){

        page = 0;

    }

}

function home(){
    // yes and no
    fill(197, 203, 217);
    textSize(54);
    text("YES",width/2 -45,1020);
    text("NO",width/2 -45,1290);
    //"know your grade shadow"
    textSize(160);
    fill(17, 20, 27);
    text("KNOW YOUR",40+10,350+10);
    text("GRADE",260+10,550+10);
    //actual text
    fill(246, 98, 98);
    text("KNOW YOUR",40,350);
    text("GRADE",260,550);
    //question
    fill(197, 203, 217);
    textSize(54);
    text("Do you know your",330,800);
    text("current grade?",360,850);


}


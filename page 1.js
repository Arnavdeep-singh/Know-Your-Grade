class Form {
    constructor() {
        this.yes = createButton("YES");
        this.no = createButton("NO");
    }

    hide() {
        this.yes.hide();
        this.no.hide();
    }

    display() {

        

        // yes and no
        fill(197, 203, 217);
        textSize(54);
        text("YES", width / 2, 1000);
        text("NO", width / 2, 1270);
        //"know your grade shadow"
        textSize(160);
        fill(17, 20, 27);
        text("KNOW YOUR", 40 + 10, 350 + 10);
        text("GRADE", 260 + 10, 550 + 10);
        //actual text
        fill(246, 98, 98);
        text("KNOW YOUR", 40, 350);
        text("GRADE", 260, 550);
        //question
        fill(197, 203, 217);
        textSize(54);
        text("Do you know your", 330, 800);
        text("current grade?", 360, 850);
    }
}
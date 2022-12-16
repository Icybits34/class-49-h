class Security {

    constructor() {
        this.hint1 = createElement("h4");
        this.hint1.html("Hint: Always changing, not constant !!");
        this.hint1.position(310, 40);
        this.hint1.style('color', 'red');

        this.access1 = createInput("Code1")
        this.access1.position(350, 90);
        this.access1.style('background', 'white');

        this.button1 = createButton('Check');
        this.button1.position(410, 120);
        this.button1.style('background', 'lightgrey');

        this.hint2 = createElement("h4");
        this.hint2.html("Hint: Performs a particular task !!");
        this.hint2.position(680, 140);
        this.hint2.style('color', 'red');

        this.access2 = createInput("Code1")
        this.access2.position(700, 190);
        this.access2.style('background', 'white');

        this.button2 = createButton('Check');
        this.button2.position(760, 220);
        this.button2.style('background', 'lightgrey');

        this.hint3 = createElement("h4");
        this.hint3.html("Hint: Stores all the information !!");
        this.hint3.position(80, 140);
        this.hint3.style('color', 'red');

        this.access3 = createInput("Code1")
        this.access3.position(100, 190);
        this.access3.style('background', 'white');

        this.button3 = createButton('Check');
        this.button3.position(160, 220);
        this.button3.style('background', 'lightgrey');
    }

    display() {

        this.button1.mousePressed(() => {
            if (system.authenticate(accessCode1, this.access1.value())) 
            {
                this.button1.hide();
                this.access1.hide();
                this.hint1.hide();
                score++;

                car1.x += 100;
                zombie.x = car1.x -120
                //zombie.x = zombie.x +5
             if(zombie.isTouching(car1)){
                    gameState = END
                 gameOvr.visible = true
                 background(gameOvr_img)    
            }
                //if(score>0&&score<3&&gameState==END){
                  //  clear()
                   // background(gameOvr)
                  //  gameOvr.visible = true
                 // }
            }
            

        });

        this.button2.mousePressed(() => {
            if (system.authenticate(accessCode2, this.access2.value())) {
                this.button2.hide();
                this.access2.hide();
                this.hint2.hide();
                score++;

                car1.x += 100;
                zombie.x = car1.x -120
            }
        });

        this.button3.mousePressed(() => {
            if (system.authenticate(accessCode3, this.access3.value())) {

                this.button3.hide();
                this.access3.hide();
                this.hint3.hide();

                score++;

                car1.x += 100;
                zombie.x = car1.x -120
            }
        });
    }
}
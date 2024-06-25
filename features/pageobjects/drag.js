const {$} = require('@wdio/globals');

const dragPage = '//android.widget.TextView[@text="Drag"]';
const dropl1= '//*[@content-desc="drop-l1"]';
const dropc1= '//*[@content-desc="drop-c1"]';
const dropr1= '//*[@content-desc="drop-r1"]';

const dropl2= '//*[@content-desc="drop-l2"]';
const dropc2= '//*[@content-desc="drop-c2"]';
const dropr2= '//*[@content-desc="drop-r2"]';

const dropl3= '//*[@content-desc="drop-l3"]';
const dropc3= '//*[@content-desc="drop-c3"]';
const dropr3= '//*[@content-desc="drop-r3"]';

const dragl1= '//*[@content-desc="drag-l1"]';
const dragc1= '//*[@content-desc="drag-c1"]';
const dragr1= '//*[@content-desc="drag-r1"]';

const dragl2= '//*[@content-desc="drag-l2"]';
const dragc2= '//*[@content-desc="drag-c2"]';
const dragr2= '//*[@content-desc="drag-r2"]';

const dragl3= '//*[@content-desc="drag-l3"]';
const dragc3= '//*[@content-desc="drag-c3"]';
const dragr3= '//*[@content-desc="drag-r3"]';

const congratsText = '//android.widget.TextView[@text="Congratulations"]';


class Drag{

    async goToDragAndDropPage(){
        await $(dragPage).click();
        browser.pause(2500);
    }
    
    async dragAndDrop(){
        const DAD = async (drag,drop)=>{
            await drag.waitForDisplayed({ timeout: 5000 });
            await drop.waitForDisplayed({ timeout: 5000 });
            await drag.dragAndDrop(drop);

        }

        const elements = [
            { drag: dragl1, drop: dropl1 },
            { drag: dragc1, drop: dropc1 },
            { drag: dragr1, drop: dropr1 },
            { drag: dragl2, drop: dropl2 },
            { drag: dragc2, drop: dropc2 },
            { drag: dragr2, drop: dropr2 },
            { drag: dragl3, drop: dropl3 },
            { drag: dragc3, drop: dropc3 },
            { drag: dragr3, drop: dropr3 }
        ];
        
        for (const { drag, drop } of elements) {
            while(await $(drop).isDisplayed()){
                await DAD(await $(drag), await $(drop));
            }
        }
       
        browser.pause(10000);
    }

    async checkCompletion(){
        return (await $(congratsText).isDisplayed());
    }

}

module.exports = new Drag();



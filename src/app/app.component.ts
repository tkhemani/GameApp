import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing dev changes!';
 printDelayed = async function(elements: string[]) {
    for (const element of elements) {
        await this.delay(2000);
        console.log(element);
    }
}

delay = async function (milliseconds: number) {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

constructor(){
  this.printDelayed(["Hello", "beautiful", "asynchronous", "world"]).then(() => {
  console.log();
    console.log("Printed every element!");
});
}


}

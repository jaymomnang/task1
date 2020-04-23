import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class screenComponent implements OnInit {
    // Declare height and width variables
    screenHeight: any;
    screenWidth: any;

    @HostListener('window:resize', ['$event'])
    getScreenSize(_event?: undefined) {
        this.screenHeight = window.innerHeight;
        this.screenHeight = window.innerWidth;
        console.log(this.screenHeight, this.screenHeight);
    }

    // Constructor
    constructor() {
        this.getScreenSize();
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
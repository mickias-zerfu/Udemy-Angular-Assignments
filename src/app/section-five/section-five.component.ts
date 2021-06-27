import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-five',
  templateUrl: './section-five.component.html',
  styleUrls: ['./section-five.component.css']
})
export class SectionFiveComponent implements OnInit {
  serverElements = [{type:"server",name:"test server", content:" just test"}];


  constructor() { }

  ngOnInit(): void {
  }
  onServerAdded(serverData:{serverName:string, serverContent:string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
    }
  
    onBlueprintAdded(bluePrintData:{serverName:string, serverContent:string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: bluePrintData.serverName,
        content: bluePrintData.serverContent
      });
    }
}
  

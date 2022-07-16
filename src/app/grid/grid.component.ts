import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    this.populateGrid()
  }

  tiles: Tile[] = [

  ];

  populateGrid(){
    for(let r=0; r<9;r++){
      for(let c=0;c<9;c++){
        let tile:Tile = {text: '1', cols: 1, rows: 1, color: 'lightpink'}
        
        if((r<=2 || r>=6) && (c<=2 || c>=6)){
          tile.color = 'lightgrey'
        } else if((r>2 && r<6) && (c>2 && c<6)){
          tile.color = 'lightgrey'
        }

        this.tiles.push(tile)
      } 
    }
  }

  submit(){
    console.log('test')
  }


}

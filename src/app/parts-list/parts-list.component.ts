import { Component, OnInit, EventEmitter } from '@angular/core';
import { PartsService } from '../parts.service';
import { Parts } from '../parts';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {

  list: Parts[];

  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.list = this.partsService.list;
  }

  onClickDelete(index: number): void {
    this.partsService.delete(index);
  }
}

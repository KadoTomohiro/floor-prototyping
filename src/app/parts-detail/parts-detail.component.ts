import { Component, OnInit, Input } from '@angular/core';
import { Parts } from '../parts';

@Component({
  selector: 'app-parts-detail',
  templateUrl: './parts-detail.component.html',
  styleUrls: ['./parts-detail.component.css']
})
export class PartsDetailComponent implements OnInit {

  @Input() width: number;
  @Input() height: number;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}

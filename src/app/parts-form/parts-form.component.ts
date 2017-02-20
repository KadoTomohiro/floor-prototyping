import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Parts } from '../parts';
import { PartsService } from '../parts.service';

@Component({
  selector: 'app-parts-form',
  templateUrl: './parts-form.component.html',
  styleUrls: ['./parts-form.component.css']
})
export class PartsFormComponent implements OnInit {

  constructor(private partsService: PartsService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm): void {
    const parts: Parts = {
      name: f.value.name,
      size: f.value.size
    };

    this.partsService.add(parts);
    f.resetForm();
  }
}

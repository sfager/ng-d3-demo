import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-404',
  template: `<h2>404 Error: Page Not Found!</h2>`
})

export class PathNotFoundComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as nv from 'nvd3';

@Component({
  selector: 'app-discrete-bar-chart',
  templateUrl: './discrete-bar-chart.component.html',
  styleUrls: ['./discrete-bar-chart.component.css']
})
export class Nvd3DiscreteBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.buildChart();
  }

  private buildChart() {
    nv.addGraph(() => {
      const chart = nv.models.discreteBarChart()
        .x(d => d.label)      // Specify the data accessors.
        .y(d => d.value)
        .staggerLabels(true)  // Too many bars and not enough room? Try staggering labels.
        .showValues(true)     // ...instead, show the bar value right on top of each bar.
        .duration(350);

     chart.tooltip.enabled(false);   // Don't show tooltips

      d3.select('.chart svg')
        .datum(this.exampleData())
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
  }

  // Each bar represents a single discrete quantity
  private exampleData() {
    return [
      {
        key: 'Cumulative Return',
        values: [
          {
            'label': 'A Label',
            'value': -29.765957771107
          },
          {
            'label': 'B Label',
            'value': 0
          },
          {
            'label': 'C Label',
            'value': 32.807804682612
          },
          {
            'label': 'D Label',
            'value': 196.45946739256
          },
          {
            'label': 'E Label',
            'value': 0.19434030906893
          },
          {
            'label': 'F Label',
            'value': -98.079782601442
          },
          {
            'label': 'G Label',
            'value': -13.925743130903
          },
          {
            'label': 'H Label',
            'value': -5.1387322875705
          }
        ]
      }
    ];
  }
}

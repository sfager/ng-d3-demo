import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as nv from 'nvd3';

@Component({
  selector: 'app-scatter-bubble-chart',
  templateUrl: './scatter-bubble-chart.component.html',
  styleUrls: ['./scatter-bubble-chart.component.css']
})
export class Nvd3ScatterBubbleChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.buildChart();
  }

  private buildChart() {
    nv.addGraph(() => {
      const chart = nv.models.scatterChart()
        .showDistX(true)  // show Dist, when true, will display those little distribution line on the axis.
        .showDistY(true)
        .duration(350)
        .color(d3.scale.category10().range())
        .options({ onlyCircles: false });

      // Axis settings
      chart.xAxis.tickFormat(d3.format('.02f'));
      chart.yAxis.tickFormat(d3.format('.02f'));

      // We want to show shapes other than circles.
      const scatter: any = chart.scatter;
      if (scatter.onlyCircles) {
        scatter.onlyCircles(false);
      }

      const myData = this.randomData(4, 40);
      d3.select('.chart svg')
        .datum(myData)
        .call(chart);

      nv.utils.windowResize(chart.update);

      return chart;
    });
  }

  /*********************************************************
   * Simple test data generator
   */
  private randomData(groups, points) {
    // # groups, # points per group
    const data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = d3.random.normal();

      for (let i = 0; i < groups; i++) {
        data.push({
          key: 'Group ' + i,
          values: []
        });

        for (let j = 0; j < points; j++) {
          data[i].values.push({
            x: random(),
            y: random(),
            // Configure the size of each scatter point
            size: Math.random(),
            // Configure the shape of each scatter point
            shape: (Math.random() > 0.95) ? shapes[j % 6] : 'circle'
          });
        }
      }

      return data;
  }
}

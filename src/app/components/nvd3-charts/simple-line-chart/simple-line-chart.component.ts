import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as nv from 'nvd3';

@Component({
  selector: 'app-nvd3-simple-line-chart',
  templateUrl: './simple-line-chart.component.html',
  styleUrls: ['./simple-line-chart.component.css']
})
export class Nvd3SimpleLineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.buildChart();
  }

  private buildChart() {
    // These lines are all chart setup.
    // Pick and choose which chart features you wnat to utilize.

    nv.addGraph(() => {
      const chart = nv.models.lineChart()
        .margin({ left: 100 })            // Adjust chart margins to give the x-axis some breathing room.
        .useInteractiveGuideline(true)    // We want nice looking tooltips and a guideline
        .showLegend(true)                 // Show the legend, allowing users to turn on/off line series.
        .showYAxis(true)                  // Show the y-axis
        .showXAxis(true);                 // Show the x-axis


      chart.xAxis                       // Chart x-axis settings
        .axisLabel('Time (ms)')
        .tickFormat(d3.format(',r'));

      chart.yAxis                       // Chart y-axis settings
        .axisLabel('Voltage (v)')
        .tickFormat(d3.format('.02f'));


      // Done setting the chart up? Time to render it!
      const myData = this.sinAndCos();      // You need data...

      d3.select('.chart svg')     // Select the <svg> element you want to render the chart in
        .datum(myData)            // Populate the <svg> element with chart data...
        .call(chart);             // Finally, render the chart!

      // Update the chart when window resizes.
      nv.utils.windowResize(chart.update);

      return chart;
    });
  }

  /********************************
   *  Simple test data generator
   */

  private sinAndCos() {
    const sin = [],
      sin2 = [],
      cos = [];

      // Data is represented as an array of {x,y} pairs.
      for(let i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin(i / 10)});
        sin2.push({x: i, y: Math.sin(i / 10) * 0.25 + 0.5});
        cos.push({x: i, y: .5 * Math.cos(i / 10)});
      }

      // Line chart data should be sent as an array of series objects.
      return [
        {
          values: sin,      // values - represents the array of { x, y } data points
          key: 'Sin Wave',  // key - the name of the series
          color: '#ff7f0e'  // color - optional: choose you own line color.
        },
        {
          values: cos,
          key: 'Cosine Wave',
          color: '#2ca02c'
        },
        {
          values: sin2,
          key: 'Another sine Wave',
          color: '#7777ff',
          area: true        // area - set to true if you want this line to turn into a filled area chart.
        }
      ]
  }
}

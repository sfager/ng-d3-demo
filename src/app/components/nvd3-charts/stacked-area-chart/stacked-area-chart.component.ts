import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as nv from 'nvd3';

@Component({
  selector: 'app-nvd3-stacked-area-chart',
  templateUrl: './stacked-area-chart.component.html',
  styleUrls: ['./stacked-area-chart.component.css']
})
export class Nvd3StackedAreaChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.buildChart();
  }

  private buildChart() {
    d3.json('assets/stackedAreaData.json', data => {
      nv.addGraph(() => {
        const chart = nv.models.stackedAreaChart()
          .margin({ right: 100 })
          .x(d => d[0])                   // We can modify the data accessor functions...
          .y(d => d[1])                   // ...in case your data is formatted differently.
          .useInteractiveGuideline(true)  // Tooltips which show all data points. Very nice!
          .rightAlignYAxis(true)          // Let's move the y-axis to the right side.
          .duration(500)
          .showControls(true)             // Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
          .clipEdge(true);


        // Format x-axis labels with custom functions.
        chart.xAxis
          .tickFormat(d => d3.time.format('%x')(new Date(d)));

        chart.yAxis
          .tickFormat(d3.format(',.2f'));

        d3.select('.chart svg')
          .datum(data)
          .call(chart);

        nv.utils.windowResize(chart.update);

        return chart;
      });

    });
  }
}

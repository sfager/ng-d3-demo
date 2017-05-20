import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-stream-graph',
  templateUrl: './stream-graph.component.html',
  styleUrls: ['./stream-graph.component.css']
})
export class StreamGraphComponent implements OnInit {

  dataarray = [];
  colorrange = [];

  constructor() { }

  ngOnInit() {
    this.chart('assets/data.csv', 'blue');
  }

  chart(csvpath, color) {
    if (color === 'blue') {
      this.colorrange = ['#045A8D', '#2B8CBE', '#74A9CF', '#A6BDDB', '#D0D1E6', '#F1EEF6'];
    } else if (color === 'pink') {
      this.colorrange = ['#980043', '#DD1C77', '#DF65B0', '#C994C7', '#D4B9DA', '#F1EEF6'];
    } else if (color === 'orange') {
      this.colorrange = ['#B30000', '#E34A33', '#FC8D59', '#FDBB84', '#FDD49E', '#FEF0D9'];
    }

    const strokecolor = this.colorrange[0];

    const format = d3.timeFormat('%m/%d/%y');

    const margin = { top: 20, right: 40, bottom: 30, left: 30};
    const width = document.body.clientWidth - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const tooltip = d3.select('body')
                      .append('div')
                      .attr('class', 'remove')
                      .style('position', 'absolute')
                      .style('z-index', '20')
                      .style('visibility', 'hidden')
                      .style('top', '30px')
                      .style('left', '55px');

    const x = d3.scaleTime()
                .range([0, width]);

    const y = d3.scaleLinear()
                .range([height - 10, 0]);

    // const z = d3.scaleOrdinal()
    //             .range(this.colorrange);

    const xAxis = d3.axisBottom(x);

    // const area = d3.svg.area()
    //   .interpolate('cardinal')
    //   .x(function(d) { return x(d.date); })
    //   .y0(function(d) { return y(d.y0); })
    //   .y1(function(d) { return y(d.y0 + d.y); });

    // const svg = d3.select('.chart')
    //   .append('svg')
    //   .attr('width', width + margin.left + margin.right)
    //   .attr('height', height + margin.top + margin.bottom)
    //   .append('g')
    //   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    // build graph
    const graph = d3.csv(csvpath, (err, data: d3.DSVParsedArray<d3.DSVRowAny>) => {
      if (err) {
        console.log('Error: ', err);
      }

      const parseDate = d3.timeParse('%m/%d/%y');
      data.forEach((d: any) => {
        d.date = parseDate(d.date);
        d.value = +d.value;
      });

      x.domain(d3.extent(data, d => d.date));
      // y.domain([0, d3.max(data, d => d.y0 + d.y)]);
      d3.
    });


      // console.log('data: ', data);

      // data.forEach(function(d) {
      //   d.date = format(d.date);
      //   d.value = +d.value;
      // });

      // console.log('data: ', data);
  }
}

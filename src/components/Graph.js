import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Graph = ({ data }) => {
  const svgRef = useRef(null);
  console.log(data);
  useEffect(() => {
    // Clear previous graph elements
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 310 - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
      .domain([0, 9]) // x-axis range from -10 to 10
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, 400]) // y-axis range from 0 to 200
      .range([height, 0]);

    const lineGenerator = d3.line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    const svgContent = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw x-axis
    svgContent.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .append('text') // Add x-axis label
      .attr('x', width / 2)
      .attr('y', 30)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .text('Displacement from mean position');

    // Draw y-axis
    svgContent.append('g')
      .call(d3.axisLeft(yScale))
      .append('text') // Add y-axis label
      .attr('x', -height / 2)
      .attr('y', -30)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Vout');

    // Draw the line path
    svgContent.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', lineGenerator);

  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default Graph;
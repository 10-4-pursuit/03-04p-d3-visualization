import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";


const BarCharts = () => {
    const svgRef = useRef();
    const[data] = useState([
        {"category": "Category A", "value": 30},
        {"category": "Category B", "value": 80},
        {"category": "Category C", "value": 45},
    ]);

    useEffect(() => {
        // setting up the svg
        const w = 500
        const h = 300
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        
        const svg = d3.select(svgRef.current)
            .attr("width", w)
            .attr("height", h)
            .style("border", "1px solid black")
            .style("background-color", "white")
            .style("padding", "10px")
            .style( "margin", "10px")
            .style('box-shadow', '0 0 10px rgba(0, 0, 0, 0.5)')
            .style('border-radius', '10px')
            .style('color', 'goldenrod');

          // setting up the scales  
        const xScale = d3.scaleBand()
        .range([0, w - margin.left - margin.right])
        .domain(data.map(d => d.category))
        .padding(0.4);

        const yScale = d3.scaleLinear()
        .range([h - margin.top - margin.bottom, 0])
        .domain([0, d3.max(data, d => d.value)]);

        // setting up the axes
        const g = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

        g.append("g")
        .call(d3.axisLeft(yScale));

        g.append("g")
        .attr("transform", `translate(0, ${h - margin.top - margin.bottom})`)
        .call(d3.axisBottom(xScale));

        // setting up the bars
        g.selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.category))
        .attr("y", d => yScale(d.value))
        .attr("width", xScale.bandwidth())
        .attr("height", d => h - margin.top - margin.bottom - yScale(d.value)); 
    }, [ data ]);

    return (
        <div>
            <h1>Bar Chart</h1>
            <svg ref={ svgRef }></svg>
        </div>
    );
}

export default BarCharts



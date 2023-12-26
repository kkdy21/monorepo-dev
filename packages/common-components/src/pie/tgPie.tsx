import { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const data = [12, 5, 6, 6, 9, 10];

	useEffect(() => {
		initBarChartBox();
		drawChart();
	}, [inputRef]);
	const drawChart = () => {
		const svg = d3
			.select(inputRef.current)
			.append("svg")
			.attr("width", 700)
			.attr("height", 300)
			.attr("class", "barChart");

		svg
			.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", (_: number, i: number) => i * 70)
			.attr("y", (d: number) => 300 - 10 * d)
			.attr("width", 65)
			.attr("height", (d) => d * 10)
			.attr("fill", "green");
	};

	const initBarChartBox = () => {
		d3.select(inputRef.current).selectAll(".barChart").remove();
	};

	return <div className="barChartBox" ref={inputRef}></div>;
};
export { BarChart };

import { useEffect, useState } from "react";

interface WindowSize {
	width: number;
	height: number;
}

export default function useWindowSize(): WindowSize {
	const [width, setWidth] = useState<number>(window.innerWidth);
	const [height, setHeight] = useState<number>(window.innerHeight);

	useEffect(() => {
		const onResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	return { width, height };
}

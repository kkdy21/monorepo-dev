import { TgButton, NormalButton, StyledButton, EmButton, BarChart, DynamicSvgIcon } from "@package/common-components";
import "./App.scss";

function App() {
	// eslint-disable-next-line
	console.log("test");
	return (
		<div className="testBox">
			<TgButton>Test</TgButton>
			<NormalButton></NormalButton>
			<StyledButton className="testBtn">testBtn</StyledButton>
			<EmButton>test</EmButton>
			<BarChart></BarChart>
			<DynamicSvgIcon iconProps={{ name: "arrow-right", color: "red", size: 40 }}></DynamicSvgIcon>
			<DynamicSvgIcon iconProps={{ name: "face-smile", color: "blue", size: 40 }}></DynamicSvgIcon>
			<DynamicSvgIcon iconProps={{ name: "asd", color: "blue", size: 40 }}></DynamicSvgIcon>
			<img style={{ width: "100px", height: "100px" }} src="/images/testImage1.png" />
		</div>
	);
}

export default App;

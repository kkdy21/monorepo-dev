import { TgButton, NormalButton, StyledButton, EmButton, CmpIcon, BarChart, TgImg } from "@package/common-components";
import "./App.scss";

function App() {
	// eslint-disable-next-line
	console.log("test");
	return (
		<div className="testBox">
			<TgButton>Test</TgButton>
			<TgImg url="testImage1.png"></TgImg>
			<NormalButton></NormalButton>
			<StyledButton className="testBtn">testBtn</StyledButton>
			<EmButton>test</EmButton>
			<CmpIcon iconName={"up"}></CmpIcon>
			<CmpIcon iconName={"zap"}></CmpIcon>
			<BarChart></BarChart>
		</div>
	);
}

export default App;

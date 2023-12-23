import { TgButton, NormalButton, StyledButton, EmButton, CmpIcon } from "@package/common-components";
import "./App.scss";

function App() {
	console.log("test");
	return (
		<>
			<TgButton>Test</TgButton>
			{/*<TgImg url="testImage1.png"></TgImg>*/}
			<NormalButton></NormalButton>
			<StyledButton className="testBtn">testBtn</StyledButton>
			<EmButton>test</EmButton>
			<CmpIcon iconName={"up"}></CmpIcon>
			<CmpIcon iconName={"zap"}></CmpIcon>
		</>
	);
}

export default App;

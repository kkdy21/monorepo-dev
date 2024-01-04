import { useState } from "react";

function Form() {
	const [text, setText] = useState("initText");
	const [showText, setShowText] = useState(true);
	return (
		<div>
			{showText && (
				<input
					type="text"
					ref={(ref) => ref && setText("initText")}
					value={text}
					onChange={(e) => e.target.value}
				></input>
			)}

			<button onClick={() => setShowText(!showText)}>보이기/가리기</button>
		</div>
	);
}

const TestPage = () => {
	return <Form></Form>;
};

export { TestPage };

import React, { ReactElement, useEffect, useState } from "react";

export interface IconProps {
	name: string;
	color?: string;
	size?: string | number;
	onClick?: () => void;
}

const NORMAL_STROKE_COLOR = "#0A0400";

const DynamicSvgIcon: React.FC<{ iconProps: IconProps }> = ({ iconProps }): ReactElement => {
	const [SvgComponent, setSvgComponent] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
	const strokeColor = iconProps.color || NORMAL_STROKE_COLOR;
	const widthPx =
		iconProps.size &&
		(typeof iconProps.size === "number" ? `${iconProps.size}px` : `${iconProps.size.replace("px", "")}px`);

	useEffect(() => {
		const importSvg = async () => {
			try {
				const importedIcon = await import(`../../../../shared-asset/svgs/${iconProps.name}.svg?react`);
				setSvgComponent(() => importedIcon.default);
			} catch (err) {
				console.error("Icon loading error:", err);
				setSvgComponent(null);
			}
		};

		importSvg();
	}, [iconProps.name]);

	if (!SvgComponent) {
		return <div>Loading icon...</div>;
	}

	return (
		<SvgComponent
			onClick={iconProps.onClick}
			css={{
				color: strokeColor,
				width: widthPx,
				height: "auto",
				path: {
					stroke: "currentColor",
				},
			}}
		/>
	);
};

export { DynamicSvgIcon };

import React, { useState, useEffect } from "react";
import * as SVG from "./svgs";

interface DynamicSVG {
  iconName: keyof typeof SVG;
}

const CmpIcon: React.FC<DynamicSVG> = ({ iconName }) => {
  const [SvgComponent, setSvgComponent] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);

  useEffect(() => {
    setSvgComponent(() => SVG[iconName]);
  }, [iconName]);

  if (!SvgComponent) {
    return <></>;
  }

  return <SvgComponent />;
};

export { CmpIcon };

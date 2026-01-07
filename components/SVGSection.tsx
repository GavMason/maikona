'use client';

import { useEffect, useState } from 'react';

interface SVGSectionProps {
  name: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SVGSection({ name, id, className = '', style }: SVGSectionProps) {
  const [desktopSvg, setDesktopSvg] = useState<string>('');
  const [mobileSvg, setMobileSvg] = useState<string>('');

  useEffect(() => {
    // Load desktop SVG
    fetch(`/svgs/${name}-desktop.svg`)
      .then(res => res.text())
      .then(setDesktopSvg)
      .catch(console.error);

    // Load mobile SVG
    fetch(`/svgs/${name}-mobile.svg`)
      .then(res => res.text())
      .then(setMobileSvg)
      .catch(console.error);
  }, [name]);

  return (
    <div className={`section-container ${className}`} style={style}>
      {id && <a className="section-anchor" id={id}></a>}
      <div className="section-wrapper">
        <div
          className="section-svg desktop"
          dangerouslySetInnerHTML={{ __html: desktopSvg }}
        />
        <div
          className="section-svg mobile"
          dangerouslySetInnerHTML={{ __html: mobileSvg }}
        />
      </div>
    </div>
  );
}

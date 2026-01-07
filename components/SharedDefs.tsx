'use client';

import { useEffect, useState } from 'react';

export default function SharedDefs() {
  const [defs, setDefs] = useState<string>('');

  useEffect(() => {
    fetch('/svgs/shared-defs.svg')
      .then(res => res.text())
      .then(setDefs)
      .catch(console.error);
  }, []);

  return (
    <div
      style={{ position: 'absolute', zIndex: -1, opacity: 0 }}
      dangerouslySetInnerHTML={{ __html: defs }}
    />
  );
}

"use client";

import * as React from "react";

/**
 * Mide la altura real de un elemento (por ejemplo, el navbar fijo) y la
 * publica como variable CSS en :root. Esto evita depender de valores fijos
 * "a ojo" (como `pt-36`) que se desincronizan en cuanto el navbar cambia de
 * tamaño por wrap de texto, zoom, o una fuente distinta.
 */
export function useCssVarFromHeight<T extends HTMLElement>(cssVarName: string, fallbackPx: number) {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setVar = (height: number) => {
      document.documentElement.style.setProperty(cssVarName, `${Math.round(height)}px`);
    };

    setVar(el.offsetHeight || fallbackPx);

    const observer = new ResizeObserver(() => {
      setVar(el.offsetHeight);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [cssVarName, fallbackPx]);

  return ref;
}

export type ClickPosition = {
  x: number;
  y: number;
}

export const getClickPosition = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>, 
  colorPickerRef: React.RefObject<HTMLDivElement>): ClickPosition => {

  let x: number = 0;
  let y: number = 100;

  if (colorPickerRef.current) {
    x = e.pageX + 1 - colorPickerRef.current.offsetLeft;
    y -= (e.pageY + 1 - colorPickerRef.current.offsetTop);
  }
  
  return {
    x, y
  }
}

export type HSV = {
  h: number;
  s: number;
  v: number;
}

export type RGB = {
  r: number;
  g: number;
  b: number;
}

export const HSVtoRGB = (HSVObject: HSV): RGB => {

  const { h, s, v } = HSVObject;
  let r, g, b, i, f, p, q, t: number;
  
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);

  switch (i % 6) {
      case 0: r = v; g = t; b = p; break;
      case 1: r = q; g = v; b = p; break;
      case 2: r = p; g = v; b = t; break;
      case 3: r = p; g = q; b = v; break;
      case 4: r = t; g = p; b = v; break;
      case 5: r = v; g = p; b = q; break;
      default: r=0; g=0; b=0;
  }

  return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
  };
}
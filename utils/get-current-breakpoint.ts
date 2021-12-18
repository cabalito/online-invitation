import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js'; // Fix the path

// @ts-ignore
const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: string): number =>
  // @ts-ignore
  +fullConfig.theme.screens[value].slice(
    0,
    // @ts-ignore
    fullConfig.theme.screens[value].indexOf('px')
  );

export const getCurrentBreakpoint = (): string | undefined => {
  if (typeof window === 'undefined') {
    return;
  }
  let currentBreakpoint: string | undefined;
  let biggestBreakpointValue = 0;
  // @ts-ignore
  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }
  return currentBreakpoint;
};

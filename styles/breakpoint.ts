import { css, FlattenSimpleInterpolation } from 'styled-components'

export type ResponsiveRuleValue<T> = T | ResponsiveRuleTuple<T>
type ResponsiveRuleTuple<T> = [
  T, // default value
  ResponsiveRuleMap<T>? // this allows omittion of second value
]
// can take either a bp size prop (sm, md, lg, etc.)
// or a number representing the pixel width of the breakpoint
export type ResponsiveRuleMap<T> = {
  [key in BreakpointSizes | number]?: T // responsive values
}

type ValueMapFunction<T extends string | number> = (value: T) => string
type ReturnCSS = FlattenSimpleInterpolation | ''
export type ResponsiveRulesReturn = ReturnCSS[]
type SortableBreakpointTuple<T> = [number, T | undefined]

enum BreakpointSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

type BreakpointMap = { [key in BreakpointSizes]: number }

export const breakpoints: BreakpointMap = {
  [BreakpointSizes.sm]: 400,
  [BreakpointSizes.md]: 768,
  [BreakpointSizes.lg]: 1200,
  [BreakpointSizes.xl]: 1500,
}

/**
 *
 * @param size either string representation eg. 'sm' or a number representing the width in pixels of the breakpoint
 * @returns
 */
export const bp = (size: BreakpointSizes | number): string =>
  `@media only screen and (min-width: ${
    typeof size === 'number' ? size : breakpoints[size]
  }px)`

/* TODO (matthewalbrecht): Consider allowing valueMapFunction to be passed in through prop value */
/**
 *
 * @param cssStyle css rule name
 * @param responsiveRuleValue either a string of the value for the rule or a tuple: [default, {[breakpoint | number]: value}]
 * @param valueMapFunction function that maps the given value to the needed value (40 -> 40px)
 * @returns responsive rulesets for the given cssStyle
 */
export function buildResponsiveRules<T extends string | number>(
  cssStyle: string,
  responsiveRuleValue: ResponsiveRuleValue<T>,
  valueMapFunction?: ValueMapFunction<T>
): ResponsiveRulesReturn {
  let defaultValue: T
  let values: ResponsiveRuleMap<T> | undefined

  if (typeof responsiveRuleValue !== 'object') {
    defaultValue = responsiveRuleValue
  } else {
    defaultValue = responsiveRuleValue[0]
    values = responsiveRuleValue[1]
  }

  const defaultStyle = css`
    ${getRule(cssStyle, defaultValue, valueMapFunction)}
  `

  const responsiveStyles = values
    ? Object.entries(values)
        // convert first el in tuple to pixel size
        .map((entry) => {
          const parsedProperty = parseInt(entry[0])
          const breakpointSize = isNaN(parsedProperty)
            ? breakpoints[entry[0] as BreakpointSizes]
            : parsedProperty
          const sortableResponsiveTuple: SortableBreakpointTuple<T> = [
            breakpointSize,
            entry[1],
          ]
          return sortableResponsiveTuple
        })
        // sort tuples in ascending order based on bp size
        // this is needed so that the correct styles are applied
        // at all the breakpoints
        .sort((a, b) => a[0] - b[0])
        // create the media queries
        .map(([breakpointSize, value]) => {
          if (value == null) return ''
          const bpString = bp(breakpointSize)
          const rule = getRule(cssStyle, value, valueMapFunction)
          return css`
            ${bpString} {
              ${rule}
            }
          `
        })
    : []

  return [defaultStyle, ...responsiveStyles]
}

/**
 *
 * @param cssStyle css rule name
 * @param value value for the rule
 * @param valueMapFunction function that maps the given value to the needed value (40 -> 40px)
 * @returns the css rule
 */
function getRule<T extends string | number>(
  cssStyle: string,
  value: T,
  valueMapFunction?: ValueMapFunction<T>
): string {
  const ruleValue = valueMapFunction ? valueMapFunction(value) : value
  return `${cssStyle}: ${ruleValue};`
}

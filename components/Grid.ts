// adapted from: https://github.com/azz/styled-css-grid

import styled, { css } from 'styled-components'
import { BaseProps, baseStyles, convertRhythmToRems } from 'styles/base'
import {
  buildResponsiveRules,
  ResponsiveRuleMap,
  ResponsiveRuleValue,
} from 'styles/breakpoint'
import { toRems } from 'styles/theme'

type JustifyAlignContentValues =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
type Flow = 'row' | 'column' | 'row dense' | 'column dense'

const frGetter = (value: string | number): string =>
  typeof value === 'number' ? `repeat(${value}, 1fr)` : value

const formatAreas = (areas: string[]) =>
  areas.map((area: string) => `"${area}"`).join(' ')

type GridProps = BaseProps & {
  columns?: ResponsiveRuleValue<string | number>
  rows?: ResponsiveRuleValue<string | number>
  gap?: ResponsiveRuleValue<number>
  columnGap?: ResponsiveRuleValue<number>
  rowGap?: ResponsiveRuleValue<number>
  minRowHeight?: ResponsiveRuleValue<number>
  height?: string
  flow?: ResponsiveRuleValue<Flow>
  /* TODO (matthewalbrecht): buildResponsiveRules should be able to handle this case (array of strings) */
  areas?: ResponsiveRuleValue<string[]> // responsive
  justify?: ResponsiveRuleValue<JustifyAlignContentValues>
  align?: ResponsiveRuleValue<JustifyAlignContentValues>
  gridAutoRows?: ResponsiveRuleValue<string>
}

export const Grid = styled.div<GridProps>`
  ${baseStyles}

  display: grid;
  height: ${({ height = 'auto' }) => height};
  ${({ flow = 'row' }) => buildResponsiveRules<Flow>('grid-auto-flow', flow)}
  ${({ minRowHeight }) =>
    minRowHeight != null &&
    buildResponsiveRules<number>(
      'grid-auto-rows',
      minRowHeight,
      (rowHeight) => `minmax(${toRems(rowHeight)}, auto)`
    )}
  ${({ gridAutoRows }) =>
    gridAutoRows != null &&
    buildResponsiveRules<string>('grid-auto-rows', gridAutoRows)}
  ${({ columns = 12 }) =>
    buildResponsiveRules<string | number>(
      'grid-template-columns',
      columns,
      frGetter
    )}
  ${({ rows }) =>
    rows &&
    buildResponsiveRules<string | number>('grid-template-rows', rows, frGetter)}
  ${({ gap }) =>
    gap != null &&
    buildResponsiveRules<number>('grid-gap', gap, convertRhythmToRems)}
  ${({ columnGap }) =>
    columnGap != null &&
    buildResponsiveRules<number>('column-gap', columnGap, convertRhythmToRems)}
  ${({ rowGap }) =>
    rowGap != null &&
    buildResponsiveRules<number>('row-gap', rowGap, convertRhythmToRems)}
  ${({ justify }) =>
    justify &&
    buildResponsiveRules<JustifyAlignContentValues>('justify-content', justify)}
  
  ${({ align }) =>
    align && buildResponsiveRules<JustifyAlignContentValues>('align-content', align)}
  ${({ areas }) =>
    areas &&
    buildResponsiveRules<string>('grid-template-areas', convertAreaValues(areas))}
`

export type CellProps = BaseProps & {
  $width?: ResponsiveRuleValue<number>
  $height?: ResponsiveRuleValue<number>
  top?: ResponsiveRuleValue<string | number>
  left?: ResponsiveRuleValue<string | number>
  area?: ResponsiveRuleValue<string>
  /**  TODO (matthewalbrecht):
   * make responsive: build function that takes a set of rules and show/hide them on different breakpoints
   * middle={[true, {sm: false}]}
   */
  middle?: boolean // responsive
  justify?: ResponsiveRuleValue<JustifyAlignContentValues>
  align?: ResponsiveRuleValue<JustifyAlignContentValues>
  elementHeight?: ResponsiveRuleValue<string>
}

export const Cell = styled.div<CellProps>`
  ${baseStyles}

  min-width: 0;
  ${({ elementHeight = '100%' }) =>
    buildResponsiveRules<string>('height', elementHeight)};
  ${({ $width = 1 }) =>
    buildResponsiveRules<number>('grid-column-end', $width, getSpanFromValue)};
  ${({ $height = 1 }) =>
    buildResponsiveRules<number>('grid-row-end', $height, getSpanFromValue)};
  ${({ left }) =>
    left && buildResponsiveRules<string | number>('grid-column-start', left)}
  ${({ top }) => top && buildResponsiveRules<string | number>('grid-row-start', top)}
  ${({ area }) => area && buildResponsiveRules<string>('grid-area', area)}
    ${({ justify }) =>
    justify &&
    buildResponsiveRules<JustifyAlignContentValues>('justify-self', justify)}
  ${({ align }) =>
    align && buildResponsiveRules<JustifyAlignContentValues>('align-self', align)}
  ${({ middle }) =>
    middle &&
    css`
      display: inline-flex;
      flex-flow: column wrap;
      justify-content: center;
      justify-self: stretch;
    `};
`

const getSpanFromValue = (value: number) => `span ${value}`

/**
 * Formats all the areas value from array of strings to a single string so that `buildResponsiveRules` will accept it
 * @param areasValue value from the `areas` prop: string[] or ResponsiveRuleTuple<string[]>
 */
const convertAreaValues = (
  areasValue: ResponsiveRuleValue<string[]>
): ResponsiveRuleValue<string> => {
  if (typeof areasValue[0] === 'string') {
    // if the first el is a string then we know user is using a single defualt value rather than the tuple
    return formatAreas(areasValue as string[])
  } else {
    const map = areasValue[1] as ResponsiveRuleMap<string[]> | undefined
    return [
      formatAreas(areasValue[0]),
      map
        ? Object.fromEntries(
            Object.entries(map).map(([bp, value]) => [
              bp,
              value ? formatAreas(value) : undefined,
            ])
          )
        : undefined,
    ]
  }
}

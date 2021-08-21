import { bp, breakpoints, buildResponsiveRules } from './breakpoint'

it('should return one default rule if not given tuple', () => {
  const rules = buildResponsiveRules<number>(
    'width',
    100,
    (size) => `${size}vw`
  ).flat()
  expect(rules).toHaveLength(1)
  expect(rules[0]).toBe('width: 100vw;')
})

it('should return one default rule given tuple with second el omitted', () => {
  const rules = buildResponsiveRules<number>(
    'width',
    [50],
    (size) => `${size}%`
  ).flat()
  expect(rules).toHaveLength(1)
  expect(rules[0]).toBe('width: 50%;')
})

it('should return one default rule, 1 media queries from small breakpoint', () => {
  const rules = buildResponsiveRules<number>(
    'width',
    [100, { sm: 90 }],
    (size) => `${size}%`
  )

  expect(rules).toHaveLength(2)

  const [rule1, rule2] = rules

  expect(rule1![0]).toBe('width: 100%;')

  expect(rule2![0]).toBe(bp(breakpoints.sm))
  expect(rule2![1]).toBe('{')
  expect(rule2![2]).toBe('width: 90%;')
  expect(rule2![3]).toBe('}')
})

it('should return one default rule, 3 media queries in ascending order', () => {
  const rules = buildResponsiveRules<number>(
    'width',
    [100, { 600: 90, 200: 50, 1100: 40 }],
    (size) => `${size}%`
  )

  expect(rules).toHaveLength(4)

  const [rule1, ...mediaQueryRules] = rules
  expect(rule1![0]).toBe('width: 100%;')

  const BREAKPOINT_REGEX = RegExp('[0-9]{1,4}', 'gi') // match 1 to 5 digit number
  const breakpointsInPixels = mediaQueryRules
    .map((rule) => (rule[0] as string).match(BREAKPOINT_REGEX))
    .flat()

  expect(breakpointsInPixels).toStrictEqual(['200', '600', '1100'])
})

it('should return handle non-null/undefined falsey values', () => {
  const rules = buildResponsiveRules<number>(
    'padding-left',
    [6, { sm: 0 }],
    (size) => `${size}px`
  )

  expect(rules).toHaveLength(2)

  const [rule1, bpRule] = rules
  expect(rule1![0]).toBe('padding-left: 6px;')

  expect(bpRule![2] != null)
  expect(bpRule![2]).toBe('padding-left: 0px;')
})

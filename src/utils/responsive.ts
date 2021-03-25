/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { breakpoints } from '@/theme/breakpoints'

const responsive = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) =>
    css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(literals, ...placeholders)};
      }
    `.join('')
  return acc
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => string>)

export const BreakPoints = (
  cssProp = 'padding',
  cssPropUnits = 'px',
  values: number[] = [],
  mediaQueryType = 'min-width',
): FlattenSimpleInterpolation => {
  const breaks = Object.values(breakpoints)
  const breakPointCss: string = values.reduce(
    (mediaQ: string, value, index) =>
      (mediaQ += `
      @media screen and (${mediaQueryType}: ${breaks[index]}) {
        ${cssProp}: ${value}${cssPropUnits};
      }
      `),
    '',
  )
  return css`
    ${breakPointCss}
  `
}
export default responsive

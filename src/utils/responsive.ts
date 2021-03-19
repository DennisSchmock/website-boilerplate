/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components'
import { breakpoints } from '@/theme/breakpoints'

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (
    literals: TemplateStringsArray,
    ...placeholders: any[]
  ) =>
    css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(literals, ...placeholders)};
      }
    `.join('')
  console.log(acc)
  return acc
}, {} as Record<keyof typeof breakpoints, (l: TemplateStringsArray, ...p: any[]) => string>)

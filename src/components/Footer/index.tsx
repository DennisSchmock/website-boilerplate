import React from 'react'
import Styled from './styled'

interface FooterProps {
  children?: React.ReactNode
}

const Footer = ({ children }: FooterProps): JSX.Element => (
  <Styled.Footer>Footer Placeholder{children}</Styled.Footer>
)

export default Footer

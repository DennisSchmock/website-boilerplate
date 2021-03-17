import React from 'react'
import { useParams } from 'react-router-dom'
import Styled from './styled'

interface ContentTemplateProps {
  children: React.ReactNode
}

interface UrlParams {
  params: string
}
const ContentTemplate = ({
  children,
}: ContentTemplateProps): JSX.Element => {
  const { params } = useParams<UrlParams>()
  return <Styled.Content>{children + params} </Styled.Content>
}

export default ContentTemplate

import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

interface ParamProps {
  id: string
}

const TestPage: FC = () => {
  const { id } = useParams<ParamProps>()
  return <div>TEST: {id}</div>
}

export default TestPage

import React, { FC } from 'react'

interface props {
  test: string
}

const index: FC<props> = ({ test }) => <div>{test}</div>

export default index

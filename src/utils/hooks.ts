import { useEffect, useState } from 'react'

const useViewport = (): { width: number } => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  return { width }
}

// eslint-disable-next-line import/prefer-default-export

export const MyComponent = (): boolean => {
  const { width } = useViewport()
  const breakpoint = 620
  console.log(width)
  return width < breakpoint
}

export { useViewport }

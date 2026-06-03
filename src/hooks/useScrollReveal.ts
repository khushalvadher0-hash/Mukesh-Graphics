import { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

export function useScrollReveal(options?: IntersectionObserverInit) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.18, ...options })
  const controls = useMemo(() => ({ ref, inView }), [ref, inView])
  return controls
}

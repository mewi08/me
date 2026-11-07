import { useLayoutEffect } from 'react'

// Elementos que aparecen con animación al entrar en pantalla
const REVEAL = [
  '.section-heading', '.about-text', '.about-card',
  '.tech-item',
  '.experience-card', '.project-card',
  '.education-group-heading', '.education-card', '.diploma-card',
  '.contact-info', '.contact-action',
].join(',')

// Tarjetas con foco de luz que sigue al mouse
const SPOTLIGHT = [
  '.about-card', '.experience-card',
  '.project-card', '.education-card', '.diploma-card',
].join(',')

function useScrollEffects() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups = []

    // 1. Aparición al hacer scroll (con retraso escalonado entre hermanos)
    if (!reduceMotion) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
      )

      const items = document.querySelectorAll(REVEAL)

      items.forEach((el) => {
        const index = Array.prototype.indexOf.call(el.parentElement.children, el)
        el.style.setProperty('--i', Math.min(index, 6))
        el.classList.add('reveal')
        observer.observe(el)
      })

      cleanups.push(() => {
        observer.disconnect()
        items.forEach((el) => {
          el.classList.remove('reveal', 'is-visible')
          el.style.removeProperty('--i')
        })
      })
    }

    // 2. Foco de luz en tarjetas
    const onPointerMove = (e) => {
      const card = e.target.closest?.(SPOTLIGHT)
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }

    document.addEventListener('pointermove', onPointerMove, { passive: true })
    cleanups.push(() => document.removeEventListener('pointermove', onPointerMove))

    // 3. Enlace activo del navbar según la sección visible
    const links = document.querySelectorAll('.navbar-link')

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          links.forEach((link) =>
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)
          )
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s))
    cleanups.push(() => spy.disconnect())

    return () => cleanups.forEach((fn) => fn())
  }, [])
}

export default useScrollEffects
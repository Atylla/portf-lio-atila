'use client'
import { useEffect, useState } from 'react'

export function Loading() {
    const [show, setShow] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const minDuration = 3000
        const startTime = Date.now()

        const handleLoad = () => {
            const elapsed = Date.now() - startTime
            const remaining = minDuration - elapsed

            setTimeout(() => {
                setFadeOut(true)
                setTimeout(() => setShow(false), 500)
            }, remaining > 0 ? remaining : 0)
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => window.removeEventListener('load', handleLoad)
    }, [])

    if (!show) return null

    return (
        <div
            className={`fixed inset-0 flex flex-col items-center justify-center bg-stone-900 text-white z-50 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <div className="animate-pulse text-2xl md:text-2xl font-bold">Carregando...</div>
            <div className="w-60 md:w-60 h-1 rounded-full bg-stone-700 overflow-hidden mt-6 relative">
                <div className="h-full bg-amber-500 rounded-full animate-progress"></div>
            </div>
        </div>
    )
}


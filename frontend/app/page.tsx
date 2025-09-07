'use client'

import dynamic from 'next/dynamic'
import './tldraw.css'
import { TldrawLogo } from './components/TldrawLogo'

const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
  ssr: false,
})

export default function App() {
  return (
    <div className="editor">
      <Tldraw persistenceKey="vibe-draw">
        <TldrawLogo />
      </Tldraw>
    </div>
  )
}

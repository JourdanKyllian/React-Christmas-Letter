import React from 'react'
import Gift from './Gift'

export default function Letter({ gifts }) {
  return (
    <div className="mx-auto bg-paper p-8 rounded-2xl shadow-xl relative border border-yellow-100/30 max-w-3xl">
      {/* folded corner */}
      <div className="corner" />

      <div className="prose text-brown mb-6">
        <p className="italic">Cher Père Noël,</p>
        <p>
          Cette année j'ai été très sage. Voici quelques idées de cadeaux qui me
          feraient très plaisir :
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {gifts.map((g) => (
          <Gift key={g.id} gift={g} />
        ))}
      </div>

      <div className="mt-6 text-sm text-brown/80">Merci beaucoup et joyeuses fêtes !</div>
    </div>
  )
}

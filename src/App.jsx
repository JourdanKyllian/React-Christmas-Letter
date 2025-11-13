import React from 'react'
import Header from './components/Header'
import Letter from './components/Letter'

const gifts = [
  { id: 1, title: 'Apple watch serie 10 46mm', img: '/React-Christmas-Letter/aw.png', link: 'https://www.boulanger.com/ref/1211660?offer=33dbc973-0369-48e0-94b6-38d54b4c59ed' },
  { id: 2, title: 'Balance connectée apple', img: '/React-Christmas-Letter/balance.jpeg', link: 'https://www.apple.com/fr/shop/product/hqyd2zm/a/body-smart-de-withings-balance-connect%C3%A9e-avec-analyse-corporelle-avanc%C3%A9e' },
  { id: 3, title: 'Une porsche' , img: '/React-Christmas-Letter/porsche.png', link: 'https://www.leboncoin.fr/recherche?category=2&text=porsche+911&kst=p&pi=da65663e-c695-4a67-8cb3-707efbbd288e' }
];

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-900 relative p-6 overflow-hidden">
  {/* Background SVG patterns */}
  <div className="absolute inset-0 z-0 pointer-events-none">
  <svg className="w-full h-full">
    <defs>
      <pattern id="treePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        {/* Sapin plus visible */}
        <text x="0" y="15" fontSize="16" fill="rgba(255,255,255,0.15)">🎄</text>
        {/* Étoile plus visible */}
        <text x="20" y="30" fontSize="16" fill="rgba(255,255,255,0.15)">⭐</text>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#treePattern)" />
  </svg>
</div>


  <div className="relative max-w-4xl w-full z-10">
    <Header />
    <Letter gifts={gifts} />
  </div>
</div>

  )
}

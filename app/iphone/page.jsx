import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <p>New</p>
      <h3>iPhone 14</h3>
      <h2>Wonderfull</h2>
      <p>From $799 or $33.29/mo. for 24 mo. before trade‑in2</p>
      <div>
        <button>Buy</button>
        <Link href="#">Learn More</Link>
      </div>
      <div>
        <Image src="/iphones.png" fill={true} alt="iphones picture"/>
      </div>
    </div>
  )
}
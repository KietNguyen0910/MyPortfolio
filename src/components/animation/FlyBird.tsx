// src/components/animation/flyBird/index.tsx

import React from 'react'

const birds = [
  { container: 'bird-container-one', bird: 'bird-one' },
  { container: 'bird-container-two', bird: 'bird-two' },
  { container: 'bird-container-three', bird: 'bird-three' },
  { container: 'bird-container-four', bird: 'bird-four' },
]
type Props = {
  classCustom?: string
  colorBird?: 'white' | 'primary' | string
}
const FlyBird: React.FC<Props> = ({ classCustom, colorBird }) => {
  return (
    <>
      {birds.map(({ container, bird }, index) => (
        <div key={index} className={`bird-container pointer-events-none ${classCustom} ${container}`}>
          <div className={`bird ${bird} ${colorBird}`} />
        </div>
      ))}
    </>
  )
}

export default FlyBird

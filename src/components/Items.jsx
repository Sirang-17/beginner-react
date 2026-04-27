import React from 'react'

const Items = () => {
  const age = 20;
  return (
    <div>
      {age >= 18 ? (
        <><h2>You are an adult</h2>
        </>
      ) : (
        <>
          <h2>You are not an adult</h2>
        </>
      )}
    </div>
  )
}

export default Items

import React from 'react'

const Items = () => {
  const adhaar = true;
  const gmail = false;

  return (
    <>
    {adhaar && <p>You can open bank account.</p>}
    {gmail && <p>You can create YouTube channel.</p>}
    </>
  )
}

export default Items

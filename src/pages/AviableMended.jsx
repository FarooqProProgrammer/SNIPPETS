import React from 'react'
import Sidebar from '../snippets/Sidebar'
import Mended from '../snippets/AvialableMended'

export default function AviableMended() {
  return (
    <div className='flex'>
      <Sidebar />
      <Mended />
    </div>
  )
}

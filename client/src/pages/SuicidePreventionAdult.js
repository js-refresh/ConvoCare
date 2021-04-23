import React from 'react'
import Disclaimer from '../components/Disclaimer'
import Sidebar from '../components/Sidebar'

export default function SuicidePreventionAdult() {
  return (
    <div>
      <div>
        <h1 className="page-header">Breaking the silence of Mental Health</h1>
        <div className="page-wrapper">
          <Sidebar />
          <div className="page-container">

            <h3>Suicide Prevention for Adults.</h3>

            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  )
}

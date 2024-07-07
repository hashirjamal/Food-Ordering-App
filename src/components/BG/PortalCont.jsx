import React, { Fragment } from 'react'
import ReactDOM from "react-dom"
export default function PortalCont({children}) {
  return (
    <Fragment>
        {ReactDOM.createPortal(
            {...children},
            document.getElementById('bg')
        )}
    </Fragment>
  )
}

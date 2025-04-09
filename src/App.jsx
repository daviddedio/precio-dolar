import { useEffect, useState } from "react"
import { PrecioDolar } from "../components/PrecioDolar/PrecioDolar"
import { PrecioCripto } from "../components/PrecioCripto/PrecioCripto"

import './App.css'

export const App = () => {


    return( 
        <>
          <PrecioDolar/>
          <hr />
          <PrecioCripto/>
        </>
    )
}

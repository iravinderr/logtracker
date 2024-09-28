import React from 'react'
import Component from "./assets/graph-comp"
import { ThemeProvider } from "./components/ui/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    {<div><Component/></div>}
  </ThemeProvider>
    
  )
}

export default App



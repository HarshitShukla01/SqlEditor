import React from 'react'
import Navbar from './components/AppBar/NavbarMain';
// const TableMain = React.lazy(() =>
//   import("./components/TableCreate/TableMain")
// );
import TableTabs from './components/TableCreate/TableTabs'

const App = () => {

  return (    
    <>
    <Navbar />
    <TableTabs/>
    </>
  )
}

export default App
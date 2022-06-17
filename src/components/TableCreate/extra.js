import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TableTabs() {
  const [value, setValue] = React.useState('one');
  const [cvalue,setCValue] = React.useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [arr,setArr] = React.useState(["one"]);
  const createADD = ()=>{
    setArr((prev) => {
      const r = "chk"+cvalue;
      setCValue(p => p+1);
      console.log(cvalue)
      return [...prev,r]
    })
  }
  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {arr.map((val,index) => {
           return <Tab value={val} label="Item One" />
        })}


      </Tabs>

    </Box>
    <button onClick={createADD}> submit</button>
    </>
  );
}
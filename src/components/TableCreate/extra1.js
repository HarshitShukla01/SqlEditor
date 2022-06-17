import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TableTabs({queryValue}) {
  const [value, setValue] = React.useState('one');
  const [cvalue,setCValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [arr,setArr] = React.useState(["one"]);
  const createADD = ()=>{
    setArr((prev) => {
      const r = "qytab_id_"+cvalue;
      setCValue(p => p+1);
      console.log(cvalue)
      return [...prev,r]
    })
  }
  const TabChangeFunc = () => {

  }
  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        variant='scrollable'
        scrollButtons="auto"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {arr.map((val,index) => {
           const labelVal = "Item "+index;
           return <Tab value={val} label={labelVal} onChange={TabChangeFunc}/>
        })}
      </Tabs>

    </Box>
    <button onClick={createADD}> submit</button>
    </>
  );
}
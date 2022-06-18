import React from 'react'
import ListItemText from "@mui/material/ListItemText";
const DrwerInnerItem = ({text,arrTable}) => {
    const DataArrColFunc = () => {
        let tArr =[];
        for(let y in arrTable[text]["columns"]){
          tArr.push(arrTable[text]["columns"][y]);
         }
        return tArr;
     }
    const [arrCol,setArrCol] = React.useState(DataArrColFunc());
   
    // DataArrColFunc();
  return (
    <>
       {
        arrCol.map((text1, index) => (
            <>
            <ListItemText primary={text1["name"]} />
            <ListItemText primary={text1["type"]} />
            <br/>
            </>
        ))
       }
       {/* <ListItemText primary={text} /> */}
       
    </>
  )
}

export default DrwerInnerItem
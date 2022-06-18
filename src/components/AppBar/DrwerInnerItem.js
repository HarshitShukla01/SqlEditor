import React from 'react'
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const DrwerInnerItem = ({text,arrTable}) => {
    const DataArrColFunc = () => {
        let tArr =[];
        for(let y in arrTable[text]["columns"]){
          tArr.push(arrTable[text]["columns"][y]);
         }
        return tArr;
     }
    const [arrCol,setArrCol] = React.useState(DataArrColFunc());
    const fieldValFunc = (a,b) => {
        const r = a+" ("+b+")";
        return <span style={{display: "flex"}}>
            <ArrowRightAltIcon />{r}
        </span>
    }
    // DataArrColFunc();
  return (
    <>
       {
        arrCol.map((text1, index) => (
            <>
            <List sx={{ display: "flex",padding:"0px",margin:"0px"}}>
              <ListItemText 
                 primary={fieldValFunc(text1["name"],text1["type"])} 
                 sx={{ display: "flex",justifyContent: "start",padding:"0px",paddingLeft:"15%",margin:"0px"}}/>
              {/* <ListItemText primary={text1["type"]} sx={{ display: "flex",justifyContent: "center"}}/> */}
            </List>
            <br/>
            </>
        ))
       }
       {/* <ListItemText primary={text} /> */}
       
    </>
  )
}

export default DrwerInnerItem
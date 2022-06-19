import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Editor from '../Editor/EditorMain';
// import "react-tabs/style/react-tabs.css";
import './styles.css';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export default function TableTabs() {
  const [arrHead, setArrHead] = React.useState(["Tab 1"]);
  const [arrBody, setArrBody] = React.useState([""]);
  const [arrResult, setArrResult] = React.useState([false]);
  const [tabCount, settabCount] = React.useState(2);
  const [colorOk, setColorOk] = React.useState(0);
  const intialValueChkFunc = () => {
    const deviceWidth = window.innerWidth;
    if (deviceWidth < 768) return false;
    return true;
  }
  const [showTabsList, setShowTabsList] = React.useState(intialValueChkFunc());

  const AddTabFunc = () => {
    setArrHead((prev) => {
      const r = "Tab " + (tabCount);
      settabCount(p => p + 1);
      return [...prev, r]
    })
    setArrBody((prev) => {
        return [...prev, ""]
    })
    setArrResult((prev) => {
        return [...prev, false]
    })
  }
  // const editTabFunc = (index) => {
  //   const prompt = window.prompt("Enter new tab name");
  //   if(prompt){
  //     if(prompt.length >= 6){
  //       alert("Tab name must be less than or equal to 6 characters");
  //     }
  //     else{
  //      arrHead[index] = prompt;
  //      setArrHead([arrHead]);
  //     }
  //   }
  // }
  const refresfDataFunc = (index) => {
    arrResult[index] = false;
    setArrResult(arrResult);
    arrBody[index] = "";
    setArrBody(arrBody);
  }
  const deleteTabFunc = (index) => {
    if(arrHead.length === 1){
      alert("You can't delete the last tab");
    }
    else{
    
    refresfDataFunc(index);

    arrBody.splice(index, 1);
    arrResult.splice(index, 1);
    arrHead.splice(index, 1);
    
    setArrBody([...arrBody]);
    setArrResult([...arrResult]);}
    setArrHead([...arrHead]);
  }
  const ClickTabFunc = (pt) =>{
    setColorOk(pt);
  }

  return (
    <div className="App">
      <Tabs>
        {!showTabsList ? null : <div className="divLeftTab">
          <TabList>
          {
              arrHead.map((val,index) => {
                  return <Tab onClick={() => ClickTabFunc(index)} style={{display:"flex",justifyContent: "space-between"}}>
                  <p style={{fontWeight: "800"}}>{val} </p>
                  <IconButton style={{display:"flex",justifyContent: "space-between",color : (colorOk === index ? "white" : "grey")}}>
                    {/* <EditIcon onClick={() => editTabFunc(index)} style={{paddingRight:"4px",color : (colorOk === index ? "white" : "grey")}} /> */}
                    <DeleteIcon onClick={() => deleteTabFunc(index) } style={{}}/>
                  </IconButton>
                  </Tab>
              })
              
          }
          
          </TabList>
          <TabList style={{height:"6%",padding:"1px",border:"0px",}}>
            <Button onClick={AddTabFunc} variant="contained" color="success"> 
                {/* <AddBoxIcon /> */}
                ADD TAB +
            </Button>
          </TabList>
        </div>
        }
        {
            arrBody.map((val,index) => {
                return <TabPanel>
                    <div className="panel-content">
                        <Editor 
                          arrBody={arrBody} 
                          arrIndex={index} 
                          setArrBody={setArrBody} 
                          setArrResult = {setArrResult}
                          arrResult={arrResult}
                          arrHead={arrHead}
                          setShowTabsList={setShowTabsList}
                        />
                    </div>
                </TabPanel>
            })
        }
        
      </Tabs>

      
    </div>
  );
}


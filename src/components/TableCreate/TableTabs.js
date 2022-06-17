import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Editor from '../Editor/EditorMain';
// import "react-tabs/style/react-tabs.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import './styles.css';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TableTabs() {
  const [arrHead, setArrHead] = React.useState(["Tab 1"]);
  const [arrBody, setArrBody] = React.useState([""]);
  const [arrResult, setArrResult] = React.useState([false]);

  const AddTabFunc = () => {
    setArrHead((prev) => {
      const r = "Tab " + (arrHead.length+1);
      return [...prev, r]
    })
    setArrBody((prev) => {
        return [...prev, ""]
    })
    setArrResult((prev) => {
        return [...prev, false]
    })
  }
  const editTabFunc = (index) => {
    const prompt = window.prompt("Enter new tab name");
    if(prompt){
      if(prompt.length >= 4){
        alert("Tab name must be less than or equal to 4 characters");
      }
      else{
       arrHead[index] = prompt;
       setArrHead([arrHead]);
      }
    }
  }
  const refresfDataFunc = (index) => {
    arrResult[index] = false;
    setArrResult(arrResult);
    arrBody[index] = "";
    setArrBody(arrBody);
  }
  const deleteTabFunc = (index) => {
    if(arrHead.length == 1){
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
  return (
    <div className="App">
      <Tabs>
        <div>
          <TabList>
          {
              arrHead.map((val,index) => {
                  return <Tab>
                  <p >{val}
                  <IconButton >
                    <EditIcon onClick={() => editTabFunc(index)}/>
                  </IconButton>
                  <IconButton>
                    <DeleteIcon onClick={() => deleteTabFunc(index) }/>
                  </IconButton>
                  </p>
                  </Tab>
              })
              
          }
          
          </TabList>
          <TabList style={{height:"5%",padding:"0px"}}>
            <button onClick={AddTabFunc} className="buttonCreateNewTab"> 
                {/* <AddBoxIcon /> */}
                ADD TAB
            </button>
          </TabList>
        </div>
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
                        />
                    </div>
                </TabPanel>
            })
        }
        
      </Tabs>

      
    </div>
  );
}


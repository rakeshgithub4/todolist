import React, {useState} from 'react';
import Sidebar from "./Sidebar";
import Task from "./Task";


const Content = () => {
    let [selectedTab,setSelectedTab] = useState("INBOX");
    return (
        <section className = "content">
           <Task />
           <Sidebar selectedTab = {selectedTab} setSelectedTab = {setSelectedTab}/>
        </section>
    );
}

export default Content;

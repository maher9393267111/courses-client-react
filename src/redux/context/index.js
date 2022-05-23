import React,{useState} from "react";
import axios from 'axios'

const MyContext = React.createContext({

    dataContact:[],
    setDataContact: ()=>{},
    handleDelect:() =>{},
    showModal: "",
    setShowModal: ()=>{},
    handleClose:() =>{},
    fetchPot:() =>{},
    numberID:"",
    setNumberId:()=>{},
    fetchPut: ()=>{},
    fetchSearch: ()=>{},
  

    


});




export const DataContextProvided = props=>{

    const [dataContact, setDataContact] = useState([]);
    const [showModal,setShowModal] = useState(false);
    const [numberID,setNumberId] =useState("")
    const [hello,setHello] = useState("maherhello")

    const handleDelect =  async (id) =>{

        const response = await fetch(`http://localhost:3500/register/${id}`,{
            method:"DELETE"
        });

        return response

    }


    const fetchPot = async (data) => {

        const response = await fetch("http://localhost:3500/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }

        });
        const dataRegister = await response.json()
        return dataRegister;

    }

    const fetchPut = async (id,data) =>{

        const response = await fetch(`http://localhost:3500/register/${id}`,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{'content-type':'application/json'}

        });
        
        const dataPut = await response.json()
        return dataPut;

    }

    const fetchSearch =  async (searchData) =>{

        const response = await fetch("http://localhost:3500/register"+ searchData);

        const data = await response.json()

        return data
    }

    const handleClose = () =>{
        setShowModal(null)


    }

    return(

        <MyContext.Provider value={{ dataContact,setDataContact, handleDelect,hello,
            showModal,setShowModal,handleClose ,fetchPot,numberID,setNumberId, fetchPut, 
            fetchSearch}}>
            {props.children}
        </MyContext.Provider>

    )
}

export default MyContext
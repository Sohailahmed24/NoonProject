import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from "axios"

function App() {
 const [data,setData]=useState([])
// const API_BASE_URL = process.env.VITE_API_BASE_URL;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log('API Base URL:', API_BASE_URL);
console.log('API Base URL:', import.meta.env.VITE_API_BASE_URL);

 useEffect(()=>{
 /*  fetchData() */
  noonFetch()
  noonFetchSearch()
  noonFetchGuest()
  fetchQury()
 },[])
 /* const fetchData=async()=>{
    const {data}=await axios.get("/api/product")
    console.log(data)
 } */

 const noonFetch=async()=>{
  const {data}=await axios.get(`${API_BASE_URL}/api/`)
 // const {data}=await axios.get(`/api/`)
  console.log(data)
 }
 const noonFetchSearch=async()=>{
  const {data}=await axios.get("/api/search")
  console.log(data)
 }
 const noonFetchGuest=async()=>{
  try {
    const { data } = await axios.get("/guest",{outletCode:"KFCPLQCFT0"},{
      headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Example header
        'Content-Type': 'application/json' // Other headers as needed
      }
    }); // No need to include the full URL
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
 }
 const fetchQury=async()=>{
  try {
    const {data}=await axios.get("/api/suggestions?q=a")
    console.log(data)
  } catch (error) {
     console.log(error)
  }
 }

 
  return (
    <>
      <h1>Fetch data</h1>

    </>
  )
}

export default App

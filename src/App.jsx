import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from "axios"

function App() {
 const [data,setData]=useState([])
 const API_BASE_URL = process.env.VITE_API_BASE_URL;
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

 function Menu(e) {
  let list = document.querySelector('ul');

  if (e.target.getAttribute('name') === 'menu') {
    e.target.setAttribute('name', 'close');
    list.classList.add('top-[80px]', 'opacity-100');
  } else {
    e.target.setAttribute('name', 'menu');
    list.classList.remove('top-[80px]', 'opacity-100');
  }
}
  return (
    <>
      <h1>Fetch data</h1>
        <nav  className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div className="flex justify-between items-center ">
      <span className="text-2xl font-[Poppins] cursor-pointer">
        <img className="h-10 inline"
          src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" />
        tailwind
      </span>

      <span className="text-3xl cursor-pointer mx-2 md:hidden block">
     {/*    <ion-icon name="menu" onclick={()=>Menu()}></ion-icon> */}
        <span name="menu" onClick={Menu}>ME</span>
      </span>
    </div>

    <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      <li className="mx-4 my-6 md:my-0">
        <a href="#" className="text-xl hover:text-cyan-500 duration-500">HOME</a>
      </li>
     
      <li  className="mx-4 my-6 md:my-0">
        <a href="#" className="text-xl hover:text-cyan-500 duration-500">SERVICE</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="#" className="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="#" className="text-xl hover:text-cyan-500 duration-500">CONTACT</a>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <a href="#" className="text-xl hover:text-cyan-500 duration-500">BLOG'S</a>
      </li>

      <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
        Get started
      </button>
<h2 className=""></h2>
    </ul>
  </nav>
     <nav className='bg-[#FFFFFF30]'>
      <a href='#' >Noon</a>
      <div>
        <input type='text' />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>offers</li>
          <li>cart</li>
        </ul>
      </div>
      <div>
        <div>Click</div>
      </div>
     </nav>
    </>
  )
}

export default App

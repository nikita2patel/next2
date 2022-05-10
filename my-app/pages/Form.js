import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import {useDispatch,useSelector} from 'react-redux';
import {DATA} from './Redux/Action/Action'
import Head from 'next/head'

const Form = () => {
const dispatch = useDispatch()

const [data,setdata] = useState({
  name: '',
  last: '',
  email: '',
  phone: ''
})
const [value,setvalue]=useState([])

const handeldata = (event) =>{
  var items=data
  value.push(items)
  setvalue(value)
  event.preventDefault();
  dispatch(DATA(value))
  console.log("k",value)
  setdata({
    ...data,
    items,
    name:'',
    last:'',
    email:'',
    phone:'',
  })
  }
const output = useSelector((state) => state?.reducer?.user)
console.log("output",output)
useEffect(()=>{

},[output])

return(
    <div>
         <Head>
 <title>form</title>
      </Head>
       <Navigation/>
        <form  onSubmit={handeldata}>
        <label>Name</label><br></br>
        <input type="text" value={data.name}  onChange={(e) => setdata({...data,name:e.target.value})}/><br></br>
        <label>Last Name</label><br></br>
        <input type="text" value={data.last}  onChange={(e) =>setdata({...data,last:e.target.value})}/><br></br>
        <label>Email</label><br></br>
        <input type="text"  value={data.email}  onChange={(e)=>setdata({...data,email:e.target.value})}/><br></br>
        <label>Phone</label><br></br>
        <input type="text"  value={data.phone} onChange={(e)=>setdata({...data,phone:e.target.value})} /><br></br>
       <button type='submit'>submit</button>
        </form>
      <table>
        <thead>
          <tr>
<th>Name</th>
<th>Last Name</th>
<th>Email</th>
<th>phone</th>
 </tr>
 </thead>
 <tbody>


 {
   value?.map((x,id)=>{
     return(
<tr key={id}>
<td>{x.name}</td>
<td>{x.last}</td>
<td>{x.email}</td>
<td>{x.phone}</td>
  </tr>
     )
   })
 }      </tbody>
        </table>

 
  </div>
  )
}

export default Form







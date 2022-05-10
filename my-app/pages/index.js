import React from "react";
import Navigation from "./Navigation";
import Head from 'next/head'




export default function Home() {
  return (
    <div>
       <Head>
 <title>my first app</title>
      </Head> 
      <Navigation/>
       <h1>home</h1>
  </div>
  )
}

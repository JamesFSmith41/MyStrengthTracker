import React, { Suspense } from 'react'
import { CalorieCounter } from '../Components/CalorieCounter/CalorieCounter';
import type { User } from '@/app/lib/defintions';
import { MacroCounter } from '../Components/MacroTracker/MacroCounter';
import  Layout from '../Components/Layout/Layout';
import { getUser } from '../lib/action';

let fullfilled = false;
let promise : Promise<User>;
let user : User;

export const fetchData = () => {

    if (!fullfilled) {
        if (!promise) { 
            promise = new Promise(async (resolve) => {
                const res = await getUser("testUser");
                console.log(res.rows[0])
                fullfilled = true;
                user = res.rows[0];
                console.log("Resolved")
            });
        }
        console.log("throw promise")
        throw promise
    }
}

const Main = () => {
  fetchData();
  
  console.log(user)
  return  (
    <div>
      <p className="text-slate-900 font-bold text-2xl">
            Dashboard
        </p>
        <CalorieCounter user={user}/>
        <MacroCounter user={user}/>
    </div>
  )
}

const dashboard = () => {
  return (
    <Layout>
      <Suspense fallback={"Loading... "}>
        <Main/>
      </Suspense>
    </Layout>
  )
}

export default dashboard;

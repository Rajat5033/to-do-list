import React, { useContext, useEffect } from 'react';
import {contextStore} from "./store"
// import "./Todolist.css";

function News() {
  const contextvalue = useContext(contextStore)
  useEffect(() => {
    async function fetchdata() {
      try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users');
        const data1 = await responce.json();
        console.log("data1 ==>", data1)
        contextvalue.setData(data1)
      } catch (error) {
        console.log(error, "there is A ERROR")
      }
    }
    fetchdata();
    // eslint-disable-next-line
  }, []);
    return (
        <div>
            {contextvalue.data.map((item) => {
                return (
                    <div>
                        <p style={{ fontSize: 20, color: "black" }}>{item.email}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default News



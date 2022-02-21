import React from 'react'
import Link from "next/link"
import moment from 'moment';
import axios from 'axios';
import { useEffect,useState } from "react"
import styles from '../styles/Home.module.css'


const Csr = () => {

  const [time, setTime] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios
        .get('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
        .then((res) => {
          setTime(moment(res.data.datetime).format('MMMM Do YYYY, hh:mm:ss A'));
          setLoading(false)
        })
        .catch((error) => console.error(error));
    },[])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Client Side Rendering {`(CSR)`}</h3>
        <ul>
          <li className={styles.content}>It loads the client side first</li>
          <li className={styles.content}>and then it renders the server side</li>
        </ul>
        <h4 className={styles.content}> {loading? `Loading..!`: time}</h4><br></br>
        <Link href='/'><a className={styles.contentBtn}>{`<< `}Back</a></Link>
      </main>
    </div>
  )
}

export default Csr
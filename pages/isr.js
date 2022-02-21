import React from 'react'
import Link from "next/link"
import moment from 'moment';
import axios from 'axios';
import styles from '../styles/Home.module.css'

export const getStaticProps = async()=>{
  const res = await axios.get('https://worldtimeapi.org/api/timezone/Asia/Kolkata');

  return {
    props: { dateTime: res.data.datetime},
    revalidate: 10,
  };
}

const Isr = ({dateTime}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Incremental Static Regeneration {`(ISR)`}</h3>
        <ul>
          <li className={styles.content}>It is also same as the SSG {`(It renders only once at build time)`}</li>
          <li className={styles.content}>But it renders after every given time {`(Example: Every 10 seconds)`}</li>
        </ul>
        <h4 className={styles.content}> {moment(dateTime).format('MMMM Do YYYY, hh:mm:ss A')}</h4><br></br>
        <Link href='/'><a className={styles.contentBtn}>{`<< `}Back</a></Link>
      </main>
    </div>
  )
}

export default Isr
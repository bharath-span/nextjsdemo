import React from 'react'
import Link from "next/link"
import moment from 'moment';
import axios from 'axios';
import styles from '../styles/Home.module.css'

export const getServerSideProps = async () => {
  const res = await axios.get('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
  return {
      props: { dateTime: res.data.datetime},
  };
};

const Ssr = ({dateTime}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Server Side Rendering {`(SSR)`}</h3>
        <ul>
          <li className={styles.content}>Page renders at request time</li>
          <li className={styles.content}>Never cached</li>
        </ul>
        <h4 className={styles.content}>{moment(dateTime).format('MMMM Do YYYY, hh:mm:ss A')}</h4><br></br>
        <Link href='/'><a className={styles.contentBtn}>{`<< `}Back</a></Link>
      </main>
    </div>
  )
}

export default Ssr
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.header}>Let&apos;s Keep In Touch</h1>
     <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
        src={'/contact.png'}
        alt=''
        width={500}
        height={500}
        className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <input type='text' placeholder='name' className={styles.input}/>
        <input type='text' placeholder='email' className={styles.input}/>
        <textarea
        cols={30}
        rows={10}
        placeholder='message'
        className={styles.textArea}
        />
        <Button url='#' text='Send'/>
      </form>
     </div>
    </div>
  )
}

export default Contact

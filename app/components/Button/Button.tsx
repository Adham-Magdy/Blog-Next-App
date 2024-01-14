import React from 'react'
import styles from "./button.module.css";
import Link from 'next/link';

type Props = {
    url:string,
    text:string
}
const Button = (props:Props) => {
  return (
    <Link href={props.url}>
    <button className={styles.btn}>{props.text}</button>
    </Link>
  )
}

export default Button

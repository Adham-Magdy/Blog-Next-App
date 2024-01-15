import React from 'react'
import styles from './page.module.css'

type Props = {
    children:React.ReactNode;
}
const Layout = (props:Props) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {props.children}
    </div>
  )
}

export default Layout

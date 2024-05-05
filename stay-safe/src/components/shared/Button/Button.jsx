import styles from './Button.module.css';

export default function Button ({children, onclick}) {
  return (
    <button onClick={onclick} className={`${styles.container} px-4 py-2 rounded-lg bg-teal-400 text-white`}>
      {children}
    </button>
  )
}

import type { LoadingProps } from '../../types/LoadingProps'
import styles from './Loading.module.css'

export const Loading = ({ text = 'Loading...' }: LoadingProps) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.spinner}></div>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'


export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/RafaSicron.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Angelo Rafael</strong>
                            <time title='3 de dezembro às 15:16' datetime="2024-03-12 15:16:36">Cerca de uma 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
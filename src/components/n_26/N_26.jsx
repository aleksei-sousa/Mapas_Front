import styles from './n_26.module.css'

export default function N_26 ({visualizacao}){
    return(
        <div className={`${styles.container} ${visualizacao == 26 ? '' : `${styles.display_none}`}`}>

        <div className={styles.mapa_borda}>

            <div className={styles.mapa_content}>
                <div className={styles.row} id={styles.idrow0}><p>Av Gov. Hélio Gueiros</p>
                    <div className={styles.rowtraço} id={styles.rid4}></div>
                    <div className={styles.rowtraço} id={styles.rid5}></div>
                </div>

                <div className={styles.row} id={styles.idrow1}><p>Pass Beija-Flor</p>
                    <div className={styles.rowtraço} id={styles.rid24}></div>
                    <div className={styles.rowtraço} id={styles.rid25}></div>
                    <div className={styles.rowtraço} id={styles.rid26}></div>
                    <div className={styles.rowtraço} id={styles.rid27}></div>   
                </div>


                <div className={styles.row} id={styles.idrow2}><p>Pass. Nazaré</p>
                    <div className={styles.rowtraço} id={styles.rid12}></div>
                    <div className={styles.rowtraço} id={styles.rid13}></div>
                </div>

                <div className={styles.collumn} id={styles.collumn0}><p>Rua Santa Luiza</p>
                    <div className={styles.rowtraço} id={styles.rid0}></div>
                </div>

                <div className={styles.collumn} id={styles.collumn1}><p>Rua São Luiz</p>
                    <div className={styles.rowtraço} id={styles.rid15}></div>
                    <div className={styles.rowtraço} id={styles.rid16}></div>
                    <div className={styles.rowtraço} id={styles.rid17}></div>
                </div>

                <div className={styles.collumn} id={styles.collumn2}><p>Rua 13 de outubro</p>
                <div className={styles.rowtraço} id={styles.rid8}></div>
                <div className={styles.rowtraço} id={styles.rid9}></div>
                <div className={styles.rowtraço} id={styles.rid10}></div>

                </div>

                {/* <div className={styles.row} id={styles.idrow3}><p>Pass. Nazaré</p>
                    <div className={styles.rowtraço} id={styles.rid19}></div>
                    <div className={styles.rowtraço} id={styles.rid20}></div>
                    <div className={styles.rowtraço} id={styles.rid21}></div>
                    <div className={styles.rowtraço} id={styles.rid22}></div>
                    <div className={styles.rowtraço} id={styles.rid23}></div>
                </div> */}
            </div>

        </div>
    </div>
    )
}
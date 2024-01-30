import styles from './n_18.module.css'

export default function N_18 ({visualizacao}) {
    return(
        <div className={`${styles.container} ${visualizacao == 18 ? '' : `${styles.display_none}`}`}>

        <div className={styles.mapa_borda}>

            <div className={styles.mapa_content}>



                <div className={styles.row} id={styles.idrow2}><p>Estrada do Ariri</p>
                    <div className={styles.rowtraço} id={styles.rid7}></div>

                    <div className={styles.rowtraço} id={styles.rid6}></div>

                </div>

                <div className={styles.collumn} id={styles.collumn0}><p>Rua Armando Ricardo</p>
                    <div className={styles.rowtraço} id={styles.rid0}></div>
                    <div className={styles.rowtraço} id={styles.rid1}></div>
                    <div className={styles.rowtraço} id={styles.rid2}></div>
                </div>

                <div className={styles.collumn} id={styles.collumn1}><p>R. Jardim Atlântico</p>
                    <div className={styles.rowtraço} id={styles.rid9}></div>
                    <div className={styles.rowtraço} id={styles.rid10}></div>
                    <div className={styles.rowtraço} id={styles.rid11}></div>
                    <div className={styles.rowtraço} id={styles.rid12}></div>
                    <div className={styles.rowtraço} id={styles.rid13}></div>
                    <div className={styles.rowtraço} id={styles.rid14}></div>
                    <div className={styles.rowtraço} id={styles.rid15}></div>
                    <div className={styles.rowtraço} id={styles.rid16}></div>
                    <div className={styles.rowtraço} id={styles.rid17}></div>
                    <div className={styles.rowtraço} id={styles.rid18}></div>
                    <div className={styles.rowtraço} id={styles.rid19}></div>
                    <div className={styles.rowtraço} id={styles.rid20}></div>
                    <div className={styles.rowtraço} id={styles.rid21}></div>
                    <div className={styles.rowtraço} id={styles.rid22}></div>
                    <div className={styles.rowtraço} id={styles.rid23}></div>
                </div>

                <div className={styles.collumn} id={styles.collumn2}><p>Al. Parque dos Igarapés</p>
                <div className={styles.rowtraço} id={styles.rid4}></div>
                <div className={styles.rowtraço} id={styles.rid5}></div>
                <div className={styles.rowtraço} id={styles.rid8}></div>
                </div>
            </div>
        </div>
    </div>
    )
}
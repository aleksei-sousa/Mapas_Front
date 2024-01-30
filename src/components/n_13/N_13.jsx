import styles from './n_13.module.css'
export default function N_13 ({visualizacao}) {
    return(

    <div className={`${styles.container} ${visualizacao == 13 ? '' : `${styles.display_none}`}`}>
        <div className={styles.mapa_borda}>

            <div className={styles.mapa_content}>
                <div className={styles.row} id={styles.idrow0}><p>Pass. Nazaré</p>
                    <div className={styles.rowtraço} id={styles.rid2}></div>
                    <div className={styles.rowtraço} id={styles.rid3}></div>
                </div>

                <div className={styles.row} id={styles.idrow1}><p>Rua São Francisco</p>
                    <div className={styles.rowtraço} id={styles.rid14}></div>
                    <div className={styles.rowtraço} id={styles.rid15}></div>
                    <div className={styles.rowtraço} id={styles.rid16}></div>
                    <div className={styles.rowtraço} id={styles.rid17}></div>   
                </div>


                <div className={styles.row} id={styles.idrow2}><p>Rua Jibóia Branca</p>
                    <div className={styles.rowtraço} id={styles.rid7}></div>
                    <div className={styles.rowtraço} id={styles.rid8}></div>
                </div>

                <div className={styles.collumn} id={styles.collumn0}><p>Pass. Santa Lúcia</p>
                    <div className={styles.rowtraço} id={styles.rid0}></div>
                    <div className={styles.rowtraço} id={styles.rid1}></div>
                    <div className={styles.rowtraço} id={styles.rid21}></div>
                </div>

                <div className={styles.collumn} id={styles.collumn1}><p>Pass. Santa Luzia</p>
                    <div className={styles.rowtraço} id={styles.rid9}></div>
                    <div className={styles.rowtraço} id={styles.rid10}></div>
                    <div className={styles.rowtraço} id={styles.rid11}></div>
                    <div className={styles.rowtraço} id={styles.rid12}></div>
                    <div className={styles.rowtraço} id={styles.rid13}></div>
                </div>

                <div className={styles.collumn} id={styles.collumn2}><p>Rua São Luiz</p>
                <div className={styles.rowtraço} id={styles.rid4}></div>
                <div className={styles.rowtraço} id={styles.rid5}></div>
                <div className={styles.rowtraço} id={styles.rid6}></div>

                <div className={styles.rowtraço} id={styles.rid20}><p>Evangelista</p></div>
                </div>

                <div className={styles.passagem} id={styles.idpass0}><p>Pass. Bom Sucesso</p>
                    <div className={styles.rowtraço} id={styles.rid18}></div>
                    <div className={styles.rowtraço} id={styles.rid19}></div>
                </div>
            </div>


        </div>
    </div>
    )
}
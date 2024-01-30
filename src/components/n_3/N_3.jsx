import styles from './n_3.module.css'

export default function N_3 ({visualizacao}) {
    return(
        <div className={`${styles.container} ${visualizacao == 3 ? '': `${styles.display_none}`}`}>
                <div className={styles.mapa_content}>
                        <div className={styles.row} id={styles.idrow0}><p></p>
                            <div className={styles.rowtraço} id={styles.rid3}></div>
                        </div>
                        <div className={styles.row} id={styles.idrow1}><p>Pass. Monteiro Lobato</p>
                            <div className={styles.rowtraço} id={styles.rid4}></div>
                            <div className={styles.rowtraço} id={styles.rid5}></div>
                            <div className={styles.rowtraço} id={styles.rid6}></div>
                            <div className={styles.rowtraço} id={styles.rid7}></div>
                            <div className={styles.rowtraço} id={styles.rid7b}></div>
                            <div className={styles.rowtraço} id={styles.rid7c}></div>
                        </div>
                        <div className={styles.row} id={styles.idrow2}><p>Av. Hélio Gueiros</p>
                            <div className={styles.rowtraço} id={styles.rid8}></div>
                            <div className={styles.rowtraço} id={styles.rid9}></div>
                        </div>
                        <div className={styles.row} id={styles.idrow3}><p>Pass. Snt. Luzia</p>
                            <div className={styles.rowtraço} id={styles.rid12}></div>
                            <div className={styles.rowtraço} id={styles.rid13}></div>
                            <div className={styles.rowtraço} id={styles.rid14}></div>
                            <div className={styles.rowtraço} id={styles.rid15}></div>
                            <div className={styles.rowtraço} id={styles.rid15b}></div>
                            <div className={styles.rowtraço} id={styles.rid15c}></div>
                        </div>
                        <div className={styles.row} id={styles.idrow5}><p>Rua São Bento</p>
                            <div className={styles.rowtraço} id={styles.rid20}></div>
                            <div className={styles.rowtraço} id={styles.rid21}></div>
                            <div className={styles.rowtraço} id={styles.rid22}></div>
                            <div className={styles.rowtraço} id={styles.rid23}></div>
                            <div className={styles.rowtraço} id={styles.rid23b}></div>
                            <div className={styles.rowtraço} id={styles.rid23c}></div>
                            <div className={styles.rowtraço} id={styles.rid23d}></div>
                        </div>
                        <div className={styles.row} id={styles.idrow6}><p></p>
                            <div className={styles.rowtraço} id={styles.rid24}></div>
                            <div className={styles.rowtraço} id={styles.rid25}></div>
                            <div className={styles.rowtraço} id={styles.rid26}></div>
                            <div className={styles.rowtraço} id={styles.rid27}></div>
                        </div>
                        <div className={styles.collumn} id={styles.collumn0}><p>Av. Independência</p>
                            <div className={styles.rowtraço} id={styles.rid32}></div>
                            <div className={styles.rowtraço} id={styles.rid33}></div>
                            <div className={styles.rowtraço} id={styles.rid34}></div>
                        </div>
                        <div className={`${styles.collumn} ${styles.letras_menores}`} id={styles.collumn1}><p>Pass. São Fancisco</p>
                            <div className={styles.rowtraço} id={styles.rid36}></div>
                            <div className={styles.rowtraço} id={styles.rid37}></div>
                            <div className={styles.rowtraço} id={styles.rid38}></div>
                            <div className={styles.rowtraço} id={styles.rid39}></div>
                            <div className={styles.rowtraço} id={styles.rid39b}></div>
                            <div className={styles.rowtraço} id={styles.rid39c}></div>
                            <div className={styles.rowtraço} id={styles.rid39d}></div>
                            <div className={styles.rowtraço} id={styles.rid39e}></div>
                            <div className={styles.rowtraço} id={styles.rid39f}></div>
                            <div className={styles.rowtraço} id={styles.rid39g}></div>
                        </div>
                        <div className={styles.collumn} id={styles.collumn2}><p>R. Bons Amigos</p>
                            <div className={styles.rowtraço} id={styles.rid40}></div>
                            <div className={styles.rowtraço} id={styles.rid41}></div>
                            <div className={styles.rowtraço} id={styles.rid42}></div>
                            <div className={styles.rowtraço} id={styles.rid43}></div>
                            <div className={styles.rowtraço} id={styles.rid43b}></div>
                        </div>
            
                        <div className={`${styles.collumn} ${styles.letras_menores}`} id={styles.collumn3}><p>Pass. São João</p>
                            <div className={styles.rowtraço} id={styles.rid44}></div>
                            <div className={styles.rowtraço} id={styles.rid45}></div>
                            <div className={styles.rowtraço} id={styles.rid46}></div>
                            <div className={styles.rowtraço} id={styles.rid47}></div>
                            <div className={styles.rowtraço} id={styles.rid47b}></div>
                            <div className={styles.rowtraço} id={styles.rid47c}></div>
                            <div className={styles.rowtraço} id={styles.rid47d}></div>
                        </div>
            
                        <div className={styles.collumn} id={styles.collumn4}><p>Pass. São Jerônimo</p>
                            <div className={styles.rowtraço} id={styles.rid48}></div>
                            <div className={styles.rowtraço} id={styles.rid49}></div>
                            <div className={styles.rowtraço} id={styles.rid50}></div>
                            <div className={styles.rowtraço} id={styles.rid51}></div>
                            <div className={styles.rowtraço} id={styles.rid51b}></div>
                            <div className={styles.rowtraço} id={styles.rid51c}></div>
                        </div>
                        <div className={styles.collumn} id={styles.collumn5}><p>R. da Apeti</p>
                            <div className={styles.rowtraço} id={styles.rid53}></div>
                            <div className={styles.rowtraço} id={styles.rid54}></div>
                            <div className={styles.rowtraço} id={styles.rid55}></div>
                        </div>
                        <div className={styles.rowtraço} id={styles.rid100}></div>
                        <div className={styles.rowtraço} id={styles.rid101}></div>
                </div>
        </div>
    )
}
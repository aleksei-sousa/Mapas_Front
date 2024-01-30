import styles from './n_19.module.css'
import img1 from './foto_n19.jpg'
export default function N_19 ({visualizacao}){
    return(   
<div className={`${styles.container} ${visualizacao == 19 ? '' : `${styles.display_none}`}`}>

    <img src={img1} className={styles.mapa_borda}>
        
    </img>
    <div className={styles.mapa_content}>

        <div className={styles.row} id={styles.idrow0}><p>Estrada do Ariri</p>
            {/* <div className={styles.rowtraço} id={styles.rid24}></div>
            <div className={styles.rowtraço} id={styles.rid25}></div>
            <div className={styles.rowtraço} id={styles.rid26}></div>
            <div className={styles.rowtraço} id={styles.rid27}></div> */}
        </div>


        <div className={styles.row} id={styles.idrow2}><p>Passagem 20 de Julho</p>
            {/* <div className={styles.rowtraço} id={styles.rid7}></div>
            <div className={styles.rowtraço} id={styles.rid6}></div> */}
        </div>

        <div className={styles.collumn} id={styles.collumn0}><p>Rua Santo Antonio</p>
            {/* <div className={styles.rowtraço} id={styles.rid0}></div>
            <div className={styles.rowtraço} id={styles.rid1}></div>
            <div className={styles.rowtraço} id={styles.rid2}></div>
            <div className={styles.rowtraço} id={styles.rid3}></div> */}
        </div>

        <div className={styles.collumn} id={styles.collumn1}><p>Pass. São Pedro</p>
            {/* <div className={styles.rowtraço} id={styles.rid9}></div>
            <div className={styles.rowtraço} id={styles.rid10}></div>
            <div className={styles.rowtraço} id={styles.rid21}></div>
            <div className={styles.rowtraço} id={styles.rid11}></div>
            <div className={styles.rowtraço} id={styles.rid12}></div> */}
        </div>

        <div className={styles.collumn} id={styles.collumn2}>
             <p>-- Sem nome 01 --</p>
        {/*<div className={styles.rowtraço} id={styles.rid4}></div>
        <div className={styles.rowtraço} id={styles.rid5}></div>
        <div className={styles.rowtraço} id={styles.rid8}></div> */}
        </div>

        <div className={styles.collumn} id={styles.collumn3}><p>-- Sem nome 02 --</p>
        {/* <div className={styles.rowtraço} id={styles.rid4}></div>
        <div className={styles.rowtraço} id={styles.rid5}></div>
        <div className={styles.rowtraço} id={styles.rid8}></div> */}
        </div>

</div>
</div>)
}
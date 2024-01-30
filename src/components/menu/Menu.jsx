import styles from './menu.module.css'
export default function Menu ({visualizacao, setNumero}) {

    function selecionarNumero(e) {
        const numero2 = e.target.firstChild.data
        setNumero(numero2)
        console.log(numero2)
    }

 
    return(
        <div className={`${styles.container} ${visualizacao == 'Metropolitana' ? '': `${styles.display_none}`}`}>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>01</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>02</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>03</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>04</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>05</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>06</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>07</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>08</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>09</div>
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>10</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>11</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>12</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>13</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>14</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>15</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>16</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>17</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>18</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>19</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>20</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>21</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>22</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>23</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>24</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>25</div> 
            <div onClick={(e)=>{selecionarNumero(e)}} className={styles.quadrado}>26</div> 
        </div>
    )
}
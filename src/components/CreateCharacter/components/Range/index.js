import React, {useCallback, useState, useRef} from 'react';
import styles from './assets/styles.css';
import cn from 'classnames';




export default function Range({ min = 1, max = 100, steps = 1, value = 1, onChange, options = {} }){
    const InputStyle = {
        width: 395  + 'px',
        zIndex: 30
    }
    
    const InputBackground = {
        position: 'absolute',
        height: 6+'px',
        width: 395 + 'px',
        marginTop: 3+'px',
        borderRadius: 8+'px',
        background: 'rgba(0, 0, 0, 0.27)',
        zIndex: -1
    }
    const FieldBlock = {
        position: 'absolute',
        height: 6+'px',
        marginTop: 3+'px',
        minWidth: 395 + 'px',
        zIndex: -1
    }
    const [field, setField] = useState({
        width: (value-min)/((max-min)/100) + "%",
        height: 6 + 'px',
        borderRadius: 8+'px',
        backgroundImage: 'none',
        background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(152, 79, 209, 0.15) 0%, rgba(80, 36, 255, 0) 100%)',
        opacity: .15
    })
    const ChangeBackgroundBeforeThumb = useCallback((e) => {
        console.log(e.target.value)
        setField({
            ...field,
            width: (e.target.value-min)/((max-min)/100) + "%",
        })
    }, [field, setField]);
    return(
    <div className={styles.field}>
        <input type="range" min={min} max={max} defaultValue={value} style={InputStyle} onChange={ChangeBackgroundBeforeThumb} className={styles.matherOrFather} />
        <div style={InputBackground}></div>
        <div style={FieldBlock}>
            <div style={field} ></div>
        </div>
    </div>
    )
}

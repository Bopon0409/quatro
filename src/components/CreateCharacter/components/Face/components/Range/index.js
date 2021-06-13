import React, {useCallback, useState, useRef, useEffect} from 'react';
import styles from './assets/styles.css';
import cn from 'classnames';

const InputStyle = {
    width: 404 + 'px',
    zIndex: 30
}
const FieldBlock = {
    position: 'absolute',
    height: 6+'px',
    marginTop: 6+'px',
    minWidth: 404 + 'px',
    zIndex: -1
}
const InputBackground = {
    position: 'absolute',
    height: 6+'px',
    width: 404 + 'px',
    marginTop: 6+'px',
    borderRadius: 8+'px',
    background: 'rgba(35, 28, 95, 0.75)',
    zIndex: -1
}


export default function Range({ min = 1, max = 100, steps = 1, value = 1, onChange }){
    let rangeRef = useRef();
    const [field, setField] = useState({
        width: value + "%",
        height: 6 + 'px',
        borderRadius: 8+'px',
        background: 'rgba(54, 47, 110, 0.75)'
    })
    useEffect(() => {
        rangeRef.current.value = value
        setField({
            ...field,
            width: value + "%" 
        })
    }, [value, setField])
    const ChangeBackgroundBeforeThumb = useCallback((e) => {
        setField({
            ...field,
            width: e.target.value + "%" 
        })
    }, [value, setField]);
    return(
    <div className={styles.field}>
        <input type="range" min={min} max={max} defaultValue={value} style={InputStyle} onChange={onChange} className={styles.matherOrFather} ref={rangeRef} />
        <div style={InputBackground}></div>
        <div style={FieldBlock}>
            <div style={field} ></div>
        </div>
    </div>
    )
}

/*
export default function Range({ min, max, steps = 1, defaultValue = 1, onChange, options = {fieldStyle = {}, backgroundStyle = {}, fieldBlockStyle = {}}  }){
    const [field, setField] = useState({
       ...options.fieldStyle
    });
    const ChangeBackgroundBeforeThumb = useCallback((e) => {
        setField({
            ...field,
            width: e.target.value + "%" 
        })
    }, [field, setField]);
    return(
        <div className={styles.wrapper}>
                <div className={styles.field}>
                    <input type="range" min="0" max="100" defaultValue="0" style={InputStyle} onChange={ChangeBackgroundBeforeThumb} />
                    <div style={InputBackground}></div>
                    <div style={FieldBlock}>
                        <div style={field} ></div>
                    </div>
                </div>
        </div>
    )
}





  <div class="range">
        <div class="sliderValue">
          <span>100</span>
        </div>
<div class="field">
          <div class="value left">
0</div>
<input type="range" min="10" max="200" value="100" steps="1">
          <div class="value right">
200</div>
*/
import React, {useCallback, useEffect} from 'react';
import cn from 'classnames';
import styles from './assets/styles.css';
import Range from './components/Range';

// let InputStyle = {
//     width: 404 + 'px'
// }
// let FieldBlock = {
//     position: 'absolute',
//     height: 6+'px',
//     marginTop: 6+'px',
//     minWidth: 404 + 'px',
//     zIndex: -1
// }
// let InputBackground = {
//     position: 'absolute',
//     height: 6+'px',
//     width: 404 + 'px',
//     marginTop: 6+'px',
//     borderRadius: 8+'px',
//     background: 'rgba(35, 28, 95, 0.75)',
//     zIndex: -1
// }


export default function Face({ type, eyebrowsLeftValue, setELV, eyebrowsRightValue, setERV, eyebrowsWidthValue, setEW, noseNostrilsValue, setNN, noseWidthValue, setNW, noseLengthValue, setNL, foreheadHeightValue, setFHH, foreheadWidthValue, setFHW, foreheadLengthValue, setFHL }){

    // БРОВИ
    const ChangeTextValue = useCallback((iNum) => {
        return function( event ){
        switch (iNum) {
            case 1:{
                setELV(parseInt(event.target.value));
                break;
            }
            case 2:{
                setERV(parseInt(event.target.value));
                break;
            }
            case 3: {
                setEW(parseInt(event.target.value));
                break;
            }
            case 4: {
                setNN(parseInt(event.target.value));
                break;
            }
            case 5: {
                setNW(parseInt(event.target.value));
                break;
            }
            case 6: {
                setNL(parseInt(event.target.value));
                break;
            }
            case 7: {
                setFHH(parseInt(event.target.value));
                break;
            }
            case 8: {
                setFHW(parseInt(event.target.value));
                break;
            }
            case 9: {
                setFHL(parseInt(event.target.value));
                break;
            }
            default:
                break;
        }
        }
    }, [setELV, setERV, setEW, setNN, setNW, setNL, setFHH, setFHW, setFHL]);
    return(
        <div className={cn(styles.main_face, {[styles.hide]:type != 1})}>
            <div className={styles.block}>
                <div className={styles.block_name}>Брови</div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Влево</div>
                        <div>{eyebrowsLeftValue}</div>
                    </div>
                    <Range min={0} max={100} value={eyebrowsLeftValue} onChange={ChangeTextValue(1)} />
                </div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Вправо</div>
                        <div>{eyebrowsRightValue}</div>
                    </div>
                    <Range min={0} max={100} value={eyebrowsRightValue} onChange={ChangeTextValue(2)} />
                </div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Ширина</div>
                        <div>{eyebrowsWidthValue}</div>
                    </div>
                    <Range min={0} max={100} value={eyebrowsWidthValue} onChange={ChangeTextValue(3)} />
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.block_name}>Нос</div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Ноздри</div>
                        <div>{noseNostrilsValue}</div>
                    </div>
                    <Range min={0} max={100} value={noseNostrilsValue} onChange={ChangeTextValue(4)} />
                </div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Ширина</div>
                        <div>{noseWidthValue}</div>
                    </div>
                    <Range min={0} max={100} value={noseWidthValue} onChange={ChangeTextValue(5)} />
                </div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Длина</div>
                        <div>{noseLengthValue}</div>
                    </div>
                    <Range min={0} max={100} value={noseLengthValue} onChange={ChangeTextValue(6)} />
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.block_name}>Лоб</div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Высота</div>
                        <div>{foreheadHeightValue}</div>
                    </div>
                    <Range min={0} max={100} value={foreheadHeightValue} onChange={ChangeTextValue(7)} />
                </div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Ширина</div>
                        <div>{foreheadWidthValue}</div>
                    </div>
                    <Range min={0} max={100} value={foreheadWidthValue} onChange={ChangeTextValue(8)} />
                </div>
                <div className={styles.block_input}>
                    <div className={styles.text}>
                        <div>Длина</div>
                        <div>{foreheadLengthValue}</div>
                    </div>
                    <Range min={0} max={100} value={foreheadLengthValue} onChange={ChangeTextValue(9)} />
                </div>
            </div>
        </div>
    )
}

/*
setAppearance({
    eyebrows: {
        left: eyebrowsLeftValue,
        right: eyebrowsRightValue,
        width: eyebrowsWidthValue
    },
    nose:{
        nostrils: noseNostrilsValue,
        width: noseWidthValue,
        length: noseLengthValue
    },
    forehead:{
        height: foreheadHeightValue,
        width: foreheadWidthValue,
        length: foreheadLengthValue
    }
})
*/
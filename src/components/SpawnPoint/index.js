import React, {useCallback, useState} from 'react';
import styles from './assets/styles.css';
import cn from 'classnames';

import HouseSVG from './assets/images/house.svg';
import ExitSVG from './assets/images/exit.svg';
import FractionSVG from './assets/images/fraction.svg';
import HouseActiveSVG from './assets/images/houseActive.svg';
import ExitActiveSVG from './assets/images/exitActive.svg';
import FractionActiveSVG from './assets/images/fractionActive.svg';


const isHouse = false;
const isFraction = false;

export default function SpawnPoint(){
    const [point, setPoint] = useState(null);
    const ChangePoint = useCallback((num) => {
        setPoint(num)
    }, [setPoint]);
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.window_name}>Выберите точку спавна</div>
                <div className={styles.trigger_box}>
                    <div className={styles.first}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="553px" height="695px" preserveAspectRatio="none">
                        <g onMouseEnter={() => ChangePoint(0)} onMouseLeave={() => ChangePoint(null)} className={styles.s}>
                            {point == 0 ? <HouseActiveSVG /> : <HouseSVG /> }
                        </g>
                        </svg>
                        {(!isHouse && point == 0) && <div className={styles.not_house} onMouseEnter={() => ChangePoint(0)}>У вас нет дома</div> }
                        <div className={cn(styles.position_name, {[styles.text_active]: point == 0})} onMouseEnter={() => ChangePoint(0)}>Дом</div>
                    </div>
                    <div className={styles.second}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="640px" height="695px" preserveAspectRatio="none">
                        <g onMouseEnter={() => ChangePoint(1)} onMouseLeave={() => ChangePoint(null)} className={styles.s}>
                            {point == 1 ? <ExitActiveSVG /> : <ExitSVG /> }
                        </g>
                    </svg>
                    <div className={cn(styles.position_name, {[styles.text_active]: point == 1})} onMouseEnter={() => ChangePoint(1)}>Место выхода</div>
                    </div>
                    <div className={styles.third}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="553px" height="695px" preserveAspectRatio="none">
                            <g onMouseEnter={() => ChangePoint(2)} onMouseLeave={() => ChangePoint(null)} className={styles.s}>
                                {point == 2 ? <FractionActiveSVG /> : <FractionSVG /> }
                            </g>
                        </svg>
                        {(!isFraction && point == 2) && <div className={styles.not_fraction} onMouseEnter={() => ChangePoint(2)}>Вы нигде не состоите</div>}
                        <div className={cn(styles.position_name, {[styles.text_active]: point == 2})} onMouseEnter={() => ChangePoint(2)}>Фракция</div>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.line}></div>
                    <div>Мы позаботились о том, что бы Вы не вводили каждый раз данные для входа, поэтому для авторизации используем Ваш аккаунт в Social Club. В целях безопасности нам нужен только Ваш адрес электронной почты, на который Вы регистрировали аккаунт.</div>
                </div>
            </div>
        </div>
    )
}
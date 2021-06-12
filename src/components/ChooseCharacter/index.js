import React, {useCallback, useState} from 'react';
import styles from './assets/styles.css';
import cn from 'classnames';

import pf from '../../utils/priceFormat';

import PersonSVG from './assets/images/person.svg'; // прозрачный персонаж (пассивное состояние)
import PersonActiveSVG from './assets/images/person_active.svg'; // цветной персонаж (при наведении на блок)
import LvlCircleSVG from './assets/images/lvl_circle.svg'; // круг для уровня

// блоки для первого персонажа
import FirstCharacterSVG from './assets/images/first_character_bg.svg';
import FirstCharacterActiveSVG from './assets/images/first_character_bg_active.svg';
import FirstCharacterInfoSVG from './assets/images/first_character_info.svg';
// блоки для второго персонажа
import SecondCharacterSVG from './assets/images/second_character_bg.svg';
import SecondCharacterActiveSVG from './assets/images/second_character_bg_active.svg';
import SecondCharacterInfoSVG from './assets/images/second_character_info.svg';
// блоки для третьего персонажа
import ThirdCharacterSVG from './assets/images/third_character_bg.svg';
import ThirdCharacterActveSVG from './assets/images/third_character_bg_active.svg';
import ThirdCharacterInfoSVG from './assets/images/third_character_info.svg';


/*
    сюда прокидывать объекты с информацией о персонаже
    name: игровое имя
    level: игровой уровень
    fraction: организация, в которой состоин игрок
    balance: кол-во денег (не знаю наличных, карточных, или в сумме)

    Дизайнеру руки оторвите, это шок
*/
const PLAYER_INFO = [
    {
        name: 'Kot_NedoDizayner',
        level: 11,
        fraction: 'Безработный',
        balance: 32004
    },
    {
        // name: 'Alan_Brown',
        // level: 4,
        // fraction: 'Безработный',
        // balance: 50325
    },
    {
        // name: 'Artem_Siberian',
        // level: 55,
        // fraction: 'Дальнобойщик',
        // balance: 852222
    },
]


export default function ChooseCharacter(){
    const [point, setPoint] = useState(null);
    const ChangePoint = useCallback((num) => {
        setPoint(num)
    }, [setPoint]);
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.window_name}>Выберите персонажа</div>
                <div className={styles.trigger_box}>
                    <div className={styles.first}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="553px" height="695px" preserveAspectRatio="none">
                        <g onMouseEnter={() => ChangePoint(0)} onMouseLeave={() => ChangePoint(null)} className={styles.s}>
                            {(point == 0 && PLAYER_INFO[0].name)  ? <FirstCharacterActiveSVG /> : <FirstCharacterSVG /> }
                        </g>
                        </svg>
                        <div onMouseEnter={() => ChangePoint(0)} onMouseLeave={() => ChangePoint(null)}>
                        {point == 0 ? <div className={styles.personActive} ><PersonActiveSVG/></div> : <div className={styles.person}><PersonSVG /></div>}
                        </div>
                        {(point == 0 && PLAYER_INFO[0].name) && (
                            <div className={styles.info_first_third} onMouseEnter={() => ChangePoint(0)} onMouseLeave={() => ChangePoint(null)} >
                                <div className={styles.infoBar}><FirstCharacterInfoSVG /></div>
                                <div className={cn(styles.char_info, styles.char_info_leftSide)}>
                                    <div>Начать играть</div>
                                    <div><span className={styles.text}>Организация:</span> <span className={styles.amount}>{PLAYER_INFO[0].fraction}</span></div>
                                    <div><span className={styles.text}>Баланс:</span> <span className={styles.amount}>{pf(PLAYER_INFO[0].balance)}$</span></div>
                                </div>
                                <div className={styles.character_name_lvl}>
                                    <div>
                                    <div className={styles.lvl_circle}><LvlCircleSVG /></div>
                                        <div className={styles.lvl}>{PLAYER_INFO[0].level}</div>
                                    </div>
                                    <div className={styles.name}>{PLAYER_INFO[0].name}</div>
                                </div>
                            </div>
                        )}
                        {(point == 0 && !PLAYER_INFO[0].name) && (
                          <div className={cn(styles.createCharacter, styles.createCharacter_leftSide)} onMouseEnter={() => ChangePoint(0)} onMouseLeave={() => ChangePoint(null)}>Создать персонажа</div>  
                        )}
                    </div>
                    <div className={styles.second}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="640px" height="695px" preserveAspectRatio="none">
                        <g onMouseEnter={() => ChangePoint(1)} onMouseLeave={() => ChangePoint(null)} className={styles.s}>
                            {(point == 1 && PLAYER_INFO[1].name) ? <SecondCharacterActiveSVG /> : <SecondCharacterSVG /> }
                        </g>
                        </svg>
                        <div onMouseEnter={() => ChangePoint(1)} onMouseLeave={() => ChangePoint(null)}>
                        {point == 1 ? <div className={cn(styles.personActive, styles.thirdPerson)} ><PersonActiveSVG/></div> : <div className={cn(styles.person, styles.thirdPerson)}><PersonSVG /></div>}
                        </div>
                        {(point == 1 && PLAYER_INFO[1].name) && (
                            <div className={styles.info_first_third} onMouseEnter={() => ChangePoint(1)} onMouseLeave={() => ChangePoint(null)} >
                                <div className={styles.second_infoBox}><SecondCharacterInfoSVG /></div>
                                <div className={cn(styles.char_info, styles.char_info_center)}>
                                    <div>Начать играть</div>
                                    <div><span className={styles.text}>Организация:</span> <span className={styles.amount}>{PLAYER_INFO[1].fraction}</span></div>
                                    <div><span className={styles.text}>Баланс:</span> <span className={styles.amount}>{pf(PLAYER_INFO[1].balance)}$</span></div>
                                </div>
                                <div className={cn(styles.character_name_lvl, styles.second_character_name_lvl)}>
                                    <div>
                                        <div className={styles.lvl_circle}><LvlCircleSVG /></div>
                                        <div className={cn(styles.lvl, styles.third_lvl)}>{PLAYER_INFO[1].level}</div>
                                    </div>
                                    <div className={styles.name}>{PLAYER_INFO[1].name}</div>
                                </div>
                            </div>
                        )}
                        {(point == 1 && !PLAYER_INFO[1].name) && (
                          <div className={cn(styles.createCharacter, styles.createCharacter_central)} onMouseEnter={() => ChangePoint(1)} onMouseLeave={() => ChangePoint(null)}>Создать персонажа</div>  
                        )}
                    </div>
                    <div className={styles.third}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="553px" height="695px" preserveAspectRatio="none">
                            <g onMouseEnter={() => ChangePoint(2)} onMouseLeave={() => ChangePoint(null)} className={styles.s}>
                                {(point == 2 && PLAYER_INFO[2].name) ? <ThirdCharacterActveSVG /> : <ThirdCharacterSVG /> }
                            </g>
                            </svg>
                        <div onMouseEnter={() => ChangePoint(2)} onMouseLeave={() => ChangePoint(null)}>
                        {point == 2 ? <div className={cn(styles.personActive, styles.thirdPerson)} ><PersonActiveSVG/></div> : <div className={cn(styles.person, styles.thirdPerson)}><PersonSVG /></div>}
                        </div>
                        {(point == 2 && PLAYER_INFO[2].name) && (
                            <div className={styles.info_first_third} onMouseEnter={() => ChangePoint(2)} onMouseLeave={() => ChangePoint(null)} >
                                <div className={styles.infoBar}><ThirdCharacterInfoSVG /></div>
                                <div className={cn(styles.char_info, styles.char_info_rightSide)}>
                                    <div>Начать играть</div>
                                    <div><span className={styles.text}>Организация:</span> <span className={styles.amount}>{PLAYER_INFO[2].fraction}</span></div>
                                    <div><span className={styles.text}>Баланс:</span> <span className={styles.amount}>{pf(PLAYER_INFO[2].balance)}$</span></div>
                                </div>
                                <div className={cn(styles.character_name_lvl, styles.third_character_name_lvl)}>
                                    <div>
                                        <div className={styles.lvl_circle}><LvlCircleSVG /></div>
                                        <div className={cn(styles.lvl, styles.third_lvl)}>{PLAYER_INFO[2].level}</div>
                                    </div>
                                    <div className={styles.name}>{PLAYER_INFO[2].name}</div>
                                </div>
                            </div>
                        )}
                        {(point == 2 && !PLAYER_INFO[2].name) && (
                          <div className={cn(styles.createCharacter, styles.createCharacter_rightSide)} onMouseEnter={() => ChangePoint(2)} onMouseLeave={() => ChangePoint(null)}>Создать персонажа</div>  
                        )}
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
import React, {useCallback, useState, useRef} from 'react';
import styles from './assets/styles.css';
import cn from 'classnames';

import EyeSVG from './assets/images/eye.svg';
import CloseEyeSVG from './assets/images/closeEye.svg';
import AcceptSVG from './assets/images/accept.svg';
import ErrorSVG from './assets/images/error.svg';

// CONSTANTS
const MIN_PASSWORD_LENGTH = 8;
const MAX_PASSWORD_LENGTH = 24;



const Texts = [
    {
        name: "Авторизация",
        screenInfo: ['Мы рады Вас видеть, войдите в аккаунт или пройдите ', 'регистрацию'],
        mainButton: "Войти",
        checkbox: ["Запомнить меня", ''],
        dopText: ["", ""]
    },
    {
        name: "Регистрация",
        screenInfo: ['Ух ты, ну что сказать “давно пора”, ', 'но лучше поздно чем никогда!'],
        mainButton: "Зарегистрироваться",
        checkbox: [
            "Я СОГЛАСЕН ", 
            "С ПРАВИЛАМИ СЕРВЕРА"
        ],
        dopText: ["", ""]
    },
    {
        name: "Восстановить доступ",
        screenInfo: ['Ну что же с кем не бывает, но ничего прорвемся!', ''],
        mainButton: "Отправить",
        checkbox: "",
        dopText: ["На указанную вами почту будет отправлено письмо с кодом, далее вам нужно будет ввести данный код чтобы идэнти ляля вашу личность ну и сменить пароль.", "Не получил письмо!"]
    },
    {
        name: "Восстановить доступ",
        screenInfo: ['Ну что же с кем не бывает, но ничего прорвемся!', ''],
        mainButton: "Сменить пароль",
        checkbox: "",
        dopText: ["Старайтесь ввести надежный пароль и бла бла бла..это по более части нужно забить данную пустоту..или как гговориться красота требует жертв", ""]
    },
]
const ESC = "Escape";

export default function RegAuth(){
    let emailRef = useRef();
    let passwordRef = useRef();
    let repasswordRef = useRef();
    let codeRef = useRef();
    // states
    const [screen, setScreen] = useState(0); // 0 - Auth, 1 - Reg, 2 - reset pass, 3 - new password
    const [showPass, setShowPass] = useState(false); //показать/скрыть пароль
    const [sendMail, setSendMail] = useState(false);
    const [correctData, setCorrectData] = useState({
        email: null,
        password: null,
        repassword: null
    })
    const ChangePasswordType = useCallback(() => {
        setShowPass(!showPass);
    }, [setShowPass, showPass]);
    const ChangeScreen = useCallback((n) => {
        console.log(repasswordRef)
        if(emailRef.current) emailRef.current.value = "";
        if(passwordRef.current) passwordRef.current.value = "";
        if(repasswordRef.current) repasswordRef.current.value = "";
        setScreen(n);
    }, [setScreen]);
    const CheckEmail = (email) => {
        let doggyPosition = email.indexOf("@", 0);
        let pointPosition = email.indexOf(".", doggyPosition);
        if(doggyPosition != -1 && email.length > doggyPosition + 4 && pointPosition > doggyPosition && email.length > pointPosition + 2){
            if(screen == 0 || screen == 1){
                return true;
            }
            if(screen == 2){ // окно восстановления данных
                if(!sendMail) {
                    sendPasswordResetCode();
                    return true;
                }
                else verificationEnteredCode();
            }
        } else {
            return false;
        }
    }
    const CheckPassword = (password) => {
        if(password.length >= MIN_PASSWORD_LENGTH && password.length <= MAX_PASSWORD_LENGTH){
            return true;
        } else {
            return false;
        }
    }
    const CheckRepassword = (password, repassword) => {
        if(password === repassword && repassword.length >= MIN_PASSWORD_LENGTH && repassword.length <= MAX_PASSWORD_LENGTH) {
            return true;
        }
        else {
            return false;
        }
    }
    const BtnClick = () => {
        if(screen >= 0 && screen <= 3){
            let checkEmail = null; let checkPassword = null; let checkRepassword = null;
            if(emailRef.current) checkEmail = CheckEmail(emailRef.current.value); // проверка мэйла на валидацию
            if(passwordRef.current) checkPassword = CheckPassword(passwordRef.current.value); // проверка пароля
            if(repasswordRef.current) checkRepassword = CheckRepassword(passwordRef.current.value, repasswordRef.current.value); // проверка паролей при регистрации
            
            if(screen == 3){
                checkRepassword = CheckRepassword(passwordRef.current.value, repasswordRef.current.value);
                setTimeout(() => {
                    if(checkRepassword) ChangeScreen(0);
                }, 500);
            }

            setCorrectData({
                email: checkEmail,
                password: checkPassword,
                repassword: checkRepassword
            })
            setTimeout(() => {
                setCorrectData({
                    email: null,
                    password: null,
                    repassword: null
                })
            }, 500)
        }
    };
    const keyUp = useCallback((e) => {
        console.log(e.key)
        if(e.key == ESC){
            console.log('back on main page')
            ChangeScreen(0);
            setSendMail(false);
        }
    }, [ChangeScreen]);
    const sendPasswordResetCode = useCallback(() => {
        //сюда отправку письма на почту, true - если отправлено
        setSendMail(true);
    }, [setSendMail]);
    const verificationEnteredCode = () => {
        let code = codeRef.current.value;
        if(code.length == 8){ 
            let checkCode = true; // вызов функции проверки кода отправленного на почту с введённым. Тут заглушка True всегда
            if(checkCode){
                ChangeScreen(3);
            }
        }
    }





    return(
        <div className={styles.wrapper} onKeyUp={keyUp} tabIndex="0">
            <div className={styles.background}>
                <div></div>
                <div></div>
            </div>
            <div className={styles.main} >
                <div className={styles.logo}></div>
                <div className={styles.auth_text}>{Texts[screen].name}</div>
                <div className={styles.welcome_text}>{Texts[screen].screenInfo[0]}<span 
                className={cn({[styles.auth_welcom_text]: screen != 1}, 
                {[styles.reg_welcom_text]:screen == 1})}
                onClick={() => {
                    if(screen == 0) ChangeScreen(1);
                }}
                >{Texts[screen].screenInfo[1]}</span></div>
                <div className={styles.inputs}>
                    {(screen == 0 || screen == 1 || screen == 2) && <div className={styles.mail}>
                        <input type="text" className={cn(styles.input, {[styles.currectData]:correctData.email}, {[styles.errorData]:(!correctData.email && correctData.email != null)})} placeholder="Введите почту" ref={emailRef}/>
                        <div className={styles.mail_IMG}>{}</div>
                    </div>
                    }
                    {(screen == 0 || screen == 1 || screen == 3) && <div className={styles.password}>
                        <input type={showPass ? "text" : "password"} className={cn(styles.input, {[styles.currectData]:correctData.password}, {[styles.errorData]:(!correctData.password && correctData.password != null)})} placeholder="Введите пароль" ref={passwordRef} />
                        <div className={styles.lock_IMG}></div>
                        <div className={styles.eye_IMG} onClick={() => ChangePasswordType()}>{!showPass ? <CloseEyeSVG /> : <EyeSVG />}</div>
                    </div>
                    }
                    
                    {(screen == 1 || screen == 3) && <div className={styles.password}>
                        <input type={showPass ? "text" : "password"} className={cn(styles.input, {[styles.currectData]:correctData.repassword}, {[styles.errorData]:(!correctData.repassword && correctData.repassword != null)})} placeholder="Введите пароль" ref={repasswordRef} />
                        <div className={styles.lock_IMG}></div>
                        <div className={styles.eye_IMG} onClick={() => ChangePasswordType()}>
                            {/* {!showPass ? <CloseEyeSVG /> : <EyeSVG />} */}
                        </div>
                    </div>
                    }
                </div>
                {screen == 1 && <div className={cn(styles.save_my_data, styles.rules)}>
                    <label>
                        <input type="checkbox" className={styles.saveme_input} />
                        <div className={styles.fake_checkbox}>
                            <div></div>
                        </div>
                        <div className={styles.checkboxStyle}>{Texts[screen].checkbox[0]}<span>{Texts[screen].checkbox[1]}</span></div>
                    </label>
                </div>}
                {(screen == 2 || screen == 3) && <div className={styles.dopText}>
                    {Texts[screen].dopText[0]} <span>{Texts[screen].dopText[1]}</span>
                    {screen == 2 && <div className={styles.reset}>
                    <div className={cn(styles.reset_text, {[styles.white_color]:sendMail})}>Введите код</div>
                    <input type="text" className={cn(styles.reset_input)} ref={codeRef} /> 
                    </div>} 
                </div> }
                <div className={cn(styles.btn, {[styles.btn_auth]:screen == 0}, {[styles.btn_repass]:screen == 3})} onClick={() => BtnClick()}>{Texts[screen].mainButton}</div>
                {screen == 0 && <div className={styles.save_my_data}>
                    <label>
                        <input type="checkbox" className={styles.saveme_input} />
                        <div className={styles.fake_checkbox}>
                            <div></div>
                        </div>
                        <div>{Texts[screen].checkbox[0]}<span>{Texts[screen].checkbox[1]}</span></div>
                    </label>
                </div>}

                {screen == 0 && <div className={styles.forgot_password} onClick={() => ChangeScreen(2)}>Забыли пароль? <span onClick={() => console.log('reset password')}>Восстановить</span></div>}
                {screen != 0 && <div className={styles.back}>
                    <div className={styles.back_button_ESC}>ESC</div>
                    <div className={styles.back_text}>Вернуться</div>
                </div> }
            </div>
            <div className={styles.info}>
                <div className={styles.line}></div>
                <div>Мы позаботились о том, что бы Вы не вводили каждый раз данные для входа, поэтому для авторизации используем Ваш аккаунт в Social Club. В целях безопасности нам нужен только Ваш адрес электронной почты, на который Вы регистрировали аккаунт.</div>
            </div>
            <EyeSVG />
        </div>
    )
}
//{[styles.green_border]}
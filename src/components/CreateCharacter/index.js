import React, {useCallback, useState, useRef, useEffect} from 'react';
import styles from './assets/styles.css';
import cn from 'classnames';

//components
import Head from './components/Head';
import Face from './components/Face';
import OtherStyle from './components/OtherStyle';
import Range from './components/Range';
//images
import HeadSVG from './assets/images/head.svg';
import FaceSVG from './assets/images/face.svg';
import OtherSVG from './assets/images/style.svg';
import HeadActiveSVG from './assets/images/headActive.svg';
import FaceActiveSVG from './assets/images/faceActive.svg';
import OtherActiveSVG from './assets/images/styleActive.svg';
import MouseLeftClickSVG from './assets/images/mouseLeftClick.svg';
import MouseCentralClickSVG from './assets/images/mouseCentralClick.svg';
import Female_0_SVG from './components/Head/assets/images/parents/female_0.svg';
import Female_1_SVG from './components/Head/assets/images/parents/female_1.svg';
import Female_2_SVG from './components/Head/assets/images/parents/female_2.svg';
import Female_3_SVG from './components/Head/assets/images/parents/female_3.svg';
import Female_4_SVG from './components/Head/assets/images/parents/female_4.svg';
import Female_5_SVG from './components/Head/assets/images/parents/female_5.svg';
import Female_6_SVG from './components/Head/assets/images/parents/female_6.svg';
import Female_7_SVG from './components/Head/assets/images/parents/female_7.svg';
import Female_8_SVG from './components/Head/assets/images/parents/female_8.svg';
import Female_9_SVG from './components/Head/assets/images/parents/female_9.svg';
import Female_10_SVG from './components/Head/assets/images/parents/female_10.svg';
import Female_11_SVG from './components/Head/assets/images/parents/female_11.svg';
import Female_12_SVG from './components/Head/assets/images/parents/female_12.svg';
import Female_13_SVG from './components/Head/assets/images/parents/female_13.svg';
import Female_14_SVG from './components/Head/assets/images/parents/female_14.svg';
import Female_15_SVG from './components/Head/assets/images/parents/female_15.svg';
import Female_16_SVG from './components/Head/assets/images/parents/female_16.svg';
import Female_17_SVG from './components/Head/assets/images/parents/female_17.svg';
import Female_18_SVG from './components/Head/assets/images/parents/female_18.svg';
import Female_19_SVG from './components/Head/assets/images/parents/female_19.svg';
import Female_20_SVG from './components/Head/assets/images/parents/female_20.svg';
import Female_21_SVG from './components/Head/assets/images/parents/female_21.svg';

import Male_0_SVG from './components/Head/assets/images/parents/male_0.svg';
import Male_1_SVG from './components/Head/assets/images/parents/male_1.svg';
import Male_2_SVG from './components/Head/assets/images/parents/male_2.svg';
import Male_3_SVG from './components/Head/assets/images/parents/male_3.svg';
import Male_4_SVG from './components/Head/assets/images/parents/male_4.svg';
import Male_5_SVG from './components/Head/assets/images/parents/male_5.svg';
import Male_6_SVG from './components/Head/assets/images/parents/male_6.svg';
import Male_7_SVG from './components/Head/assets/images/parents/male_7.svg';
import Male_8_SVG from './components/Head/assets/images/parents/male_8.svg';
import Male_9_SVG from './components/Head/assets/images/parents/male_9.svg';
import Male_10_SVG from './components/Head/assets/images/parents/male_10.svg';
import Male_11_SVG from './components/Head/assets/images/parents/male_11.svg';
import Male_12_SVG from './components/Head/assets/images/parents/male_12.svg';
import Male_13_SVG from './components/Head/assets/images/parents/male_13.svg';
import Male_14_SVG from './components/Head/assets/images/parents/male_14.svg';
import Male_15_SVG from './components/Head/assets/images/parents/male_15.svg';
import Male_16_SVG from './components/Head/assets/images/parents/male_16.svg';
import Male_17_SVG from './components/Head/assets/images/parents/male_17.svg';
import Male_18_SVG from './components/Head/assets/images/parents/male_18.svg';
import Male_19_SVG from './components/Head/assets/images/parents/male_19.svg';
import Male_20_SVG from './components/Head/assets/images/parents/male_20.svg';
import Male_21_SVG from './components/Head/assets/images/parents/male_21.svg';
import Male_22_SVG from './components/Head/assets/images/parents/male_22.svg';
import Male_23_SVG from './components/Head/assets/images/parents/male_23.svg';



const MaleParent = [
    {
        name: "Стич",
        picture: <Male_0_SVG />
    },
    {
        name: "Сергей",
        picture: <Male_1_SVG />
    },
    {
        name: "Кот",
        picture: <Male_2_SVG />
    },
    {
        name: "Name_3",
        picture: <Male_3_SVG />
    },
    {
        name: "Name_4",
        picture: <Male_4_SVG />
    },
    {
        name: "Name_5",
        picture: <Male_5_SVG />
    },
    {
        name: "Name_6",
        picture: <Male_6_SVG />
    },
    {
        name: "Name_7",
        picture: <Male_7_SVG />
    },
    {
        name: "Name_8",
        picture: <Male_8_SVG />
    },
    {
        name: "Name_9",
        picture: <Male_9_SVG />
    },
    {
        name: "Name_10",
        picture: <Male_10_SVG />
    },
    {
        name: "Name_11",
        picture: <Male_11_SVG />
    },
    {
        name: "Name_12",
        picture: <Male_12_SVG />
    },
    {
        name: "Name_13",
        picture: <Male_13_SVG />
    },
    {
        name: "Name_14",
        picture: <Male_14_SVG />
    },
    {
        name: "Name_15",
        picture: <Male_15_SVG />
    },
    {
        name: "Name_16",
        picture: <Male_16_SVG />
    },
    {
        name: "Name_17",
        picture: <Male_17_SVG />
    },
    {
        name: "Name_18",
        picture: <Male_18_SVG />
    },
    {
        name: "Name_19",
        picture: <Male_19_SVG />
    },
    {
        name: "Name_20",
        picture: <Male_20_SVG />
    },
    {
        name: "Name_21",
        picture: <Male_21_SVG />
    },
    {
        name: "Name_22",
        picture: <Male_22_SVG />
    },
    {
        name: "Name_23",
        picture: <Male_23_SVG />
    }
]
const FemaleParent = [
    {
        name: "Female_0",
        picture: <Female_0_SVG />
    },
    {
        name: "Female_1",
        picture: <Female_1_SVG />
    },
    {
        name: "Female_2",
        picture: <Female_2_SVG />
    },
    {
        name: "Female_3",
        picture: <Female_3_SVG />
    },
    {
        name: "Female_4",
        picture: <Female_4_SVG />
    },
    {
        name: "Female_5",
        picture: <Female_5_SVG />
    },
    {
        name: "Female_6",
        picture: <Female_6_SVG />
    },
    {
        name: "Female_7",
        picture: <Female_7_SVG />
    },
    {
        name: "Female_8",
        picture: <Female_8_SVG />
    },
    {
        name: "Female_9",
        picture: <Female_9_SVG />
    },
    {
        name: "Female_10",
        picture: <Female_10_SVG />
    },
    {
        name: "Female_11",
        picture: <Female_11_SVG />
    },
    {
        name: "Female_12",
        picture: <Female_12_SVG />
    },
    {
        name: "Female_13",
        picture: <Female_13_SVG />
    },
    {
        name: "Female_14",
        picture: <Female_14_SVG />
    },
    {
        name: "Female_15",
        picture: <Female_15_SVG />
    },
    {
        name: "Female_16",
        picture: <Female_16_SVG />
    },
    {
        name: "Female_17",
        picture: <Female_17_SVG />
    },
    {
        name: "Female_18",
        picture: <Female_18_SVG />
    },
    {
        name: "Female_19",
        picture: <Female_19_SVG />
    },
    {
        name: "Female_20",
        picture: <Female_20_SVG />
    },
    {
        name: "Female_21",
        picture: <Female_21_SVG />
    },
]



export default function CreateCharacter(){
//STATES
    //HEAD
    const [type, setType] = useState(0);
    const [gender, setGender] = useState('male');
    const [parents, setParents] = useState({
        male: 0,
        female: 0
    });
    const [randomClick, setRandomClick] = useState(false);
    const [createClick, setCreateClick] = useState(false);

    const [male_num, setMale_num] = useState(0);
    const [female_num, setFemale_num] = useState(0);

    const [similarity, setSimilarity] = useState(50);
    //FACE
    const [eyebrowsLeftValue, setELV] = useState(50);
    const [eyebrowsRightValue, setERV] = useState(50);
    const [eyebrowsWidthValue, setEW] = useState(50);
    const [noseNostrilsValue, setNN] = useState(50);
    const [noseWidthValue, setNW] = useState(50);
    const [noseLengthValue, setNL] = useState(50);
    const [foreheadHeightValue, setFHH] = useState(50);
    const [foreheadWidthValue, setFHW] = useState(50);
    const [foreheadLengthValue, setFHL] = useState(50);
    //OTHERSTYLE
    const [hairstyle, setHairstyle] = useState(0);
    const [hairColor, setHairColor] = useState(0);
    const [beard, setBeard] = useState(0);
    const [beardColor, setBeardColor] = useState(0);
    //приблизить/повернуть
    const [rotate, setRotate] = useState(180);
    const [range, setRange] = useState(180);
    //Правильные данные
    const [currentData, setCurrentData] = useState({
        firstName: null,
        secondName: null,
        age: null
    })

    let firstNameRef = useRef(); // имя
    let secondNameRef = useRef(); // фамилия
    let ageRef = useRef(); // возраст



    const RandomСharacteristics = useCallback(() => {
        if(!randomClick){
        setSimilarity(Math.floor(Math.random() * 100) + 1);
        setELV(Math.floor(Math.random() * 100) + 1);
        setERV(Math.floor(Math.random() * 100) + 1);
        setEW(Math.floor(Math.random() * 100) + 1);
        setNN(Math.floor(Math.random() * 100) + 1);
        setNW(Math.floor(Math.random() * 100) + 1);
        setNL(Math.floor(Math.random() * 100) + 1);
        setFHH(Math.floor(Math.random() * 100) + 1);
        setFHW(Math.floor(Math.random() * 100) + 1);
        setFHL(Math.floor(Math.random() * 100) + 1);
        setFemale_num(Math.floor(Math.random() * 20));
        setMale_num(Math.floor(Math.random() * 22));
        setParents({
            male: Math.floor(Math.random() * MaleParent.length),
            female: Math.floor(Math.random() * FemaleParent.length)
        })
        setHairstyle(Math.floor(Math.random() * 12));
        setHairColor(Math.floor(Math.random() * 12));
        setBeard(Math.floor(Math.random() * 8));
        setBeardColor(Math.floor(Math.random() * 12));
        setRandomClick(true);
        setTimeout(() => {
            setRandomClick(false);
        }, 200);
    }
    }, [setSimilarity, setELV, setERV, setEW, setNN, setNW, setNL, setFHH, setFHW, setFHL, setParents, setHairColor, setHairstyle, setBeardColor, setBeard, setMale_num, setFemale_num, setRandomClick, randomClick]);

    const ChangeRotate = useCallback(() => {
        setRotate(parseInt(e.target.value));
    }, [ChangeRotate]);
    const ChangeRange = useCallback(() => {
        setRange(parseInt(e.target.value));
    }, [setRange]);


    const ChangeType = useCallback((num) => {
        setType(num)
    }, [setType]);
    const CreateNewCharacter = () => {
        if(!createClick){
            //ВАЛИДАЦИЯ
            let checkFirstName = null, checkSecondName = null, checkAge = null;
            if(firstNameRef.current.value.length > 2 && firstNameRef.current.value.length < 24){
                checkFirstName = true;
            } else checkFirstName = false;
            if(secondNameRef.current.value.length > 4 && secondNameRef.current.value.length < 24){
                checkSecondName = true;
            } else checkSecondName = false;
            if(ageRef.current.value >= 18) checkAge=true;
            else checkAge = false;
            setCreateClick(true);

            setCurrentData({
                firstName: checkFirstName,
                secondName: checkSecondName,
                age: checkAge
            })
            setTimeout(() => {
                setCurrentData({
                    firstName: null,
                    secondName: null,
                    age: null
                });
            }, 500);
            setTimeout(() => {
                setCreateClick(false);
            }, 250);
        }
    }
    useEffect(() => {
        setRange(range);
    }, [range]);
    return(
        <div className={styles.wrapper}>
            <div className={styles.leftBlock}>
                <div className={styles.stick}></div>
                <div className={styles.main}>
                    <div className={styles.windowName}>СОЗДАНИЕ ПЕРСОНАЖА</div>
                    <div className={styles.criteria}>
                        <div className={styles.typesBlock}>
                            <div onClick={() => ChangeType(0)}>
                                <div>{type == 0 ? <HeadActiveSVG /> : <HeadSVG />}</div>
                                <div className={ type == 0 ? styles.typeTextActive : styles.typeName}>Голова</div>
                            </div>
                            <div onClick={() => ChangeType(1)}>
                                <div>{type == 1 ? <FaceActiveSVG /> : <FaceSVG />}</div>
                                <div className={ type == 1 ? styles.typeTextActive : styles.typeName}>Лицо</div>
                            </div>
                            <div onClick={() => ChangeType(2)}>
                                <div>{type == 2 ? <OtherActiveSVG /> : <OtherSVG />}</div>
                                <div className={ type == 2 ? styles.typeTextActive : styles.typeName}>Стиль</div>
                            </div>
                        </div>
                            <Head type={type} firstName={firstNameRef} secondName={secondNameRef} age={ageRef} gender={gender} setGender={setGender} setParents={setParents} currentData={currentData} similarity={similarity} setSimilarity={setSimilarity} MaleParent={MaleParent} FemaleParent={FemaleParent} male_num={male_num} setMale_num={setMale_num} female_num={female_num} setFemale_num={setFemale_num} />
                            <Face type={type} eyebrowsLeftValue={eyebrowsLeftValue} setELV={setELV} eyebrowsRightValue={eyebrowsRightValue} setERV={setERV} eyebrowsWidthValue={eyebrowsWidthValue} setEW={setEW} noseNostrilsValue={noseNostrilsValue} setNN={setNN} noseWidthValue={noseWidthValue} setNW={setNW} noseLengthValue={noseLengthValue} setNL={setNL} foreheadHeightValue={foreheadHeightValue} setFHH={setFHH} foreheadWidthValue={foreheadWidthValue} setFHW={setFHW} foreheadLengthValue={foreheadLengthValue} setFHL={setFHL} />
                            <OtherStyle type={type} hairstyle={hairstyle} setHairstyle={setHairstyle} hairColor={hairColor} setHairColor={setHairColor} beard={beard} setBeard={setBeard} beardColor={beardColor} setBeardColor={setBeardColor} />
                    </div>
                    <div className={cn({[styles.btnCreate]:!createClick}, {[styles.btnCreateClick]:createClick})} onClick={() => CreateNewCharacter()}>Создать персонажа</div>
                </div>
                <div className={cn({[styles.random]:!randomClick}, {[styles.randomClick]:randomClick})} onClick={() => RandomСharacteristics()}>Рандом</div>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.firstRange}>
                    <div className={styles.rangeText}>Поворот</div>
                    <div className={styles.rangeBlock}>
                        <div><MouseLeftClickSVG /></div>
                        <Range min={0} max={359} value={rotate} onChange={ChangeRotate} />
                    </div>
                </div>
                <div className={styles.secondRange}>
                    <div className={styles.rangeText}>Дальность</div>
                    <div className={styles.rangeBlock}>
                        <Range min={100} max={299} value={range} onChange={ChangeRange} />
                        <div className={styles.mouseCentralClick}><MouseCentralClickSVG /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useCallback, useState, useRef, useEffect} from 'react';
import styles from './assets/styles.css';
import cn from 'classnames';

import Range from '../Face/components/Range';

import Left_ArrowSVG from './assets/images/left_arrow.svg';
import Right_ArrowSVG from './assets/images/right_arrow.svg';




export default function Head({type, firstName, secondName, age, gender, setGender, setParents, currentData, similarity, setSimilarity, MaleParent, FemaleParent, male_num, setMale_num, female_num, setFemale_num }){
    const ChangeGender = useCallback((type) => {
        setGender(type);
    }, [setGender]);
    const MaleParentStyle = {
        backgroundImage: "url(./assets/images/parents/female_5.png)"
    }
    const ChangeMaleParentNum = useCallback((num) => {
        if(num < MaleParent.length && num >= 0) setMale_num(num);
    }, [setMale_num]);
    const ChangeFemaleParentNum = useCallback((num) => {
        if(num < FemaleParent.length && num >= 0) setFemale_num(num);
    }, [setFemale_num])
    const ChangeSimilarityValue = useCallback((e) => {
        setSimilarity(parseInt(e.target.value));
    }, [setSimilarity]);
    return(
        <div className={cn(styles.main_head, {[styles.hide]:type != 0})}>
            <input type={"text"} className={cn(styles.input, {[styles.currectData]: currentData.firstName}, {[styles.errorData]: (!currentData.firstName && currentData.firstName != null)})} placeholder="Имя персонажа" ref={firstName} />
            <input type={"text"} className={cn(styles.input, {[styles.currectData]: currentData.secondName}, {[styles.errorData]: (!currentData.secondName && currentData.secondName != null)})} placeholder="Фамилия персонажа" ref={secondName} />
            <input type={"text"} className={cn(styles.input, {[styles.currectData]: currentData.age}, {[styles.errorData]: (!currentData.age && currentData.age != null)})} placeholder="Возраст" ref={age} />
            <div className={styles.select_gender}>Выберите пол</div>
            <div className={styles.gender}>
                <div className={cn(styles.btn_gender, styles.male, {[styles.maleActive]:gender=="male"})} onClick={() => ChangeGender('male')}>Мужской</div>
                <div className={cn(styles.btn_gender, styles.female, {[styles.femaleActive]:gender=="female"})} onClick={() => ChangeGender('female')}>Женский</div>
            </div>
            <div className={styles.select_parents}>Выберите родителей</div>
            <div className={styles.parents}>
                <div>
                    <div className={styles.name}>{MaleParent[male_num].name}</div>
                    <div>
                        <div className={styles.leftArrow} onClick={() => ChangeMaleParentNum(male_num - 1)}> <Left_ArrowSVG /> </div>
                        <div className={styles.parentIMG}>{MaleParent[male_num].picture}</div>
                        <div className={styles.rightArrow} onClick={() => ChangeMaleParentNum(male_num + 1)}> <Right_ArrowSVG /> </div>
                    </div>
                </div>
                <div>
                    <div className={styles.name}>{FemaleParent[female_num].name}</div>
                    <div>
                        <div className={styles.leftArrow} onClick={() => ChangeFemaleParentNum(female_num - 1)}> <Left_ArrowSVG /> </div>
                        <div className={styles.parentIMG}>{FemaleParent[female_num].picture}</div>
                        <div className={styles.rightArrow} onClick={() => ChangeFemaleParentNum(female_num + 1)}> <Right_ArrowSVG /> </div>
                    </div>
                </div>
            </div>
            <div className={styles.select_similarity}>Схожесть</div>
            <Range min={0} max={100} value={similarity} onChange={ChangeSimilarityValue} />
        </div>
    )
}


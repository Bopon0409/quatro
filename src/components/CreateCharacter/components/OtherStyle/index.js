import React, {useCallback} from 'react';
import styles from './assets/styles.css';
import cn from 'classnames';


/*
    HAIR_COLORS - цвета волос,
    BEARD_COLORS - цвета бороды
*/

const HAIR_COLORS=[
    {background:'rgba(220,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,220,20,1)'},
    {background:'rgba(20,120,20,1)'},
    {background:'rgba(20,50,20,1)'},
    {background:'rgba(20,20,20,1)'},
]
const BEARD_COLORS=[
    {background:'rgba(220,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,20,20,1)'},
    {background:'rgba(20,220,20,1)'},
    {background:'rgba(20,120,20,1)'},
    {background:'rgba(20,50,20,1)'},
    {background:'rgba(20,20,20,1)'},
]


















export default function OtherStyle({ type, hairstyle, setHairstyle, hairColor, setHairColor, beard, setBeard, beardColor, setBeardColor }){
    const ChangeHairstyle = useCallback((n) => {
        setHairstyle(n);
    }, [setHairstyle]);
    const ChangeBeard = useCallback((n) => {
        setBeard(n);
    }, [setBeard]);
    const ChangeBeardColor = useCallback((n) => {
        setBeardColor(n);
    }, [setBeardColor]);
    const ChangeHairColor = useCallback((n) => {
        setHairColor(n);
    }, [setHairColor]);
    return(
        <div className={cn(styles.main_otherStyle, {[styles.hide]: type != 2})}>
            <div className={styles.select_hairstyle}>Выберите прическу</div>
            <div className={styles.hairstyles}>
                <div className={styles.select_color}>
                    <div className={styles.textBox}>
                        <div>Выбор цвета</div>
                        <div>Причёска</div>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.colors}>
                        <div className={styles.colorsRow}>
                            <div className={cn({[styles.smallBox]:hairColor != 0}, {[styles.smallBoxActive]:hairColor == 0})} onClick={() => ChangeHairColor(0)} style={HAIR_COLORS[0]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 1}, {[styles.smallBoxActive]:hairColor == 1})} onClick={() => ChangeHairColor(1)} style={HAIR_COLORS[1]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 2}, {[styles.smallBoxActive]:hairColor == 2})} onClick={() => ChangeHairColor(2)} style={HAIR_COLORS[2]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 3}, {[styles.smallBoxActive]:hairColor == 3})} onClick={() => ChangeHairColor(3)} style={HAIR_COLORS[3]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 4}, {[styles.smallBoxActive]:hairColor == 4})} onClick={() => ChangeHairColor(4)} style={HAIR_COLORS[4]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 5}, {[styles.smallBoxActive]:hairColor == 5})} onClick={() => ChangeHairColor(5)} style={HAIR_COLORS[5]}></div>
                        </div>
                        <div className={styles.colorsRow}>
                            <div className={cn({[styles.smallBox]:hairColor != 6}, {[styles.smallBoxActive]:hairColor == 6})} onClick={() => ChangeHairColor(6)} style={HAIR_COLORS[6]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 7}, {[styles.smallBoxActive]:hairColor == 7})} onClick={() => ChangeHairColor(7)} style={HAIR_COLORS[7]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 8}, {[styles.smallBoxActive]:hairColor == 8})} onClick={() => ChangeHairColor(8)} style={HAIR_COLORS[8]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 9}, {[styles.smallBoxActive]:hairColor == 9})} onClick={() => ChangeHairColor(9)} style={HAIR_COLORS[9]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 10}, {[styles.smallBoxActive]:hairColor == 10})} onClick={() => ChangeHairColor(10)} style={HAIR_COLORS[10]}></div>
                            <div className={cn({[styles.smallBox]:hairColor != 11}, {[styles.smallBoxActive]:hairColor == 11})} onClick={() => ChangeHairColor(11)} style={HAIR_COLORS[11]}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 0})} onClick={() => ChangeHairstyle(0)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 1})} onClick={() => ChangeHairstyle(1)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 2})} onClick={() => ChangeHairstyle(2)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 3})} onClick={() => ChangeHairstyle(3)}></div>
                </div>
                <div className={styles.row}>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 4})} onClick={() => ChangeHairstyle(4)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 5})} onClick={() => ChangeHairstyle(5)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 6})} onClick={() => ChangeHairstyle(6)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 7})} onClick={() => ChangeHairstyle(7)}></div>
                </div>
                <div className={styles.row}>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 8})} onClick={() => ChangeHairstyle(8)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 9})} onClick={() => ChangeHairstyle(9)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 10})} onClick={() => ChangeHairstyle(10)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:hairstyle == 11})} onClick={() => ChangeHairstyle(11)}></div>
                </div>
            </div>
            <div className={styles.select_beard}>Выберите бороду</div>
            <div className={styles.beards}>
                
                <div className={styles.select_color}>
                    <div className={styles.textBox}>
                        <div>Выбор цвета</div>
                        <div>Борода</div>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.colors}>
                        <div className={styles.colorsRow}>
                            <div className={cn({[styles.smallBox]:beardColor != 0}, {[styles.smallBoxActive]:beardColor == 0})} onClick={() => ChangeBeardColor(0)}  style={BEARD_COLORS[0]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 1}, {[styles.smallBoxActive]:beardColor == 1})} onClick={() => ChangeBeardColor(1)}  style={BEARD_COLORS[1]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 2}, {[styles.smallBoxActive]:beardColor == 2})} onClick={() => ChangeBeardColor(2)}  style={BEARD_COLORS[2]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 3}, {[styles.smallBoxActive]:beardColor == 3})} onClick={() => ChangeBeardColor(3)}  style={BEARD_COLORS[3]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 4}, {[styles.smallBoxActive]:beardColor == 4})} onClick={() => ChangeBeardColor(4)}  style={BEARD_COLORS[4]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 5}, {[styles.smallBoxActive]:beardColor == 5})} onClick={() => ChangeBeardColor(5)}  style={BEARD_COLORS[5]}></div>
                        </div>
                        <div className={styles.colorsRow}>
                            <div className={cn({[styles.smallBox]:beardColor != 6}, {[styles.smallBoxActive]:beardColor == 6})} onClick={() => ChangeBeardColor(6)}  style={BEARD_COLORS[6]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 7}, {[styles.smallBoxActive]:beardColor == 7})} onClick={() => ChangeBeardColor(7)}  style={BEARD_COLORS[7]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 8}, {[styles.smallBoxActive]:beardColor == 8})} onClick={() => ChangeBeardColor(8)}  style={BEARD_COLORS[8]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 9}, {[styles.smallBoxActive]:beardColor == 9})} onClick={() => ChangeBeardColor(9)}  style={BEARD_COLORS[9]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 10}, {[styles.smallBoxActive]:beardColor == 10})} onClick={() => ChangeBeardColor(10)}  style={BEARD_COLORS[10]}></div>
                            <div className={cn({[styles.smallBox]:beardColor != 11}, {[styles.smallBoxActive]:beardColor == 11})} onClick={() => ChangeBeardColor(11)}  style={BEARD_COLORS[11]}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={cn(styles.box, {[styles.boxActive]:beard == 0})} onClick={() => ChangeBeard(0)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:beard == 1})} onClick={() => ChangeBeard(1)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:beard == 2})} onClick={() => ChangeBeard(2)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:beard == 3})} onClick={() => ChangeBeard(3)}></div>
                </div>
                <div className={styles.row}>
                    <div className={cn(styles.box, {[styles.boxActive]:beard == 4})} onClick={() => ChangeBeard(4)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:beard == 5})} onClick={() => ChangeBeard(5)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:beard == 6})} onClick={() => ChangeBeard(6)}></div>
                    <div className={cn(styles.box, {[styles.boxActive]:beard == 7})} onClick={() => ChangeBeard(7)}></div>
                </div>
            </div>
        </div>
    )
}
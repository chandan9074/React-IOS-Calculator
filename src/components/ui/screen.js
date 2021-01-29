import React, { Component, useState } from 'react';
import division from './../../img/division.png';
import cal_delete from './../../img/cal_delete.png';

const Screen = () => {
    var be = "";
    var af = "";
    var [finalResult, setFinalResult] = useState("0");
    var [ope, setOpe] = useState(0)
    var [a, setA] = useState("")
    var [b, setB] = useState("")
    var [check, setCheck] = useState(0);
    var [final, setFinal] = useState(0);
    var [checkresult, setCheckresult] = useState(0);
    var [checkresultbefor, setCheckresultbefor] = useState(0);
    var [b_p, setB_p] = useState(0);
    var [a_p, setA_p] = useState(0);
    var [checkPoint, setCheckpoint] = useState(0);
    var [reshendle, setReshendle] = useState(0);
    var [percheck, setPerCheck] = useState(0);
    var [minuscheck, setMinuscheck] = useState(0);
    

    const onchangehandle = (e) =>{

        if(ope===0){
            if(checkresultbefor===0){
                setFinalResult(finalResult="")
                setCheckresultbefor(checkresultbefor=1);
            }
            be += e.toString();
            setB(b+be);
            setCheck(check=0);
            setFinalResult(finalResult+be);
            setPerCheck(percheck=0);
        }
        else {
            af+=e;
            setA(a+e);
            if(checkresult===0){
                setFinalResult(finalResult="");
                setCheckresult(checkresult = 1);
            }
            setFinalResult(finalResult+af);
            setPerCheck(percheck=0);
        }
    }

    const onoperationhandle = (e) => {
        if (ope!==0){
            onresulthandle();
        }
        setOpe(ope=e);
        setCheckpoint(checkPoint = 0);
        setMinuscheck(minuscheck=0);
    }

    const onresulthandle = () => {
        setMinuscheck(minuscheck=0);
        if (reshendle===0 && ope!==0){
                if (check===0){
                    setFinalResult(finalResult="")
                    if(ope===1){
                        var before = parseInt(b);
                        var after = parseInt(a);
                        setFinal(final= (before/after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===2){
                        var before = parseInt(b);
                        var after = parseInt(a);
                        setFinal(final= (before*after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===3){
                        var before = parseInt(b);
                        var after = parseInt(a);
                        setFinal(final= (before-after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===4){
                        var before = parseInt(b);
                        var after = parseInt(a);
                        setFinal(final= (before+after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    if (a==="" || b===""){
                        setFinalResult(finalResult+"Bad Expresion");
                    }
                
                    setA(a="");
                    setB(b="");
                    setOpe(ope=0);
                    setCheck(check=1);
                    setCheckresult(checkresult = 0);
                    setCheckresultbefor(checkresultbefor = 0);
                }

                else {
                    setFinalResult(finalResult="")
                    if(ope===1){
                        var after = parseInt(a);
                        setFinal(final= (final/after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===2){
                        var after = parseInt(a);
                        setFinal(final= (final*after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===3){
                        var after = parseInt(a);
                        setFinal(final= (final-after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===4){
                        var after = parseInt(a);
                        setFinal(final= (final+after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    if(a==="" || final===0){
                        setFinalResult(finalResult+"Bad Expresion");
                        setFinal(final=0);
                    }
                    setA(a="");
                    setB(b="");
                    setOpe(ope=0);
                    setCheckresult(checkresult=0);
                    setCheckresultbefor(checkresultbefor = 0);
                }
        
        }
        else if (reshendle===1 && ope!==0){
             setFinalResult(finalResult="")
            if(check===0){
                if(ope===1){
                    if(b_p===1){
                        var before = parseFloat(b)
                    }
                    else {
                        var before = parseInt(b)
                    }
                    if(a_p===1){
                        var after = parseFloat(a)
                    }
                    else {
                        var after = parseInt(a)
                    }
                    setFinal(final= (before/after));
                    var str2 = final.toString();
                    setFinalResult(finalResult+str2);
                }
                else if(ope===2){
                    if(b_p===1){
                        var before = parseFloat(b)
                    }
                    else {
                        var before = parseInt(b)
                    }
                    if(a_p===1){
                        var after = parseFloat(a)
                    }
                    else {
                        var after = parseInt(a)
                    }
                    setFinal(final= (before*after));
                    var str2 = final.toString();
                    setFinalResult(finalResult+str2);
                }
                else if(ope===3){
                    if(b_p===1){
                        var before = parseFloat(b)
                    }
                    else {
                        var before = parseInt(b)
                    }
                    if(a_p===1){
                        var after = parseFloat(a)
                    }
                    else {
                        var after = parseInt(a)
                    }
                    setFinal(final= (before-after));
                    var str2 = final.toString();
                    setFinalResult(finalResult+str2);
                }
                else if(ope===4){
                    if(b_p===1){
                        var before = parseFloat(b)
                    }
                    else {
                        var before = parseInt(b)
                    }
                    if(a_p===1){
                        var after = parseFloat(a)
                    }
                    else {
                        var after = parseInt(a)
                    }
                    setFinal(final= (before+after));
                    var str2 = final.toString();
                    setFinalResult(finalResult+str2);
                }
                if (a==="" || b===""){
                    setFinalResult(finalResult+"Bad Expresion");
                }
                
                setA(a="");
                setB(b="");
                setOpe(ope=0);
                setCheck(check=1);
                setA_p(a_p=0);
                setB_p(b_p=0);
                setCheckresult(checkresult = 0);
                setCheckresultbefor(checkresultbefor = 0);
            }
            else {
                setFinalResult(finalResult="")
                    if(ope===1){
                        if(a_p===1){
                            var after = parseFloat(a)
                        }
                        else {
                            var after = parseInt(a);
                        }
                        setFinal(final= (final/after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===2){
                        if(a_p===1){
                            var after = parseFloat(a)
                        }
                        else {
                            var after = parseInt(a);
                        }
                        setFinal(final= (final*after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===3){
                        if(a_p===1){
                            var after = parseFloat(a)
                        }
                        else {
                            var after = parseInt(a);
                        }
                        setFinal(final= (final-after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    else if(ope===4){
                        if(a_p===1){
                            var after = parseFloat(a)
                        }
                        else {
                            var after = parseInt(a);
                        }
                        setFinal(final= (final+after));
                        var str2 = final.toString();
                        setFinalResult(finalResult+str2);
                    }
                    if(a==="" || final===0){
                        setFinalResult(finalResult+"Bad Expresion");
                        setFinal(final=0);
                    }
                    
                    setA(a="");
                    setB(b="");
                    setOpe(ope=0);
                    setA_p(a_p=0);
                    setCheckresult(checkresult = 0);
                    setCheckresultbefor(checkresultbefor = 0);
                }
        }
    }
        

    const onperhandle = () => {
        setFinalResult(finalResult="");
        if(reshendle===1){
            if (b===".") {
                setFinalResult(finalResult+"Not Possible");
            }
            else if (a==="" && b!=="" && percheck===0) {
                var before = parseFloat(b);
                setFinal(final = (before/100));
                var str2 = final.toString();
                setFinalResult(finalResult+str2);
                setPerCheck(percheck=1);
            }
            else if(a!=="" && b==="" && percheck===0) {
                var after =  parseFloat(a);
                setFinal(final = (after/100));
                var str2 = final.toString();
                setFinalResult(finalResult+str2);
                setPerCheck(percheck=1);
            }
            else if(a==="" && b==="" && percheck===0){
                setFinal(final = (final/100));
                var str2 = final.toString();
                setFinalResult(finalResult+str2);
                setPerCheck(percheck=1);
            }
            else {
                setFinal(final = (final/100));
                var str2 = final.toString();
                setFinalResult(finalResult+str2);
            }

        }

        else if(reshendle===0){
            if (a==="" && b!=="" && percheck===0) {
                var before = parseInt(b);
                setFinal(final = (before/100));
                var str2 = final.toString();
                setFinalResult(finalResult+str2);
                setPerCheck(percheck=1);
            }
            else if(a!=="" && b==="" && percheck===0) {
                var after =  parseInt(a);
                setFinal(final = (after/100));
                var str2 = final.toString();
                setFinalResult(finalResult+str2);
                setPerCheck(percheck=1);
            }
            else if(a==="" && b==="" && percheck===0){
                setFinal(final = (final/100));
                var str2 = final.toString();
                setFinalResult(finalResult+str2);
                setPerCheck(percheck=1);
            }
            else {
                setFinal(final = (final/100));
                var str2 = final.toString();
                setFinalResult(finalResult+str2);
            }
        }
        setB(b="");
        setA(a="");
        setOpe(ope=0);
        setCheck(check=1);
        setCheckresult(checkresult = 0);
        setCheckresultbefor(checkresultbefor=0);
        setCheckpoint(checkPoint=0);

    }


    const onpointhandle = () => {
        if (ope===0 && checkPoint===0) {
            if(b===""){
                setFinalResult(finalResult="");
                setB(b+".");
                setFinalResult(finalResult+"0.");
                setCheckpoint(checkPoint=1);
                setB_p(b_p = 1);
                setCheckresultbefor(checkresultbefor=1);
            }
            else if(b!==""){
                setB(b+".");
                setFinalResult(finalResult+".");
                setCheckpoint(checkPoint=1);
                setB_p(b_p = 1);
            }
        }
        else if(ope!==0 && checkPoint===0) {
            if(a===""){
                setFinalResult(finalResult="");
                setA(a+".");
                setFinalResult(finalResult+"0.");
                setCheckpoint(checkPoint=1);
                setA_p(a_p = 1);
                setCheckresult(checkresult = 1);
            }
            else if(a!==""){
                setA(a+".");
                setFinalResult(finalResult+".");
                setCheckpoint(checkPoint=1);
                setA_p(a_p = 1);
            }
        }
        setReshendle(reshendle=1);
    }

    const onminushandle = () => {
        if (ope===0 && b!=="" && minuscheck===0){
            setB("-"+b);
            setFinalResult("-"+finalResult);
            setMinuscheck(minuscheck=1);
        }
        else if (ope!==0 && a!=="" && minuscheck===0){
            setA("-"+a);
            setMinuscheck(minuscheck=1);
            setFinalResult("-"+finalResult)
        }
        else if (final!==0 && minuscheck===0){
            setFinalResult(finalResult="");
            setFinal(final= (final * (-1)));
            var str2 = final.toString();
            setFinalResult(finalResult+str2);
            setMinuscheck(minuscheck=1);
        }
    }

    const onclearhandle = () => {
         setB(b="");
         setOpe(ope=0);
         setA(a="");
         setFinal(final = 0);
         setCheck(check = 0);
         setCheckpoint(checkPoint = 0);
         setReshendle(reshendle = 0);
         setB_p(b_p = 0);
         setA_p(a_p = 0);
         setFinalResult(finalResult="0");
         setMinuscheck(minuscheck=0);
         setCheckresultbefor(checkresultbefor=0);
        
    }

    const deleteHandle = () =>{
        if(a==="" && ope===0){
            setFinalResult(finalResult="");
            var str2 = b.charAt(b.length-1);
            if (str2==="."){
                setCheckpoint(checkPoint=0);
            }
            setB(b=b.substring(0, b.length-1));
            setFinalResult(finalResult+b);
        }
        else if (ope!==0){
            setFinalResult(finalResult="");
            var str2 = a.charAt(a.length-1);
            if (str2==="."){
                setCheckpoint(checkPoint=0);
            }
            setA(a=a.substring(0, a.length-1));
            setFinalResult(finalResult+a);
        }
    }

    return ( 
        <div className="buttons">
            <div className="screen scrn">
                <div className="text">
                        {finalResult}    
                    </div>
            </div>

            <button className="buttons_style b_ac" type="button" onClick={(e)=> onclearhandle()}>AC</button>
            <button className="buttons_style b_del" type="button" onClick={(e)=> deleteHandle()} ><img className="delete_img" src={cal_delete} alt="delete..."></img></button>
            <button className="buttons_style b_p_m" type="button" onClick={(e)=> onminushandle()}>+/-</button>
            <button className="buttons_style b_per" type="button" onClick={(e)=> onperhandle()}>%</button>
            <button className="buttons_style b_div" type="button" onClick={(e)=> onoperationhandle(1)}><img className="division_img" src={division} alt="division..."></img></button>
            <button className="buttons_style b_seven" type="button" onClick={(e)=> onchangehandle(7)}>7</button>
            <button className="buttons_style b_eight" type="button" onClick={(e)=> onchangehandle(8)}>8</button>
            <button className="buttons_style b_nine" type="button" onClick={(e)=> onchangehandle(9)}>9</button>
            <button className="buttons_style b_mul" type="button" onClick={(e)=> onoperationhandle(2)}>X</button>
            <button className="buttons_style b_four" type="button" onClick={(e)=> onchangehandle(4)}>4</button>
            <button className="buttons_style b_five" type="button" onClick={(e)=> onchangehandle(5)}>5</button>
            <button className="buttons_style b_six" type="button" onClick={(e)=> onchangehandle(6)}>6</button>
            <button className="buttons_style b_minus" type="button" onClick={(e)=> onoperationhandle(3)}>-</button>
            <button className="buttons_style b_one" type="button" onClick={(e)=> onchangehandle(1)}>1</button>
            <button className="buttons_style b_two" type="button" onClick={(e)=> onchangehandle(2)}>2</button>
            <button className="buttons_style b_three" type="button" onClick={(e)=> onchangehandle(3)}>3</button>
            <button className="buttons_style b_plus" type="button" onClick={(e)=> onoperationhandle(4)}>+</button>
            <button className="buttons_style b_zero" type="button" onClick={(e)=> onchangehandle(0)}>O</button>
            <button className="buttons_style b_point" type="button" onClick={(e)=> onpointhandle()}>.</button>
            <button className="buttons_style b_equal" type="button" onClick={(e)=> onresulthandle()}>=</button>
        </div>
     );
}
 
export default Screen;
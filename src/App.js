import React, { useEffect, useMemo, useState } from 'react'


/* ๐ js0505
  ์ค๋น: 
  1. input value ->setHardNumber

  2.  hardCalculate(hardNumber)ํจ์ ์คํ

  3. hardNumber + 10000 ...return

  4. return ๋ hardCalculateํจ์ ๊ฒฐ๊ณผ๋ฌผ์ ๋ฐ์ดํฐ๋ฐ์ธ๋ฉ
*/

const hardCalculate =(p_number)=>{

  console.log("hard cal")

  for (let i = 0; i < 987654321; i++) {  /*  */  }   //delay time

  return p_number + 1000;

}

/* ๐ js0510
  const hardNumber๊ฐ ์ฌ์ค์ ๋ ๋๋ง๋ค App()์ด ์ฌ๋ ๋๋ง๋๊ณ ์์

  ใ) ๊ฐ๋จํ ์ฝ๋์ธ๋ฐ๋ ๊ณ์ฐ์ 1์ด์ ๋ ๊ฑธ๋ฆผ
 App component์ ์ฒด๊ฐ ์ฌ๋ ๋๋ง ๋๋ฉด์ hardCalculate๋ ์คํ๋๊ธฐ๋๋ฌธ์..


*/
const easyCalculate =(p_number)=>{

  console.log('easy cal')
  return p_number +1;

}

function App() {

  // js0505
  const [hardNumber, sethardNumber] = useState(1)  

  // const hardSum = hardCalculate(hardNumber);
  
  /* ๐ js0522

    10.
    useMemo() hook์ ... hardCalculate()ํจ์..๋ฃ์

    [ ]์์ state๊ฐ ๋ฐ๋๋์๋ง, ๊ทธ ์์ ์ฝ๋ ์คํํจ, 

    (hardNumber์ด ๋ฐ๋๋์๋ง hardCalculate()ํจ์ํธ์ถํจ, )

    ๊ทธ๊ฒ ์๋๋ฉด hardSum๊ฐ ๊ทธ๋๋ก ์ฌ์ฌ์ฉํจ 

    (App ์ปดํฌ๋ํธ๊ฐ ์ฌ๋ ๋๋ง๋์ด๋, ๊ทธ๋๋ก ์ฌ์ฉ๋์ด์ hardCalculate()ํจ์๋ฅผ ํธ์ถ์ํ๊ณ , ์๋์ ์ข์)

    20. 
    App ์ปดํฌ๋ํธ๊ฐ ์ฌ๋๋๋ง๋์ด๋, easyCalculate()ํจ์๋ง ์คํ๋์ด์ ์๋๊ฐ ๋น ๋ฅธ๊ฑธ ํ์ธํ ์์์
  
  */

    const hardSum = useMemo(() => {
      return hardCalculate(hardNumber);
    }, [hardNumber])



  // js0510
  const [easyNumber, setEDasyNumber] = useState(1)

  const easySum = easyCalculate(easyNumber);




  return (
    <div>
      <section>

      <h1>๋ณ์ฝ๋ฉ useMemo</h1>
      <h1>object data type</h1>

        <h3> hard calculate</h3>
        
        <input type="number"  value={hardNumber} onChange={(e)=> sethardNumber(e.target.value)}/>

        <span> +10000 = {hardSum}</span>
      </section>

      <section>
        <h3> easy calculate</h3>

        <input type="number"  value={easyNumber} onChange={(e)=> sethardNumber(e.target.value)}/>

        <span> +10000 = {easySum}</span>
      </section>
    
    
      <App2/>
    </div>
  );
}



/* ๐ js0530 ์ค๋น.  
ํด๋ฆญํ๋ฉด, 
ํ๊ตญ - ์ธ๊ตญ ๋ฐ๋

1. ํด๋ฆญํ๋, isKorea  : true- false ๋ฐ๊ฟ

2. isKorea ๊ฐ true ->ํ๊ตญ

 isKorea ๊ฐ false  -> ์ธ๊ตญ

์ผ๋ก ๋ฐ๋

3. location ๋ฐ์ดํฐ๋ฐ์ธ๋ฉ

*/



const App2 = () => {

  // js0530
  const [number, setNumber] = useState(0)

  const [isKorea, setIsKorea] = useState(true)


  // 

  /* ๐ฆ js0540  Primitive data ํ์ vs reference data ํ์ (Objectํ์)
    ๐Primitive data ํ์

    ๋ณ์์  Privitiveํ์ ๋ฃ์ผ๋ฉด ๊ทธ๋๋ก ๋ด๊น

    ๐reference data ํ์ (Objectํ์)

    ๋ณ์์  Objectํ์๋ฃ์ผ๋ฉด , ๋๋ฌด์ปค์ ๊ทธ๋๋ก ๋ด์ง์์. 

    ์ผ๋จ ๋ฉ๋ชจ๋ฆฌ์์ ๋ฃ๊ณ  

    ๋ณ์์์ ๊ทธ ๊ฐ์ฒด๊ฐ ๋ด๊ธด ๋ฉ๋ชจ๋ฆฌ์ ์ฃผ์๋ฅผ ๋ฃ์
  */

  /* ๐ js0540 
    useEffect ์คํ
    ์ฒซ๋๋๋ง์ผ๋,
    []์์ state๊ฐ ๋ฐ๋๋์๋ง ์คํ๋จ

    ๐ 10. []์์ state๊ฐ  (Primitive data ํ์์ธ string ์ธ๋...)
        -> ์ ์์๋
      
    ๐ 20. []์์ state๊ฐ (reference data ํ์์ธ object ์ธ๋...)

      ->๋ฒ๊ทธ :        
        []์์ state๊ฐ ๋ฐ๋๋ ๋ฟ๋ง์ด ์๋๋ผ, ๋ชจ๋ ๊ฒฝ์ฐ์ ์คํ๋๊ณ  ์์  . ์??
                  
      -> ๋ต:
        number๋ณ์๋ฅผ ๋ฐ๊พธ์ด๋

        Objectํ์์ location๋ณ์๊ฐ ์ด์ ์ location๋ณ์์ ๋ค๋ฅธ ๋ณ์์ด๋ฏ๋ก, 
        useEffect๋ location๋ ๋ฐ๋์๋ค๊ณ  ์ธ์ํจ.

        ๊ทธ๋์ ๋ชจ๋ ๋ค์ ์ฌ๋๋๋งํจ

    ๐30.
        location๋ณ์๊ฐ ์ด๊ธฐํ๋๋๊ฒ์ ๋ง์์ฃผ๊ธฐ

        useMemo์ฌ์ฉํด์ 
        isKorea ๊ฐ ๋ฐ๋๋์๋ง ์ ์ฉ  
  */

  // ๐ฅjs0540-10
  // const location = isKorea ? "Korea" : "USA"

  // ๐ฅjs0540-20
  // const location ={
  //   country: isKorea ? 'Korea' : 'usa',
  // }

  // ๐ฅjs0540-30
  const location = useMemo(() => {
    return{
      country: isKorea ? "Korea" : "usa",
    }
  }, [isKorea])


  useEffect(() => {
    console.log('useEffect calling')
  }, [location])
  

  // js0540-20


  return (
    <div>
      <section>
        <h2>number</h2>
        <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
      </section>

      <section>
        <h2>where are you now?</h2>

        {/* <h2>country : {location}</h2> */}

         <h2>country : {location.country}</h2> 

        <button onClick={()=>{setIsKorea(!isKorea)}}>button</button>
      
      
      </section>
      
    
    
    
    
    </div>
  )
}


export default App;

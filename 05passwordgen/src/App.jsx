import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setLength] = useState(8)
  const [numberallowed,setNumberallowed]=useState(false)
  const [charallowed,setCharallowed]=useState(false)
  const [password,setPassword]=useState()

  //useRef hook
  const passwordRef=useRef(null)

  const passowrdgenerator=useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  
    if(numberallowed) str+="0123456789"
    if (charallowed) str +="!@#$%^&*()_+="
    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
   }
  ,[length,numberallowed,charallowed,setPassword])

  const copypasswordtoclipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])
  
  useEffect(()=>{
    passowrdgenerator()
  },[length,numberallowed,charallowed,passowrdgenerator])
  return (
    <>
     <div className='w-screen max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
      <h1 className='text-white  text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password} 
        className='outline-none w-screen py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}/>
        <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' >Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(event) => {
            setLength(event.target.value)
          }}/>
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={numberallowed}
          id='numberInput'
          onChange={() => {
            setNumberallowed((prev)=> !prev);
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={charallowed}
          id='charInput'
          onChange={() => {
            setCharallowed((prev)=> !prev);
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App


//app.js is updated for password generator
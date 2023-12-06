import { useState } from "react"
import "./utilltext.css"

export default function UtillText(props){
    const [text, setText] = useState("")
    const [ttext, settText] = useState("")

    
    const handleChange= (e) =>{
        setText(e.target.value)
    }

    const handleOnClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.sendAlert("Uppercase converted", "success")
    }
    const copyText = () =>{
        let textforcopy = document.getElementById("transferBox")
        textforcopy.select()
        navigator.clipboard.writeText(textforcopy.value)
        props.sendAlert("Copied", "success")
    }

    const TransferText =  ()=> {
        settText(text)
        props.sendAlert("Transfered", "success")
        }
    // const handleOnclick2 = () =>{
        
    // }


    return(
        <>
        <h1 className={`text-${props.mode==="light" ?"dark":"light"}`}>Put Your Text Below</h1>
        <textarea  name="" className={`form-control text-${props.mode==="dark" ?"light":"dark"}`}  id="myBox" cols="30" rows="10" onChange={handleChange} value={text}></textarea>
        <br />
        <div className="grid gap-3">
        <button className="btn btn-primary col-xs-8 my-2 margin-left" onClick={handleOnClick}>Convert In Uppercase</button>
        
        <button className="btn btn-primary col-xs-8 margin-left" onClick={TransferText}>Transfer text </button>
        </div><br />

        

        <textarea name="" className="form-control" id="transferBox" cols="30" rows="10" value={ttext}></textarea>
        <button className="btn btn-primary my-2" onClick={copyText}>Copy</button>
        <hr />
        <h2 className="sumh2">Your Text Summary</h2>

        <h4 className={`text-${props.mode==="light" ?"dark":"light"}`}>
            {text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} Characters
        </h4>
        <p className={`text-${props.mode==="light" ?"dark":"light"}`}>{0.008 * (text.split(" ").length)} Mints</p>
        <h2 className={`text-${props.mode==="light" ?"dark":"light"}`}>Preview</h2>
        <p className={`text-${props.mode==="light" ?"dark":"light"}`}>{text}</p>
        </>

        
    )
}



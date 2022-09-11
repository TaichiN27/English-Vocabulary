import React from 'react'
import { useState } from 'react'

export const Form = ({ list, setList }) => {

    let [inputText, setInputText] = useState("")
    let [JinputText, JsetInputText] = useState("")


    const EnglishChange = (e) => {
        setInputText(e.target.value)

    }
    const JapaneseChange = (e) => {
        JsetInputText(e.target.value)

    }

    const SubmitHandle = (e) => {
        e.preventDefault();

        console.log(inputText);


        //タスク追加

        setList([
            ...list,
            {
                eng: inputText,
                jap: JinputText,
                created: new Date()
            }
        ])

        console.log(list);
        setInputText('')
        JsetInputText('')
    }

    return (
        <div>
            <p>Which vocabulary did you learn?</p>
            <form onSubmit={SubmitHandle}>
                <div className="form-group row">
                    English<input type="text" className="form-control-sm col mx-2" onChange={EnglishChange} value={inputText} required />
                    Japanese<input type="text" className="form-control-sm col mx-2" onChange={JapaneseChange} value={JinputText} required />
                    <button type="submit" className="btn btn-primary btn-sm col-2" >Add</button>
                </div>

            </form>
        </div>
    )
}

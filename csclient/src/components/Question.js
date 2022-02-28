import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams}  from 'react-router-dom'
import Header from './Header'
import PostQ from './PostQ'
// import PostQ from './PostQ'
import "./css/question.css"


function Question(){
    const {id} = useParams()
    const [question, setQuestion] = useState()
    const [answers, setAnswers] = useState([])
    useEffect(()=>{
        axios.get('/api/questions/'+id).then((res)=>{
            console.log(res.data)
            setQuestion(res.data.question)
            setAnswers(res.data.answers)
            // console.log(question)
            // console.log(answers)
        })
        .catch((e)=>{
            console.log(e)
        })
    },[])
    return(
        <div>
            <Header></Header>
            {/* {
                question?question.questionName:""
            }
            {
                answers.map((ans,idx)=>(
                    ans.answer
                ))
            } */}
            <div className='postq'>
            {
                question?<PostQ post={question} answers={answers}/>:""
            }
            </div>

            {/* <PostQ post = {question}></PostQ> */}

            {/* {id} */}
        </div>
    )

}

export default Question
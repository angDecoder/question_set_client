import React from 'react';
import './Question.css';
import { useNavigate } from 'react-router-dom';
import trash from '../../assets/trash.svg';
import add from '../../assets/add.svg';


const questionList = [
  {
    id : 'qjkej',
    title : "first question",
    challenge_id : "52b21703-6b7a-44ed-9f0a-6ad3ceee0b53",
    tags : ["new","hard","added"],
    link : "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    id : 'lkjh',
    title : "second question",
    challenge_id : "52b21703-6b7a-44ed-9f0a-6ad3ceee0b53",
    tags : ["binary","question","added"],
    link : "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    id : 'lkjkdjh',
    title : "third question",
    challenge_id : "52b21703-6b7a-44ed-9f0a-6ad3ceee0b53",
    tags : ["new","question","array"],
    link : "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    id : 'lkqdjh',
    title : "forth question",
    challenge_id : "52b21703-6b7a-44ed-9f0a-6ad3ceee0b53",
    tags : ["new","some","added"],
    link : "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    id : 'lkqdjh',
    title : "fifth question",
    challenge_id : "52b21703-6b7a-44ed-9f0a-6ad3ceee0b53",
    tags : ["new","thing","added"],
    link : "https://leetcode.com/problems/set-matrix-zeroes/"
  },
]

function Question() {

  const navigate = useNavigate();

  return (
    <div id='Question'>
      <h1 className='page_title'>Question</h1>
      {
        questionList.map(elem=>{
          return <div className='question_item' key={elem.id}>
              <h2 className='title'>{elem.title}</h2>
              <div className='question_resource'>
                <a className='question_link' href={elem.link} target='_blank'>
                  Question Link
                </a>
                <button className='btn' color='green'
                  onClick={()=>navigate(`/solution/someid`)}
                >Solution</button>
              </div>
              <p className=''>
                {elem.tags.map(elem=>{
                  return <span className='question_tag' key={elem}>#{elem}</span>
                })}
              </p>
              <img src={trash} className='question_trash svg-img' alt="" />
          </div>
        })
      }
      <img onClick={()=>navigate('/addquestion')} src={add} className='svg-img question_add' alt="" />
    </div>
  )
}

export default Question
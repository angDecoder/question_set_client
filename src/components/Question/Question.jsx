import React,{ useEffect } from 'react';
import './Question.css';
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import trash from '../../assets/trash.svg';
import add from '../../assets/add.svg';
import check from '../../assets/check.svg';
import { deleteQuestion, getAllQuestion } from '../../features/questionSlice';
import usePrivateAxios from '../../hooks/usePrivateAxios';

function Question() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ax = usePrivateAxios();
  const { id } = useParams();
  const { count,questionList } = useSelector((state)=>{
    const val = state.question.list.filter(elem=>elem.challenge_id===id);
    if( val.length===0 )
      return { count : 0, questionList :[] }
    return val[0];
  });

  
  useEffect(()=>{
    dispatch(getAllQuestion({ ax,id,offset : count }));
  },[]);

  const confirmDelete = (question_id)=>{
    const res = confirm('Do you really want to delete the question ?');
    if( !res )
      return;

    dispatch(deleteQuestion({ id,question_id,ax }));
  }

  return (
    <div id='Question'>
      <h1 className='page_title'>Question</h1>
      {
        Array.isArray(questionList)?
        questionList.map(elem=>{
          return <div className='question_item' solved={elem.solved?'true':'false'} key={elem.id}>
              <h2 className='title'>
                {elem.title}
                <span className='question_check' onClick={()=>toggleHandler(elem.id)}>
                  {
                    elem.solved ? 
                    <img src={check} />:
                    <div></div>
                  }
                </span>
              </h2>
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
              <img src={trash} onClick={()=>confirmDelete(elem.id)} className='question_trash svg-img' alt="" />
          </div>
        }):
        <p>No question Added</p>
      }
      <img onClick={()=>navigate('/addquestion')} src={add} className='svg-img question_add' alt="" />
    </div>
  )
}

export default Question
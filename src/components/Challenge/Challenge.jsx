import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Challenge.css';
import add from '../../assets/add.svg';
import trash from '../../assets/trash.svg';

const challenges = [
  {
    id: 'kdjka',
    title: 'first challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  {
    id: 'akjd',
    title: 'second challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  {
    id: 'aka;jq',
    title: 'third challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  {
    id: 'akjdfkh',
    title: 'forth challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  {
    id: 'afkh',
    title: 'forth challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  {
    id: 'jkaafkh',
    title: 'forth challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  {
    id: 'jkah',
    title: 'forth challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  {
    id: 'jqijeh',
    title: 'forth challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  {
    id: 'ije',
    title: 'forth challenge',
    owner: 'test@gmail.com',
    total: 50,
    solved: 10
  },
  
]

function Challenge() {


  const addChallenge = ()=>{
    const arr = window.prompt('enter text');
    console.log(arr);
  }

  return (
    <div id='Challenge'>
      <h1 className='page_title'>Challenges</h1>
      {
        challenges.map((elem) => {
          const title = elem.title;
          const solvedByTotal = elem.solved + "/" + elem.total;
          useEffect(() => {
            const progress = elem.solved * 100 / elem.total;

          }, [elem.solved, elem.total]);

          return <div key={elem.id} className='challenge_item'>
            <img src={trash} alt="cross" className='svg-img cross' />
            <NavLink to={`/question/${elem.id}`} className='challenge_title title'>
              {title}
              <span className='challenge_solved'> ({solvedByTotal})</span>
            </NavLink>
            <div className='challenge_progress'>
              <div></div>
            </div>
            <div className='challenge_owner subscript'>{elem.owner}</div>
          </div>
        })
      }

      <div id='Add_challenge' onClick={addChallenge}>
        <img src={add} className='svg-img' alt="add" />
      </div>
    </div>
  )
}

export default Challenge
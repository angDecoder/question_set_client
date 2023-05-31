import React,{ useState } from 'react';
import './AddQuestion.css';
import add from '../../assets/add.svg';
import { toast } from 'react-toastify';

function AddQuestion() {

  const [tags, setTags] = useState([]);

  const addNewTag = ()=>{
    if( tags.length==5 ){
      toast("only 5 tags can be added",{ type : 'warning' });
      return;
    }
    let newTag = prompt('enter the tag name');
    if( !newTag )
      return;

    newTag = newTag.trim().replace(/\s+/g,'_');

    if( newTag==='' ){
      toast("tag can't be empty string", { type : 'warning' });
      return;
    }

    setTags([...tags,newTag]);
  }

  const removeTag = (tag)=>{
    let newTag = tags.filter((elem)=>elem!==tag);
    setTags(newTag);
  }

  return (
    <>
      <h1 className='page_title'>Add Question</h1>
      <form>
          <input type="text" className='input' placeholder='Title'  id="title" />
          <input type="text" className='input' id="link" placeholder='Link' />
          <div id='add_tags'>
            <img src={add} className='svg-img' onClick={addNewTag} alt="" />

            {
              tags.map(elem=>{
                return <span key={elem} onClick={()=>removeTag(elem)} className='addquestion_tag'>#{elem}</span>
              })
            }
            {
              tags.length === 0 ?
              <p>Click + to add tags </p> :
              <p>Click on tags to remove them</p>
            }
          </div>
          <div>
            <button className="btn" color='green'>Submit</button>
            <button className="btn" color='red'>Clear</button>
          </div>
      </form>
    </>
  )
}

export default AddQuestion
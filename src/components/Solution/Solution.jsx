import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from 'react-toastify';
import './Solution.css';
import copy from '../../assets/copy.svg';
import edit from '../../assets/edit.svg';
import cross from '../../assets/cross.svg';

function Solution() {
    let code = `
import React from 'react';import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Solution.css';
`


    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(code);
        toast('copied to clipboard');
    }

    const toggleModal = ()=>{
        const modal = document.getElementById('solution_modal');

        const display = modal.style.display;
        if( !display || display==='none' )
            modal.style.display = 'flex';
        else    
            modal.style.display = 'none';

    }

  return (
    <div id='Solution'>
    <h1 className='page_title'>Solution</h1>
    <div id='solution_code'>
        <SyntaxHighlighter language="javascript" style={atomDark}>
            {"\n"+code.trim()}
        </SyntaxHighlighter>
        <div id='solution_controls'>
            <img src={copy} className='svg-img' alt="" 
                onClick={copyToClipboard}
            />
            <img src={edit} className='svg-img' alt="" 
                onClick={toggleModal}
            />
        </div>
    </div>

    <div id='solution_modal'>
        <h1 className='page_title'>Enter the code here</h1>
        <textarea name="" id="new_solution" placeholder='Paste your code here!'></textarea>
        <div>
            <button className='btn' color='green'>Save</button>
            <button className='btn' color='red'
                onClick={toggleModal}
            >Close</button>
        </div>
        {/* <img src={cross} className='svg-img' alt=""
        onClick={toggleModal} /> */}
    </div>
    </div>
  )
}

export default Solution
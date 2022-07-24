import './App.css';
import React, { useState, useEffect } from 'react';
import Blog from './components/blog';
import Counter from './components/counter';
import Form from './components/form';

function App() {
  const [ count ,setCount ] = useState(0);
  const [ isTrue ,setIsTrue ] = useState(true);

  const increment = () => {
      setCount( count + 1 );
  }

  const toggle = () => {
    setIsTrue( !isTrue );
}

  useEffect(() => {
   console.log('Updated Count'); 
  }, [count])

  useEffect(() => {
    console.log('Updated isTrue'); 
   }, [isTrue])

  useEffect( () => {
    console.log('data from api'); 
  }, []);

  useEffect( () => {
    console.log('No Dependency Array'); 
  });

  const blogs = [{
    heading: 'Data Structure .',
    description: 'Stacks And Queue',
    author: 'Ratnesh Singh',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt maiores iure, similique exercitationem velit eos ex repudiandae cupiditate totam dolor omnis sint impedit ratione! Nobis autem magnam cupiditate ipsa.'
  }, {
    heading: 'C++',
    description: 'Struct',
    author: 'Ratnesh Singh',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt maiores iure, similique exercitationem velit eos ex repudiandae cupiditate totam dolor omnis sint impedit ratione! Nobis autem magnam cupiditate ipsa.'
  },
  {
    heading: 'C',
    description: 'Struct',
    author: '',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nesciunt maiores iure, similique exercitationem velit eos ex repudiandae cupiditate totam dolor omnis sint impedit ratione! Nobis autem magnam cupiditate ipsa.'
  }];
  return <>
  {/* <Blog data={ blogs[0] } >
    <button>Click</button>
  </Blog>
  <Blog data={ blogs[1] }>
    <input />
  </Blog> */}
  {/* { blogs.filter( blog => !!blog.author ).map( b => <Blog key={ b.heading + b.description + b.author } data={ b } /> ) }
  <Counter count={ count } increment={ increment } />
  <button onClick={ toggle }>Change Is True</button>
  { isTrue } */}
  <Form/>
  </>
}

export default App;

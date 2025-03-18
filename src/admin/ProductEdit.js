import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { useNavigate, useParams } from 'react-router-dom';

function ProductEdit() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const history = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3004/products/`)
      .then(res => res.json())
      .then(product => {
        console.log(product);
        console.log(product[id]);

        setTitle(product[id].title);
        setImage(product[id].image);
      })
    //eslint-disable-next-line
  }, [])

  const submit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3004/products', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, image })
    })
      .then(res => res.json())
      .then(() => history('/admin/products'))
  }
  return (
    <Wrapper>
      <form onSubmit={submit}>
        <label>Title</label>
        <input type='text' name='title' onChange={e => setTitle(e.target.value)} defaultValue={title} />
        <label>Image</label>
        <input type='text' name='title' onChange={e => setImage(e.target.value)} defaultValue={image} />
        <button type='submit' name='submit'>Save</button>
      </form>
    </Wrapper>
  )
}

export default ProductEdit

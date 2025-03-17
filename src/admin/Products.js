import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const del = (id) => {
        fetch(`http://localhost:3004/products/${id}/`, {
            method: 'DELETE'
        })
        setProducts(products.filter(p => p.id !== id))
    }

    return (
        <Wrapper>
            <Link to='/admin/products/create' className='btn'>Add Product</Link>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => {
                        return (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>
                                    <img src={p.image} alt={p.title} width={90} />
                                </td>
                                <td>
                                    <button type='submit' name='edit'>Edit</button>
                                    <button type='submit' name='delete' onClick={() => del(p.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default Products

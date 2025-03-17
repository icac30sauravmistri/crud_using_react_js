import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Wrapper>
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
                                    <button type='submit' name='delete'>Delete</button>
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

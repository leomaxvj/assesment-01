import React, { useState } from 'react'

export default function AddProduct(props) {

    const [Product, setProduct] = useState({ ProductName: "", Brand:"", Quantity:"", Price:"",   Actions:""})
   
    let onsubmit = (e) => {
        e.preventDefault();
        props.saveProduct(Product)
        setProduct({
            ProductName:"",
            Brand:"",
            Quantity:"",
            Price:"",
            Actions:""
        })
        
    }

    function handleProductNameChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var eName = e.target.name;
        console.log(eName);

        setProduct({ ...Product, [eName]: e.target.value })

    }

    function handleBrandChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var eName = e.target.name;
        console.log(eName);

        setProduct({ ...Product, [eName]: e.target.value })
    }

    function handleQuantityChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var eName = e.target.name;
        console.log(eName);

        setProduct({ ...Product, [eName]: e.target.value })
    }

    function handlePriceChange(e) {
        // Write Your Code Here
        e.preventDefault();
        var eName = e.target.name;
        console.log(eName);

        setProduct({ ...Product, [eName]: e.target.value })
    }

    function handleFormSubmit(e) {
        // Write Your Code Here
        e.preventDefault();
        var eName = e.target.name;
        console.log(eName);

        setProduct({ ...Product, [eName]: e.target.value })
    }

    return (
        <div>
            <div className="leo">
            <input classname="input"name="ProductName" type="text" placeholder="ProductName" value={Product.ProductName} onChange={handleProductNameChange}></input>
            <input className="input" name="Brand" type="text" placeholder="Brand" value={Product.Brand} onChange={handleBrandChange}></input>
            <input className="input" name="Quantity" type="text" placeholder="Quantity" value={Product.Quantity} onChange={handleQuantityChange}></input>
            <input className="input" name="Price" type="text" placeholder="Price" value={Product.Price} onChange={handlePriceChange}></input>
            <input className="input" name="Actions" type="text" placeholder="Actions" value={Product.Actions} onChange={handleFormSubmit}></input>
            <button className="button" onClick={onsubmit} >Submit</button>
        </div>
        </div>
    )
}

import React, { useState,useContext } from 'react';
import request from '../../../utils/HTTP';
import { ActicleContext } from '../../../context/ActicleContext';
const Reservation = () => {
    const [image, setImage] = useState([]);
    const [category, setCategory] = useState([]);
    const [tags, setTags] = useState([]);
    const [name, setName] = useState('');
    const [prices, setPrices] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [status, setStatus] = useState(0);
    const [discription, setDiscription] = useState('');
    const [posts, setPosts] = useState([]);
    const listtags = []
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(`The value of ${name} has changed to ${value}`);
        if (name === 'name') {
            setName(value);
        } else if (name === 'price') {
            setPrices(value);
        } else if (name === 'discount') {
            setDiscount(value);
        } else if (name === 'status') {
            setStatus(value);
        } else if (name === 'image') {
            setImage(value);
        } else if (name === 'tag' || value === true) {
            let arr = value.split(",")
            setTags(arr);
        } else if (name === 'category') {
            let arr = value.split(",")
            setCategory(arr);
        } else if (name === 'discription') {
            setDiscription(value);
        }
    };
    const setDefault = () => {
        setName('');
        setDiscription('');
        setPrices(0);
        setStatus(0);
        setDiscount('');
        setTags([]);
        setCategory([]);
        setImage([]);
    }
    const onSubmitData = (e) => {
        const reservationData = {
            id: 'PD-' + crypto.randomUUID(),
            img: image,
            name: name,
            price: prices,
            discount: discount,
            category: category,
            tags: tags,
            status: status,
            discription: discription,
        };
        console.log(reservationData)
        e.preventDefault();
        addPosts(reservationData)
        setDefault()
        console.log('ok')
    }
    const addPosts = (body) => {
        request
            .post('products', {body})
            .then((response) => {
                setPosts([response.data, ...posts]);
            });
    };
    return (
        <form>
            <div className="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input
                    type="text"
                    className="form-control"
                    name='name'
                    placeholder="Username"
                    value={name}
                    onChange={handleInputChange}
                    aria-label="Username"
                    aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                    type="number"
                    className="form-control"
                    name='price'
                    value={prices}
                    min={0}
                    onChange={handleInputChange}
                    aria-label="price" />
                <span className="input-group-text">.00</span>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Quantity</span>
                <input
                    type="number"
                    className="form-control"
                    min={0}
                    name='status'
                    value={status}
                    onChange={handleInputChange}
                    placeholder="status"
                    aria-label="status" />
                <span className="input-group-text">@</span>
                <input type="number"
                    className="form-control"
                    name='discount'
                    value={discount}
                    min={0}
                    max={100}
                    onChange={handleInputChange}
                    aria-label="discount" />
                <span className="input-group-text">Discount</span>
            </div>
            <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input 
                type="text" 
                className="form-control"
                name='image' 
                onChange={handleInputChange}
                value={image}
                id="basic-url" 
                aria-describedby="basic-addon3" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Category</span>
                <input
                    type="text"
                    className="form-control"
                    name='category'
                    onChange={handleInputChange}
                    value={category}
                    placeholder="ex: bedroom,bed"
                    aria-label="category" />
                <span className="input-group-text">@</span>
                <input type="text"
                    className="form-control"
                    name='tag'
                    value={tags}
                    onChange={handleInputChange}
                    placeholder="ex: Hot,Trend"
                    aria-label="tag" />
                <span className="input-group-text">Tags</span>
            </div>
            <div className="input-group">
                <span className="input-group-text">With textarea</span>
                <textarea
                    className="form-control"
                    aria-label="With textarea"
                    name='discription'
                    value={discription}
                    onChange={handleInputChange}></textarea>
            </div>
            <input type="submit" value="Submit" onClick={onSubmitData} />
        </form>
    );
}
export default Reservation;
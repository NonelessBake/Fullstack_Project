import React, { useState, useContext } from 'react';
import request from '../../../utils/HTTP';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { ActicleContext } from '../../../context/ActicleContext';
const Reservation = () => {
    const { setDataProduct, dataProduct } = useContext(ActicleContext)
    const formik = useFormik({
        initialValues: {
            img: '',
            name: '',
            price: '',
            discount: '',
            category: '',
            tags: '',
            status: '',
            discription: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('*Please enter the product name!'),
            price: Yup.number().required('*Please enter the product price!'),
            status: Yup.number().required('*Please enter the product quantity!'),
            discount: Yup.number().required('*Please enter the discount number! '),
            img: Yup.string().matches(/((https?:\/\/)|(\/)|(..\/))(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
            ,"Please enter your vanity URL "),
            category: Yup.string().matches(/^([^0-9]*)$/,"Category no number").required("*Please enter the Category"),
            tags: Yup.string().matches(/^([^0-9]*)$/,"tag no number").required("*Please enter the tags")
        }),
        onSubmit: (values) => {
            let category = values.category.split(',')
            let tags = values.tags.split(',')
            let obj = {
                id: 'PD-' + crypto.randomUUID(),
                img: values.img,
                name: values.name,
                price: values.price,
                discount: values.discount,
                category: category,
                tags: tags,
                status: values.status,
                discription: values.discription
            }
            // let id = values.id
            // let img = values.img.split(',')
            // let name = values.name
            // let discription =values.discription

            // let tag = values.tags.split(',')
            // let price = values.price
            // let status = values.status
            // let discount = values.discount
            // let obj =  {id,name,price,status,discount,category,tag,img,discription}
            add(obj)
        }
    })

    const addPosts = (body) => {
        request
            .post('products', body)
            .then((response) => {
                setDataProduct([response.data, ...dataProduct]);
            });
    };
    return (
        <form onSubmit={formik.handleSubmit}>
            {formik.errors.name && (
                <p className='Danger'>{formik.errors.name}</p>
            )}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input
                    type="text"
                    className="form-control"
                    name='name'
                    placeholder="Username"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    aria-label="Username"
                    aria-describedby="basic-addon1" />
            </div>
            {formik.errors.price && (
                <p className='Danger'>{formik.errors.price}</p>
            )}
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                    type="number"
                    className="form-control"
                    name='price'
                    value={formik.values.price}
                    min={0}
                    onChange={formik.handleChange}
                    aria-label="price" />
                <span className="input-group-text">.00</span>
            </div>
            <div className='d-flex justify-content-between'>
                {formik.errors.status && (
                    <span className='Danger'>{formik.errors.status}</span>
                )}
                {formik.errors.discount && (
                    <span className='Danger'>{formik.errors.discount}</span>
                )}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Quantity</span>
                <input
                    type="number"
                    className="form-control"
                    min={0}
                    name='status'
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    placeholder="status"
                    aria-label="status" />
                <span className="input-group-text">@</span>
                <input type="number"
                    className="form-control"
                    name='discount'
                    value={formik.values.discount}
                    min={0}
                    max={100}
                    onChange={formik.handleChange}
                    aria-label="discount" />
                <span className="input-group-text">Discount</span>
            </div>
            {formik.errors.img && (
                <p className='Danger'>{formik.errors.img}</p>
            )}
            <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input
                    type="text"
                    className="form-control"
                    name='img'
                    onChange={formik.handleChange}
                    value={formik.values.img}
                    id="basic-url"
                    aria-describedby="basic-addon3" />
            </div>
            <div className='d-flex justify-content-between'>
                {formik.errors.category && (
                    <span className='Danger'>{formik.errors.category}</span>
                )}
                {formik.errors.tags && (
                    <span className='Danger'>{formik.errors.tags}</span>
                )}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Category</span>
                <input
                    type="text"
                    className="form-control"
                    name='category'
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    placeholder="ex: bedroom,bed"
                    aria-label="category" />
                <span className="input-group-text">@</span>
                <input type="text"
                    className="form-control"
                    name='tags'
                    value={formik.values.tags}
                    onChange={formik.handleChange}
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
                    value={formik.values.discription}
                    onChange={formik.handleChange}></textarea>
            </div>
            <div className='w-100 mt-3 d-flex justify-content-end'>
                <input
                    type="submit"
                    value="Submit"
                    className='btn btn-primary'
                />
            </div>
        </form >
    );
}
export default Reservation;
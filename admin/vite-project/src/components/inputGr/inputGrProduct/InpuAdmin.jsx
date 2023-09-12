import React, {  useContext } from 'react';
import request from '../../../utils/HTTP';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { ActicleContext } from '../../../context/ActicleContext';
const ReservationAdmin = () => {
    const { dataUser,setDataUser } = useContext(ActicleContext)
    const getAccount = () =>{
        
    }
    const formik = useFormik({
        initialValues: {
            img: '',
            name: '',
            password: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('*Please enter the your name!')
            .matches(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/,"Inappropriate name"),
            password: Yup.string().required('*Please enter the your password!').min(8,"The length is greater than 8"),
            email: Yup.string().required('*Please enter the product quantity!')
            .matches(/^(?:\s*[a-zA-Z0-9_.-]+@[a-zA-Z0-9][a-zA-Z0-9-.]+\.[a-zA-Z]{2,6}\s*)+$/,"*This is not email!"),
            phone: Yup.string().required('*Please enter your phone number!').min(10,"The length is greater than 9"),
        }),
        onSubmit: (values) => {
            let obj = {
                id: crypto.randomUUID() ,
                img: values.img,
                userName: values.name,
                password: values.password,
                email: values.email,
                phone: values.phone,
            }
            console.log(obj)
            // let id = values.id
            // let img = values.img.split(',')
            // let name = values.name
            // let discription =values.discription

            // let tag = values.tags.split(',')
            // let price = values.price
            // let status = values.status
            // let discount = values.discount
            // let obj =  {id,name,price,status,discount,category,tag,img,discription}
            addPosts(obj)
        }
    })

    const addPosts = (body) => {
        request
            .post('user', body)
            .then((response) => {
                setDataUser([response.data, ...dataUser]);
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
            {formik.errors.password && (
                <p className='Danger'>{formik.errors.password}</p>
            )}
            <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input
                    type="text"
                    className="form-control"
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    aria-label="price" />
            </div>
            <div className="input-group mb-3 w-25">
                <input
                    type="checkbox"
                    className='me-3'
                    name='admin'
                    checked={formik.values.admin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-label="admin" />
                <label >Select if it is an admin account </label>
            </div>
            <div className='d-flex justify-content-between'>
                {formik.errors.phone && (
                    <span className='Danger'>{formik.errors.phone}</span>
                )}
                {formik.errors.email && (
                    <span className='Danger'>{formik.errors.email}</span>
                )}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Phone</span>
                <input
                    type="text"
                    className="form-control"
                    name='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    aria-label="Phone" />
                <span className="input-group-text">@</span>
                <input type="text"
                    className="form-control"
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    aria-label="email" />
                <span className="input-group-text">email</span>
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
export default ReservationAdmin;
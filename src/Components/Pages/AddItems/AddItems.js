import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItems = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/allfruits`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast("Items added successfully!!")
            })
    }
    return (
        <div>
            <div className='w-50 mx-auto my-4'>
                <h1 className='text-center'>Add new items</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ border: '1px solid #009688' }} className='p-2 bg-light rounded-3 border-2' placeholder='name' autoComplete='off' {...register("name", { required: true, maxLength: 20 })} required />
                    <br />
                    <textarea style={{ border: '1px solid #009688' }} placeholder='description' {...register("description")} required />
                    <br />
                    <input autoComplete='off' style={{ border: '1px solid #009688' }} className='p-2 bg-light rounded-3 border-2' placeholder='price' type="number" {...register("price")} required />
                    <br />
                    <input autoComplete='off' style={{ border: '1px solid #009688' }} className='p-2 bg-light rounded-3 border-2' placeholder='email' value={user.email} readOnly type="email" {...register("email")} required />

                    <br />
                    <input style={{ border: '1px solid #009688' }} className='p-2 bg-light rounded-3 border-2' placeholder='photo url' type="text" {...register("img")} required />
                    <br />
                    <input autoComplete='off' style={{ border: '1px solid #009688' }} className='p-2 bg-light rounded-3 border-2' placeholder='supplier' type="text" {...register("supplier")} required />
                    <br />
                    <input autoComplete='off' style={{ border: '1px solid #009688' }} className='p-2 bg-light rounded-3 border-2' placeholder='quantity' type="text" {...register("quantity")} required />
                    <br />
                    <input style={{ backgroundColor: '#009688', border: 'none' }} className='p-2 rounded-3 border-2' type="submit" />
                </form>
            </div>
            <ToastContainer />
        </div>
    )

};

export default AddItems;
import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './AddService.css'



const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://travel-agency221.herokuapp.com/services', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    window.alert('Are you Sure to Add ?');
                    reset();
                }
            })
    };


    return (
        <div className="add-service">
            <Container>
                <h2 className="h2 my-5">ADD a <span className="bg-dark p-1 text-info">SERVICE</span></h2><hr />

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="p-2" {...register("name", { required: true, maxLength: 20 })} placeholder="name" />

                    <textarea className="p-2" {...register("description")} placeholder="Add description" />

                    <input className="p-2" type="number" {...register("price")} placeholder="price" />

                    <input className="p-2" type="number" {...register("duration")} placeholder="Number of Days" />

                    <input className="p-2" {...register("img")} placeholder="image Url" />
                    <input className="p-2 text-info bg-dark fw-bold" type="submit" />
                </form>
                <Link to="/">
                    <button className="btn btn-dark text-info fw-bold fs-3 my-3">Back to Home</button>
                </Link>
            </Container>
        </div>
    );
};

export default AddService;
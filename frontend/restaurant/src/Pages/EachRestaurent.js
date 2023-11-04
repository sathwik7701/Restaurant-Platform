import React, { useEffect, useState } from 'react';
import "./EachRestaurent.css";
import axios from 'axios';
import Fillout from './Fillout';

const EachRestaurent = (props) => {

    const apiUrl = 'http://localhost:5000/restaurents';

    const [isModalOpen, setIsModalOpen] = useState(false);

    // const openModal = () => {
    //   setIsModalOpen(true);
    // };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    useEffect(() => {
  
    },[isModalOpen])

    const handleDelete = () => {
        console.log("delete", id);
        axios.delete(`${apiUrl}/${id}`)
        .then(response => {
            // Handle the successful response
            console.log('Delete request successful', response);
        })
        .catch(error => {
            // Handle any errors that occur during the DELETE request
            console.error('Error making DELETE request', error);
        });
    }

    const handleEdit = ({data}) => {
        setIsModalOpen(true);
    }

    
    const {id, name, address, contact_phone, contact_email } = props.restaurent;
  return (
    <>
    <div className='each-restaurant'>
        <div className='restaurant-info'>
            <h3 className='name'> {name} </h3>
            <p className='address'> {address} </p>
            <span className='email'> {contact_email}</span>
            <span className='phone'> {contact_phone} </span>
        </div>
        <div className='buttons-v'>
            <button onClick={() => handleEdit({id, name, address, contact_email, contact_phone})}>
                edit
            </button>
            <button onClick={ ()=> handleDelete(id) }>
                delete
            </button>
        </div>
    </div>
    {isModalOpen ? (
        <Fillout 
        isOpen={isModalOpen} 
        handleClose={closeModal} 
        id = {id}
        name = {name}
        address = {address}
        phone = {contact_phone}
        email = {contact_email}
        isEdit = {"edit"}
      />
      ) : null}
    </>
  )
}

export default EachRestaurent

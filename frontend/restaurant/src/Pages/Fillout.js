import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

const Fillout = (props) => {
  const editable = props.isEdit;
  const apiUrl = 'http://localhost:5000/restaurents';
  const [formData, setFormData] = useState({
    id : props.id,
    name: props.name,
    address : props.address,
    email: props.email,
    phone: props.phone
  });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    if(editable === "edit")
    {
      const updateData = (async () => {
        try {
          const response = await axios.put(apiUrl, formData);
          console.log('Restaurant data updated successfully:', response.data);
        } catch (error) {
          console.error('Error updating restaurant data:', error);
        }
      });
      updateData();
    }
    else
    {
      const createNew = (async () => {
        try {
          const response = await axios.post(apiUrl, formData);
          console.log('Restaurant data updated successfully:', response.data);
        } catch (error) {
          console.error('Error updating restaurant data:', error);
        }
      });
      createNew();
    }
    props.handleClose();
  };

  return (
    <Dialog
    fullScreen={fullScreen}
    open={props.isOpen}
    
    onClose={props.handleClose}
    aria-labelledby="responsive-dialog-title"
    >
      {props.isOpen ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={props.handleClose}>&times;</span>
            <h3>Create New Item</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="name">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="name">Phone:</label>
                <input
                  type="text"
                  id="name"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </Dialog>
  );
}

export default Fillout;
// export default withStyles(styles)(Fillout);



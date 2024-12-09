import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import API_URL from '../App.js';


export const API_URL = "http://localhost:3001" // dont add trailing slash /

const AddMoviePage = () => 
{
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        year: '',
        languageId: '',
        sublanguageId: '',
        image: null,
    });

    const handleChange = (event) => 
        {
            const { name, value, files } = event.target;
            setFormData({...formData, [name]: files ? files[0] : value,});
        };
    
    const handleSubmit = async (event) => 
        {
            event.preventDefault();
            const data = new FormData();
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('year', formData.year);
            data.append('languageId', formData.languageId);
            data.append('sublanguageId', formData.sublanguageId);
            if (formData.image) {
              data.append('image', formData.image);
            }
            console.log('Form data to be sent:', Object.fromEntries(data.entries()));

            try 
            {
                const response = await fetch(API_URL+'/api/movie', {method: 'POST', body: data});
          
                if (!response.ok) {
                  throw new Error('Failed to add movie');
                }
          
                console.log('Movie added successfully!');
            }catch (error)
            {
                console.error(error);
                alert('An error occurred while adding the movie.');
            }
        };


    return(
        <div>
            <Form onSubmit={handleSubmit}>

                
            <Form.Group className="mb-3" controlId="AddMovieForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" onChange={handleChange} value={formData.title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddMovieForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" onChange={handleChange} value={formData.description}/>
            </Form.Group>        
            <Form.Group className="mb-3" controlId="AddMovieForm.ControlInput2">
                <Form.Label>Year</Form.Label>
                <Form.Control type="date" name="year"  value={formData.year} onChange={handleChange}/>                        
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddMovieForm.ControlInput3">
                <Form.Label>LanguageId</Form.Label>
                <Form.Control type="text" name="languageId" onChange={handleChange} value={formData.languageId}/>                                        
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddMovieForm.ControlInput4">
                <Form.Label>SublanguageId</Form.Label>
                <Form.Control type="text" name="sublanguageId" onChange={handleChange} value={formData.sublanguageId}/>                                         
            </Form.Group>
            <Form.Group className="mb-3" controlId="AddMovieForm.ControlFile1">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" name="image" onChange={handleChange}/>
            </Form.Group>

            <Button type="submit">Add movie</Button>

            </Form>
        </div>
    );
};

export default AddMoviePage;
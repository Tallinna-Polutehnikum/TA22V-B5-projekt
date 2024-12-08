import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddMoviePage = () => {
return (
<div>
    <Form>

        
    <Form.Group className="mb-3" controlId="AddMovieForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="AddMovieForm.ControlTextarea1">
        <Form.Label>descript</Form.Label>
        <Form.Control as="textarea" rows={3} />
    </Form.Group>        
    <Form.Group className="mb-3" controlId="AddMovieForm.ControlInput2">
        <Form.Label>year</Form.Label>
        <Form.Control type="text" defaultValue="0"/>                        {/* value= string | arrayOf | number  ? */}
    </Form.Group>
    <Form.Group className="mb-3" controlId="AddMovieForm.ControlInput3">
        <Form.Label>langId</Form.Label>
        <Form.Control type="text" />                                        {/* value= string | arrayOf | number  ? */}
    </Form.Group>
    <Form.Group className="mb-3" controlId="AddMovieForm.ControlInput4">
        <Form.Label>sublangId</Form.Label>
        <Form.Control type="text"/>                                         {/* value= string | arrayOf | number  ? */}
    </Form.Group>
    <Form.Group className="mb-3" controlId="AddMovieForm.ControlFile1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" />
    </Form.Group>

    <Button type="submit">Add movie</Button>

    </Form>
</div>
);
};

export default AddMoviePage;
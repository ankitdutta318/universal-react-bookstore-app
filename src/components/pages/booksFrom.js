"use strict"

import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';

class BooksFrom extends React.Component {
    render() {
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type= "text"
                            placeholder= "Enter Title"
                            ref= "title"  />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type= "text"
                            placeholder= "Enter description"
                            ref= "description"  />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type= "text"
                            placeholder= "Enter price"
                            ref= "price"  />
                    </FormGroup>
                    <Button bsStyle='primary'>Save Book</Button>
                </Panel>
            </Well>
        )
    }
}

export default BooksFrom;
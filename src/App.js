import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="container form-main">
        <div className="row">
          <div className="col-md-6">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Nombre</Label>
              <Input type="text" placeholder="Ingrese aquí su nombre." />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Apellido</Label>
              <Input type="text" placeholder="Ingrese aquí su apellido." />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Correo</Label>
              <Input type="email" placeholder="Ingrese aquí su correo." />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Cargo</Label>
              <Input type="select">
                <option>Analista funcional</option>
                <option>Técnico</option>
                <option>Secretaria</option>
                <option>Seo</option>
                <option>Administrador</option>
              </Input>
            </FormGroup> 
            <FormGroup>
              <Label for="exampleDate">Fecha de ingreso</Label>
              <Input
                type="date"
                placeholder="Ingrese la fecha de ingreso."
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">Foto</Label>
              <Input type="file"/>
              <FormText color="muted">
                Seleccione una foto para adjuntarla a su carnet.
              </FormText>
            </FormGroup>          
          </Form>
          </div>
          <div className="col-md-6">
            <div className="preview">
              <FormGroup>
                <Label>Vista Previa</Label>
                <div className="view-preview">
                  <div className="row">
                    <div className="col-md-4">
                      <img src=""/>
                    </div>
                    <div className="col-md-8">
                      <p>Nombre: </p>
                      <p>Apellido: </p>
                      <p>Correo: </p>
                      <p>Cargo: </p>
                      <p>Ingreso: </p>
                    </div>
                  </div>
                </div>
              </FormGroup>
              <Button>Descargar</Button>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;

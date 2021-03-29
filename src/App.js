import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import domtoimage from 'dom-to-image';
import ReactDOM from 'react-dom';
import FileSaver from 'file-saver';
import './App.css';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      email: '',
      position: '',
      dateAdmission: '',
      dateAdmissionFormat: '',
      image: null,
      errorMessage: ''
    }
  }

  handleChangeName = (e) => {
    this.setState({name: e.target.value});
  }

  handleChangeLastname = (e) => {
    this.setState({lastname: e.target.value});
  }

  handleChangeEmail = (e) => {
    this.setState({email: e.target.value});
  }

  handleChangePosition = (e) => {
    this.setState({position: e.target.value});
  }

  handleChangeDateAdmission = (e) => {
    this.setState({dateAdmission: e.target.value});
    let date = e.target.value;
    let stringDate = date.split('-');
    this.setState({dateAdmissionFormat: stringDate[2] + '/' + stringDate[1] + '/' + stringDate[0]});
  }

  handleChangeImage = (e) => {
    this.setState({image: URL.createObjectURL(e.target.files[0])});
    this.setState({errorMessage: ''});
  }

  generatePhoto = () => {
    if(this.state.image === null) {
      this.setState({errorMessage: 'No se ha seleccionado una imagen.'});
      return;
    }

    this.setState({errorMessage: ''});
    let photo = ReactDOM.findDOMNode(this.refs['photo']);

    domtoimage.toBlob(photo)
    .then(function (blob) {
      FileSaver.saveAs(blob, 'carnet.png');
    });
  }

  render() {
    return (
      <div className="container form-main">
        <h3 className="mt-4 text-center">Generador de carnet</h3>
        <div className="row">
          <div className="col-md-6">
          <Form>
            <h5 className="my-4">Ingresa tus datos</h5>
            <FormGroup>
              <Label>Nombre</Label>
              <Input onChange={e => this.handleChangeName(e)} value={this.state.name} type="text" placeholder="Ingrese aquí su nombre." />
            </FormGroup>
            <FormGroup>
              <Label>Apellido</Label>
              <Input onChange={e => this.handleChangeLastname(e)} value={this.state.lastname} type="text" placeholder="Ingrese aquí su apellido." />
            </FormGroup>
            <FormGroup>
              <Label>Correo</Label>
              <Input onChange={e => this.handleChangeEmail(e)} value={this.state.email}
              type="email" placeholder="Ingrese aquí su correo." />
            </FormGroup>
            <FormGroup>
              <Label>Cargo</Label>
              <Input onChange={e => this.handleChangePosition(e)} value={this.state.position} type="select">
                <option value="">Seleccione el cargo...</option>
                <option value="Analista funcional">Analista funcional</option>
                <option value="Técnico">Técnico</option>
                <option value="Secretaria">Secretaria</option>
                <option value="Seo">Seo</option>
                <option value="Administrador">Administrador</option>
              </Input>
            </FormGroup> 
            <FormGroup>
              <Label>Fecha de ingreso</Label>
              <Input onChange={e => this.handleChangeDateAdmission(e)} value={this.state.dateAdmission} type="date" placeholder="Ingrese la fecha de ingreso."
              />
            </FormGroup>
            <FormGroup>
              <Label>Foto - <span className="note">Tamaño 135 x 180 px</span> </Label>
              <Input onChange={e => this.handleChangeImage(e)} type="file"/>
              <FormText color="muted">
                Seleccione una foto para adjuntarla a su carnet.
              </FormText>
            </FormGroup>          
          </Form>
          </div>
          <div className="col-md-6">
            <div className="preview">
              <h5 className="my-4">Vista Previa</h5>
              <div className="mb-3 p-2 view-preview-container">
                <div ref={'photo'} className="container-fluid card">
                  <div className="row">
                    <div className="col-sm-4 preview-image">
                      {this.state.image === null && <div className="empty-image d-flex align-items-center justify-content-center card">
                        <div>135 X 180</div>
                      </div>}
                      <img alt="" src={this.state.image}/>
                    </div>
                    <div className="col-sm-8 preview-data">
                      <p>Nombre: {this.state.name}</p>
                      <p>Apellido: {this.state.lastname}</p>
                      <p>Correo: {this.state.email}</p>
                      <p>Cargo: {this.state.position}</p>
                      <p className="mb-0">Ingreso: {this.state.dateAdmissionFormat}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button onClick={this.generatePhoto}>Descargar</Button>
              <p>{this.state.errorMessage}</p>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.Nota = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
    //console.log(this.titulo);
  }

  _handleMudancaNota(evento) {
    evento.stopPropagation();
    this.Nota = evento.target.value;
    //console.log(this.Nota)
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.Nota);
    //console.log(`Uma nova nota foi criada ` + this.titulo + " "+ this.Nota);
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
//teste de git
export default FormularioCadastro;

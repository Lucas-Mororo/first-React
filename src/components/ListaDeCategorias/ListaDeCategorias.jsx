import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends React.Component {
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
        />
      </section>
    );
  }
}

export default ListaDeCategorias;

import React from 'react';

function Header({ handleAdd }) {
  return (
    <div class="jumbotron">
    <h1 class="display-4">Desafio 3 - GoStack 12</h1>
    <p class="lead">Bem vindo ao meu desafio do Gostack, é muito simples. Aperte o botão para começar :).</p>
    <hr class="my-4" />
    <p className="p-header">No momento não tem nenhum repositório, volte mais tarde (kkk). Ou, adicione um no botão abaixo</p>
    <a onClick={() => handleAdd()} class="btn btn-header btn-primary btn-lg" role="button">Adicionar repositório</a>
  </div>
  );
}

export default Header;
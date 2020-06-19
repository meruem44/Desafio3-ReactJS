import React, { useState } from 'react';

function Forms({ back, handleAdd }) {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [techs, setTechs] = useState('');

  const handleSubmit = () => {
    const body = {
      url,
      title,
      techs
    };

    handleAdd(body);
  };

  return (
    <div>
      <div className="jumbotron">
      <button type="submit" onClick={back} class="btn btn-primary btn-header">Voltar</button>

        <form>
          <div class="form-group">
            <label for="title">Título do Repositório</label>
            <input
              type="text"
              class="form-control"
              id="title"
              value={title}
              onChange={event => setTitle(event.target.value)}
              aria-describedby="title" />
            <small id="title" class="form-text text-muted">Diga qual o titulo do seu repositório.</small>
          </div>
          <div class="form-group">
            <label for="title">Url do Repositório</label>
            <input
              type="text"
              class="form-control"
              id="url"
              value={url}
              onChange={event => setUrl(event.target.value)}
              aria-describedby="url" />
            <small id="url" class="form-text text-muted">Url do seu repositório.</small>
          </div>

          <div class="form-group">
            <label for="title">tecnologias utilizadas do Repositório</label>
            <input
              type="text"
              class="form-control"
              id="techs"
              value={techs}
              onChange={event => setTechs(event.target.value)}
              aria-describedby="techs" />
            <small id="techs" class="form-text text-muted">Tecnologias usadas no projeto do repositório.</small>
          </div>

          <button type="submit" onClick={handleSubmit} class="btn btn-primary btn-header">Adicionar</button>
        </form>
      </div>
    </div>
  )

};

export default Forms;
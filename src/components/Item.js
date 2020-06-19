import React from 'react';

function Item(props) {
    return (
        <li className="liItem">

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">{props.data.title}</h1>
                    <p class="lead">Tecnologias: {props.data.techs}</p>

                    <div class="card-body">
                        <a href={props.data.url} class="btn btn-primary">Ir até repositório</a>
                        <button onClick={() => props.delete(props.data.id)}>
                            Remover
                    </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Item;
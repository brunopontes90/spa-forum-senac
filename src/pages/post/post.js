import React from "react";
import Menu from "../layout/menu/menu";
import { ADD_USER } from "../../graphql/mutation";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

function Post() {

    const handleSendButton = () => {
        alert('Enviado')
    }

    return (
        <div>
            <Menu />
            <div className="mt-5 mr-5 ml-5 shadow p-3 mb-5 bg-white rounded">
                <h1 className="h3 mb-5 mt-5 font-weight-bold d-flex justify-content-center">Criar Post</h1>
                <div className="d-flex justify-content-center">
                    <form>
                        <div className="mb-3">
                            <label>Nome Completo:</label>
                            <input type='text' className="ml-2" />
                        </div>
                        <div className="mb-3">
                            <label>E-mail:</label>
                            <input type='email' className="ml-2" />
                        </div>
                        <div>
                            <label>Titulo:</label>
                            <input type="text" className="ml-2" />
                        </div>
                        <div className="mb-5">
                            <div>
                                <label>Mensagem</label>
                            </div>
                            <textarea cols={50} rows={4} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                style={{ width: "150px" }}
                                onClick={handleSendButton}
                                className="btn btn-primary font-weight-bold"
                            >
                                ENVIAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post;
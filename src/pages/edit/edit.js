import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { ADD_USER } from "../../graphql/mutation";
import { UPDATE_POST } from "../../graphql/mutation";
import Menu from "../layout/menu/menu";
import { client } from "../../config/client";
import { GET_USERS } from "../../graphql/query";

function Edit() {
    const [editClientPost, setEditClientPost] = useState([]);

    useQuery(GET_USERS, {
        client,
        onCompleted: (data) => setEditClientPost(data.users)
    });

    return (
        <div>
            <Menu />
            <div className="mt-5 mr-5 ml-5 shadow p-3 mb-5 bg-white rounded">
                <h1 className="h3 mb-5 mt-5 font-weight-bold d-flex justify-content-center">Editar Post</h1>
                <div className="d-flex justify-content-center">
                    {editClientPost.map((editPost, index) => (
                        <form key={index++}>
                            <div className="mb-3">
                                <label>Nome Completo:</label>
                                <input type='text' className="ml-2" value={editPost.nomeCompleto} onChange={(event) => setEditClientPost(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label>E-mail:</label>
                                <input type='email' className="ml-2" value={editPost.email} onChange={(event) => setEditClientPost(event.target.value)} />
                            </div>
                            <div className="mb-5">
                                <div>
                                    <label>Mensagem</label>
                                </div>
                                <textarea cols={50} rows={4} value={editPost.postagem} onChange={(event) => setEditClientPost(event.target.value)} />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button
                                    style={{ width: "150px" }}
                                    type="submit"
                                    className="btn btn-primary font-weight-bold"
                                >
                                    ENVIAR
                                </button>
                            </div>
                        </form>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Edit;
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_USER } from "../../graphql/mutation";
import Menu from "../layout/menu/menu";
import { client } from "../../config/client";

function Post() {
    const [nome, setNome] = useState("")
    const [postagem, setPostagem] = useState("")
    const [email, setEmail] = useState("")
    const [addUser] = useMutation(ADD_USER, {
        client,
        variables: {
            nomeCompleto: nome,
            postagem: postagem,
            email: email,

        },
        onCompleted: (data) => console.log(data) 
    });

    return (
        <div>
            <Menu />
            <div className="mt-5 mr-5 ml-5 shadow p-3 mb-5 bg-white rounded">
                <h1 className="h3 mb-5 mt-5 font-weight-bold d-flex justify-content-center">Criar Post</h1>
                <div className="d-flex justify-content-center">
                    <form>
                        <div className="mb-3">
                            <label>Nome Completo:</label>
                            <input type='text' className="ml-2" onChange={(event) => setNome(event.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label>E-mail:</label>
                            <input type='email' className="ml-2" onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="mb-5">
                            <div>
                                <label>Mensagem</label>
                            </div>
                            <textarea cols={50} rows={4} onChange={(event) => setPostagem(event.target.value)} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button
                                style={{ width: "150px" }}
                                type="submit"
                                onClick={() => addUser}
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
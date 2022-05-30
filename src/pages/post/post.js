import React from "react";
import Menu from "../layout/menu/menu";

function Post() {
    return (
        <div>
            <Menu />
            <div className="mt-5 mr-5 ml-5 shadow p-3 mb-5 bg-white rounded">
                <h1 className="h3 mb-5 mt-5 font-weight-bold d-flex justify-content-center">Criar Post</h1>
                <div className="d-flex justify-content-center">
                    <form>
                        <div className="mb-3">
                            <label>Nome Completo</label>
                            <input type='text' className="ml-2"/>
                        </div>
                        <div className="mb-3">
                            <label>E-mail</label>
                            <input type='email' className="ml-2"/>
                        </div>
                        <div className="mb-5">
                            <div>
                                <label>Mensagem</label>
                            </div>
                            <textarea cols={50} rows={4} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Post;
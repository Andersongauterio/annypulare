import DefaultButtons from '../DefaultButtons';
import './styles.css';

const FormCadastroCategoriaProduto = () => {
    return (
        <div className="annypulare-form-cad-cat-produto-container annypulare-form-container">
            <form className="annypulare-form-cad-cat-produto-form">
                <h2>Categoria do Produto</h2>
                <div className="annypulare-form-cad-cat-produto-info annypulare-form-box">
                    <input 
                        type="text" 
                        name="nome" 
                        className="form-control base-input" 
                        placeholder="Nome:"/>
                    <input 
                        type="text" 
                        name="descricao" 
                        className="form-control base-input" 
                        placeholder="Descrição:"/>
                </div>
                <DefaultButtons />
            </form>
        </div>
    );
};

export default FormCadastroCategoriaProduto;
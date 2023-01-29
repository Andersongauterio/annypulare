import DefaultButtons from '../DefaultButtons';
import './styles.css';

const FormCadastroInsumo = () => {
    return (
        <div className="annypulare-form-cad-insumo-container annypulare-form-container">
            <h2>Informações do Insumo:</h2>
            <form className="annypulare-form-cad-insumo-form">
                <div className="annypulare-form-cad-insumo-info annypulare-form-box">
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
                        <input 
                            type="text" 
                            name="unidadeMedida" 
                            className="form-control base-input" 
                            placeholder="Unidade de medida:"/>
                </div>
                <DefaultButtons />
            </form>
        </div>
    );
};

export default FormCadastroInsumo;
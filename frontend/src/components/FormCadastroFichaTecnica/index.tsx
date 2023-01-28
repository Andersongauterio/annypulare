import { useForm } from 'react-hook-form';
import './styles.css';

export type FichaTecnicaData = {

};

const FormCadastroFichaTecnica = () => {

    const { handleSubmit } =
		useForm<FichaTecnicaData>();

    const onSubmit = (formData: FichaTecnicaData) => {
		
	};
    return (
        <div className="annypulare-form-cad-ficha-tecnica-container">
            <form onSubmit={handleSubmit(onSubmit)} className="annypulare-form-cad-ficha-tecnica-form">
                <div className="annypulare-form-cad-ficha-tecnica-info-produto annypulare-form-box">
                    <h2>Informação do produto:</h2>
                    <input 
                        type="text"
                        required 
                        name="nome" 
                        placeholder="Nome:"
                        className="form-control base-input" />
                    <input
                        type="text"
                        required
                        name="descricao"
                        placeholder="Descrição:"
                        className="form-control base-input" />
                </div>
                <div className="annypulare-form-cad-ficha-tecnica-ingredientes annypulare-form-box">
                    <h2>Ingredientes:</h2>
                </div>
                <div className="annypulare-form-cad-ficha-tecnica-modo-preparo annypulare-form-box">
                    <h2>Modo de preparo:</h2>
                    <textarea
                    rows={10}
                    name="mododepreparo"
                    className="form-control h-auto"
                    />
                </div>
                <div className="annypulare-form-cad-ficha-tecnica-propriedades annypulare-form-box">
                    <h2>Propriedades:</h2>   
                    <textarea
                    rows={10}
                    name="propriedades"
                    className="form-control h-auto"
                    />
                </div>
            </form>
        </div>
    );
};

export default FormCadastroFichaTecnica;
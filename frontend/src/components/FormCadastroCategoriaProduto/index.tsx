import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Categoria } from '../../types/categoria';
import { requestBackend } from '../../util/requests';
import DefaultButtons from '../DefaultButtons';
import './styles.css';

const FormCadastroCategoriaProduto = () => {

    const {
		register,
		handleSubmit,
	} = useForm<Categoria>();

    const onSubmit = (formData: Categoria) => {
        const data = {
            ...formData
        };

        const config: AxiosRequestConfig = {
			method: 'POST',
			url: '/categorias',
			data,
			withCredentials: false,
		};

        requestBackend(config).then(() => {
            console.log("Categoria Cadastrado com sucesso!")
        })
			.catch(() => {
				console.log("Erro ao cadastrar uma categoria!")
			})
    };

    return (
        <div className="annypulare-form-cad-cat-produto-container annypulare-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="annypulare-form-cad-cat-produto-form">
                <h2>Categoria do Produto</h2>
                <div className="annypulare-form-cad-cat-produto-info annypulare-form-box">
                    <input 
                        {...register('nome', {
                            required: 'Campo obrigatório',
                        })}
                        type="text" 
                        name="nome" 
                        className="form-control base-input" 
                        placeholder="Nome:"/>
                    <input 
                        {...register('descricao', {
                            required:'Campo mandatório',
                        })}
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
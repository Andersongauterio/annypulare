import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Insumo } from '../../types/insumo';
import { requestBackend } from '../../util/requests';
import DefaultButtons from '../DefaultButtons';
import './styles.css';

const FormCadastroInsumo = () => {

    const {
		register,
		handleSubmit,
	} = useForm<Insumo>();

    const onSubmit = (formData: Insumo) => {
        const data = {
			...formData
		};
        
        const config: AxiosRequestConfig = {
			method: 'POST',
			url: '/insumos',
			data,
		};

        requestBackend(config).then(() => {
			console.log('Sucesso')
		})
			.catch(() => {
				console.log('Erro ao cadastrar insumos')
			})
    };

    return (
        <div className="annypulare-form-cad-insumo-container annypulare-form-container">
            <h2>Informações do Insumo:</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="annypulare-form-cad-insumo-form">
                <div className="annypulare-form-cad-insumo-info annypulare-form-box">
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
                                required: 'Campo obrigatório',
                            })}
                            type="text" 
                            name="descricao" 
                            className="form-control base-input" 
                            placeholder="Descrição:"/>
                        <input 
                            {...register('unidadeMedida', {
                                required: 'Campo obrigatório',
                            })}
                            type="text" 
                            name="unidadeMedida" 
                            className="form-control base-input" 
                            placeholder="Unidade de medida:"/>
                        <input 
                            {...register('qtdeEstoque', {
                                required: 'Campo obrigatório',
                            })}
                            type="text" 
                            name="qtdeEstoque" 
                            className="form-control base-input" 
                            placeholder="Estoque:"/>
                </div>
                <DefaultButtons />
            </form>
        </div>
    );
};

export default FormCadastroInsumo;
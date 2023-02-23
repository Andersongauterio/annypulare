import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Insumo } from '../../types/insumo';
import { UnidadeMedida } from '../../types/unidadeMedida';
import { requestBackend } from '../../util/requests';
import DefaultButtons from '../DefaultButtons';
import './styles.css';

const FormCadastroInsumo = () => {

    const [selectUnidadeMedida, setSelectUnidadeMedida] = useState<UnidadeMedida[]>([]);

    const {
		register,
		handleSubmit,
        control,
	} = useForm<Insumo>();

    useEffect(() => {
		requestBackend({ url: '/unidademedida' }).then((response) => {
			setSelectUnidadeMedida(response.data.content);
		});
	}, []);

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
                        <Controller
                            name="unidadeMedida"
                            rules={{required: true}}
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={selectUnidadeMedida}
                                    placeholder="Unidade de Medida"
                                    classNamePrefix={'unidade-medida-select'}
                                    getOptionLabel={(unidadeMedida: UnidadeMedida) => unidadeMedida.nome}
                                    getOptionValue={(unidadeMedida: UnidadeMedida) =>
                                        String(unidadeMedida.id)
                                    }
                                />
                            )}/>
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
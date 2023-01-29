import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import './styles.css';
import DefaultButtons from '../DefaultButtons';
import Select from 'react-select';
import { Insumo } from '../../types/insumo';
import { Categoria } from '../../types/categoria';
import { FichaTecnica } from '../../types/fichaTecnica';

export type FichaTecnicaData = {
};

const FormCadastroFichaTecnica = () => {

    const [ingredientes, setIngredientes] = useState<Insumo[]>([]);
    const [novoInsumo, setNovoInsumo] = useState<Insumo>();
    
    const [selectCategorias, setSelectCategoria] = useState<Categoria[]>([]);
    const { control,
	} = useForm<FichaTecnica>();

    const { handleSubmit } =
		useForm<FichaTecnicaData>();

    const onSubmit = (formData: FichaTecnicaData) => {
		
	};
    return (
        <div className="annypulare-form-cad-ficha-tecnica-container annypulare-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="annypulare-form-cad-ficha-tecnica-form">
                <h2>Informação do Produto:</h2>
                <div className="annypulare-form-cad-ficha-tecnica-info-produto annypulare-form-box">
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
                    <Controller
                        name="categoria"
                        rules={{required: true}}
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={selectCategorias}
                                classNamePrefix={""}
                                getOptionLabel={(categoria: Categoria) => categoria.nome}
                                getOptionValue={(categoria: Categoria) =>
                                    String(categoria.id)
                                }
                            />
                        )}
                    />
                </div>
                <div className="annypulare-form-cad-ficha-tecnica-ingredientes annypulare-form-box">
                    <h2>Insumos:</h2>
                    <div className="annypulare-form-cad-ficha-tecnica-add-ingrediente">
                        <input 
                            type="text" 
                            value={novoInsumo?.nome}
                            className="form-control base-input" />
                        <button className="btn btn-secondary"
                            onClick={() => addNovoIngrediente()}>Adicionar
                        </button>
                    </div>
                    <div  className="annypulare-form-cad-ficha-tecnica-list-ingrediente">
                        <ul>
                            {ingredientes.map((item,index) => 
                            <li 
                                key={index}
                                className="annypulare-form-cad-ficha-tecnica-li">
                                {item}
                                <button 
                                    onClick={() => deletarItem(index)}
                                    className="btn btn-secondary">
                                    Deletar
                                </button>
                            </li>)}
                        </ul>
                    </div>
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
                <DefaultButtons />
            </form>
        </div>
    );
    
    function addNovoIngrediente() {
        if (novoInsumo !== null) {
        }
    }

    function deletarItem(index: number) {
        let tmp = [...ingredientes];
        tmp.splice(index, 1);
        setIngredientes(tmp);
    };
};

export default FormCadastroFichaTecnica;
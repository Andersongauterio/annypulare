import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import './styles.css';
import DefaultButtons from '../DefaultButtons';
import Select from 'react-select';
import { Insumo } from '../../types/insumo';
import { Categoria } from '../../types/categoria';
import { Produto } from '../../types/produto';
import { requestBackend } from '../../util/requests';

export type FichaTecnicaData = {
};

const FormCadastroFichaTecnica = () => {

  const [insumos, setInsumos] = useState<Insumo[]>([]);

  const [selectCategorias, setSelectCategoria] = useState<Categoria[]>([]);
  const [selectInsumos, setSelectInsumo] = useState<Insumo[]>([]);
  const { control } = useForm<Produto>();

  const { handleSubmit } =
    useForm<FichaTecnicaData>();

  const onSubmit = (formData: FichaTecnicaData) => {
  };

  useEffect(() => {
    requestBackend({ url: '/categorias' }).then((response) => {
      setSelectCategoria(response.data.content);
      console.log(response.data.content);
    });
  }, []);

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
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectCategorias}
                placeholder="Categoria:"
                classNamePrefix={'categoria-select'}
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
            <Controller
              name="insumos"
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectInsumos}
                  placeholder="Insumo:"
                  getOptionLabel={(insumo: Insumo) => insumo.nome}
                  getOptionValue={(insumo: Insumo) =>
                    String(insumo.id)
                  }
                />
              )}
            />
            <button className="btn btn-secondary"
              onClick={() => addNovoInsumo("Novo insumo")}>Adicionar
            </button>
          </div>
          <div className="annypulare-form-cad-ficha-tecnica-list-ingrediente">

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
      </form >
    </div >
  );

  function addNovoInsumo(newInsumo: any) {
    if (newInsumo !== null) {
      setInsumos([...insumos, newInsumo]);
    }
  }

  function deletarItem(index: number) {
    let tmp = [...insumos];
    tmp.splice(index, 1);
    setInsumos(tmp);
  };
};

export default FormCadastroFichaTecnica;
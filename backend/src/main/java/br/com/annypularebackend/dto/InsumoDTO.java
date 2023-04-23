package br.com.annypularebackend.dto;

import java.io.Serializable;

import br.com.annypularebackend.entities.Insumo;

public class InsumoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String nome;

	private String descricao;

	private UnidadeMedidaDTO unidadeMedida;

	private Long qtdeEstoque;

	public InsumoDTO() {

	}

	public InsumoDTO(Long id, String nome, String descricao, UnidadeMedidaDTO unidadeMedida, Long qtdeEstoque) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.unidadeMedida = unidadeMedida;
		this.qtdeEstoque = qtdeEstoque;
	}

	public InsumoDTO(Insumo insumo) {
		this.id = insumo.getId();
		this.nome = insumo.getNome();
		this.descricao = insumo.getDescricao();
		this.unidadeMedida = new UnidadeMedidaDTO(insumo.getUnidadeMedida());
		this.qtdeEstoque = insumo.getQtdeEstoque();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}


	public UnidadeMedidaDTO getUnidadeMedida() {
		return unidadeMedida;
	}

	public void setUnidadeMedida(UnidadeMedidaDTO unidadeMedida) {
		this.unidadeMedida = unidadeMedida;
	}

	public Long getQtdeEstoque() {
		return qtdeEstoque;
	}

	public void setQtdeEstoque(Long qtdeEstoque) {
		this.qtdeEstoque = qtdeEstoque;
	}

}

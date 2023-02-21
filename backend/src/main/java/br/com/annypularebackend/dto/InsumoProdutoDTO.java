package br.com.annypularebackend.dto;

import java.io.Serializable;

import br.com.annypularebackend.entities.InsumoProduto;

public class InsumoProdutoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long produtoId;

	private Long insumoId;

	private Long qtde;

	public InsumoProdutoDTO() {
	}

	public InsumoProdutoDTO(Long produtoId, Long insumoId, Long qtde) {
		this.produtoId = produtoId;
		this.insumoId = insumoId;
		this.qtde = qtde;
	}

	public InsumoProdutoDTO(InsumoProduto insumoProduto) {
		this.produtoId = insumoProduto.getId().getProduto().getId();
		this.insumoId = insumoProduto.getId().getInsumo().getId();
		this.qtde = insumoProduto.getQtde();
	}

	public Long getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(Long produtoId) {
		this.produtoId = produtoId;
	}

	public Long getInsumoId() {
		return insumoId;
	}

	public void setInsumoId(Long insumoId) {
		this.insumoId = insumoId;
	}

	public Long getQtde() {
		return qtde;
	}

	public void setQtde(Long qtde) {
		this.qtde = qtde;
	}
}

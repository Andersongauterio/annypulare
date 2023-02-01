package br.com.annypularebackend.dto;

import java.io.Serializable;

import br.com.annypularebackend.entities.Produto;

public class ProdutoDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String nome;

	private String descricao;

	private Long categoriaId;
	
	private String modoDePreparo;
	
	private String propriedades;

	private String tamanho;

	private Long qtdeEstoque;
	
	public ProdutoDTO() {
	}
	
	public ProdutoDTO(Long id, String nome, String descricao, Long categoriaId, String modoDePreparo,
			String propriedades, String tamanho, Long qtdeEstoque) {
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
		this.categoriaId = categoriaId;
		this.modoDePreparo = modoDePreparo;
		this.propriedades = propriedades;
		this.tamanho = tamanho;
		this.qtdeEstoque = qtdeEstoque;
	}

	public ProdutoDTO(Produto produto) {
		this.id = produto.getId();
		this.nome = produto.getNome();
		this.descricao = produto.getDescricao();
		this.categoriaId = produto.getCategoria().getId();
		this.modoDePreparo = produto.getModoDePreparo();
		this.propriedades = produto.getPropriedades();
		this.tamanho = produto.getTamanho();
		this.qtdeEstoque = produto.getQtdeEstoque();
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

	public Long getCategoriaId() {
		return categoriaId;
	}

	public void setCategoriaId(Long categoriaId) {
		this.categoriaId = categoriaId;
	}

	public String getModoDePreparo() {
		return modoDePreparo;
	}

	public void setModoDePreparo(String modoDePreparo) {
		this.modoDePreparo = modoDePreparo;
	}

	public String getPropriedades() {
		return propriedades;
	}

	public void setPropriedades(String propriedades) {
		this.propriedades = propriedades;
	}

	public String getTamanho() {
		return tamanho;
	}

	public void setTamanho(String tamanho) {
		this.tamanho = tamanho;
	}

	public Long getQtdeEstoque() {
		return qtdeEstoque;
	}

	public void setQtdeEstoque(Long qtdeEstoque) {
		this.qtdeEstoque = qtdeEstoque;
	}
	
}

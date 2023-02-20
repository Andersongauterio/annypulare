package br.com.annypularebackend.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import br.com.annypularebackend.entities.pks.InsumoProdutoPK;

@Entity
@Table(name = "insumo_produto")
public class InsumoProduto implements Serializable {

	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private InsumoProdutoPK id = new InsumoProdutoPK();

	private Long qtde;

	private UnidadeMedida unidadeMedida;

	public InsumoProduto() {

	}

	public InsumoProduto(Insumo insumo, Produto produto, Long qtde, UnidadeMedida unidadeMedida) {
		this.id.setInsumo(insumo);
		this.id.setProduto(produto);
		this.qtde = qtde;
		this.unidadeMedida = unidadeMedida;
	}

	public Insumo getInsumo() {
		return id.getInsumo();
	}

	public void setInsumo(Insumo insumo) {
		id.setInsumo(insumo);
	}

	public Produto getProduto() {
		return id.getProduto();
	}

	public void setProduto(Produto produto) {
		id.setProduto(produto);
	}

	public InsumoProdutoPK getId() {
		return id;
	}

	public void setId(InsumoProdutoPK id) {
		this.id = id;
	}

	public Long getQtde() {
		return qtde;
	}

	public void setQtde(Long qtde) {
		this.qtde = qtde;
	}

	public UnidadeMedida getUnidadeMedida() {
		return unidadeMedida;
	}

	public void setUnidadeMedida(UnidadeMedida unidadeMedida) {
		this.unidadeMedida = unidadeMedida;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((qtde == null) ? 0 : qtde.hashCode());
		result = prime * result + ((unidadeMedida == null) ? 0 : unidadeMedida.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		InsumoProduto other = (InsumoProduto) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (qtde == null) {
			if (other.qtde != null)
				return false;
		} else if (!qtde.equals(other.qtde))
			return false;
		if (unidadeMedida != other.unidadeMedida)
			return false;
		return true;
	}

}

package br.com.annypularebackend.entities.pks;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import br.com.annypularebackend.entities.Insumo;
import br.com.annypularebackend.entities.Produto;


@Embeddable
public class InsumoProdutoPK implements Serializable {

	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name = "insumo_id")
	private Insumo insumo;
	@ManyToOne
	@JoinColumn(name = "produto_id")	
	private Produto produto;
	
	public InsumoProdutoPK() {
		
	}

	public InsumoProdutoPK(Insumo insumo, Produto produto) {
		this.insumo = insumo;
		this.produto = produto;
	}

	public Insumo getInsumo() {
		return insumo;
	}

	public void setInsumo(Insumo insumo) {
		this.insumo = insumo;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((insumo == null) ? 0 : insumo.hashCode());
		result = prime * result + ((produto == null) ? 0 : produto.hashCode());
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
		InsumoProdutoPK other = (InsumoProdutoPK) obj;
		if (insumo == null) {
			if (other.insumo != null)
				return false;
		} else if (!insumo.equals(other.insumo))
			return false;
		if (produto == null) {
			if (other.produto != null)
				return false;
		} else if (!produto.equals(other.produto))
			return false;
		return true;
	}
	
}

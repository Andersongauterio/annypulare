package br.com.annypularebackend.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.annypularebackend.entities.Categoria;
import br.com.annypularebackend.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	@Query("SELECT DISTINCT obj FROM Produto obj INNER JOIN obj.categoria cat WHERE "
			+ "(COALESCE(:categoria) IS NULL OR cats IN :categoria) AND "
			+ "(LOWER(obj.nome) LIKE LOWER(CONCAT('%',:nome,'%'))) ")
	Page<Produto> find(Categoria categoria, String nome, Pageable pageable);
	
	@Query("SELECT obj FROM Produto obj JOIN FETCH obj.categoria WHERE obj IN :produtos")
	List<Produto> findProductsWithCategories(List<Produto> produtos);

}

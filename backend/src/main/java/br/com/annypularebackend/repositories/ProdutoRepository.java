package br.com.annypularebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.annypularebackend.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	

}

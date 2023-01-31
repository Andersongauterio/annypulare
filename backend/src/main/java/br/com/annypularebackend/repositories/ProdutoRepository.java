package br.com.annypularebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.annypularebackend.entities.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}

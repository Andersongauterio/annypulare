package br.com.annypularebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.annypularebackend.entities.InsumoProduto;
import br.com.annypularebackend.entities.pks.InsumoProdutoPK;

public interface InsumoProdutoRepository extends JpaRepository<InsumoProduto, InsumoProdutoPK> {

}

package br.com.annypularebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.annypularebackend.entities.InsumoProduto;
import br.com.annypularebackend.entities.pks.InsumoProdutoPK;

@Repository
public interface InsumoProdutoRepository extends JpaRepository<InsumoProduto, InsumoProdutoPK> {

}

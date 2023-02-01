package br.com.annypularebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.annypularebackend.entities.Insumo;

@Repository
public interface InsumoRepository extends JpaRepository<Insumo, Long> {

}

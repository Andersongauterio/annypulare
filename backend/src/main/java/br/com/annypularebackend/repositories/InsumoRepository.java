package br.com.annypularebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.annypularebackend.entities.Insumo;

public interface InsumoRepository extends JpaRepository<Insumo, Long> {

}

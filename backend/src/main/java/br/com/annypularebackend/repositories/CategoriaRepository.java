package br.com.annypularebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.annypularebackend.entities.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
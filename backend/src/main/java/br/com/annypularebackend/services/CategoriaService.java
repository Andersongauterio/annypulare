package br.com.annypularebackend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.annypularebackend.dto.CategoriaDTO;
import br.com.annypularebackend.entities.Categoria;
import br.com.annypularebackend.repositories.CategoriaRepository;

@Service
public class CategoriaService {
	
	@Autowired
	private CategoriaRepository repository;
	
	@Transactional(readOnly = true)
	public List<CategoriaDTO> findAll() {
		List<Categoria> list = repository.findAll();

		return list.stream().map(x -> new CategoriaDTO(x)).collect(Collectors.toList());

	}

}

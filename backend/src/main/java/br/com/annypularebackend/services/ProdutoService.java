package br.com.annypularebackend.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.annypularebackend.dto.ProdutoDTO;
import br.com.annypularebackend.entities.Categoria;
import br.com.annypularebackend.entities.Produto;
import br.com.annypularebackend.repositories.CategoriaRepository;
import br.com.annypularebackend.repositories.ProdutoRepository;
import br.com.annypularebackend.services.exceptions.DatabaseException;
import br.com.annypularebackend.services.exceptions.ResourceNotFoundException;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository repository;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Transactional(readOnly = true)
	public List<ProdutoDTO> findAll() {
		List<Produto> list = repository.findAll();

		return list.stream().map(x -> new ProdutoDTO(x)).collect(Collectors.toList());

	}
	
	public Page<ProdutoDTO> findAllPaged(Pageable pageable) {
		Page<Produto> list = repository.findAll(pageable);
		return list.map(x -> new ProdutoDTO(x));
	}

	@Transactional(readOnly = true)
	public ProdutoDTO findById(Long id) {
		Optional<Produto> obj = repository.findById(id);
		Produto entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new ProdutoDTO(entity);
	}

	@Transactional
	public ProdutoDTO insert(ProdutoDTO dto) {
		Produto entity = new Produto();
		entity.setNome(dto.getNome());
		entity.setDescricao(dto.getDescricao());
		Categoria categoria = categoriaRepository.findById(dto.getId()).get();
		entity.setCategoria(categoria);
		entity.setModoDePreparo(dto.getModoDePreparo());
		entity.setPropriedades(dto.getPropriedades());
		entity.setQtdeEstoque(dto.getQtdeEstoque());
		entity.setTamanho(dto.getTamanho());
		entity = repository.save(entity);
		return new ProdutoDTO(entity);
	}

	@Transactional
	public ProdutoDTO update(Long id, ProdutoDTO dto) {
		try {
			@SuppressWarnings("deprecation")
			Produto entity = repository.getOne(id);
			entity.setNome(dto.getNome());
			entity.setDescricao(dto.getDescricao());
			Categoria categoria = categoriaRepository.findById(dto.getId()).get();
			entity.setCategoria(categoria);
			entity.setModoDePreparo(dto.getModoDePreparo());
			entity.setPropriedades(dto.getPropriedades());
			entity.setQtdeEstoque(dto.getQtdeEstoque());
			entity.setTamanho(dto.getTamanho());
			entity = repository.save(entity);
			return new ProdutoDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Id not found" + id);
		}
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Id not found " + id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}


}

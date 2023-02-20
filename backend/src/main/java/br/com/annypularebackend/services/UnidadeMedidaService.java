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

import br.com.annypularebackend.dto.UnidadeMedidaDTO;
import br.com.annypularebackend.entities.UnidadeMedida;
import br.com.annypularebackend.repositories.UnidadeMedidaRepository;
import br.com.annypularebackend.services.exceptions.DatabaseException;
import br.com.annypularebackend.services.exceptions.ResourceNotFoundException;

@Service
public class UnidadeMedidaService {

	@Autowired
	private UnidadeMedidaRepository repository;

	@Transactional(readOnly = true)
	public List<UnidadeMedidaDTO> findAll() {
		List<UnidadeMedida> list = repository.findAll();

		return list.stream().map(x -> new UnidadeMedidaDTO(x)).collect(Collectors.toList());

	}
	
	public Page<UnidadeMedidaDTO> findAllPaged(Pageable pageable) {
		Page<UnidadeMedida> list = repository.findAll(pageable);
		return list.map(x -> new UnidadeMedidaDTO(x));
	}

	@Transactional(readOnly = true)
	public UnidadeMedidaDTO findById(Long id) {
		Optional<UnidadeMedida> obj = repository.findById(id);
		UnidadeMedida entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new UnidadeMedidaDTO(entity);
	}

	@Transactional
	public UnidadeMedidaDTO insert(UnidadeMedidaDTO dto) {
		UnidadeMedida entity = new UnidadeMedida();
		entity.setNome(dto.getNome());
		entity.setDescricao(dto.getDescricao());
		entity = repository.save(entity);
		return new UnidadeMedidaDTO(entity);
	}

	@Transactional
	public UnidadeMedidaDTO update(Long id, UnidadeMedidaDTO dto) {
		try {
			@SuppressWarnings("deprecation")
			UnidadeMedida entity = repository.getOne(id);
			entity.setNome(dto.getNome());
			entity.setDescricao(dto.getDescricao());
			entity = repository.save(entity);
			return new UnidadeMedidaDTO(entity);
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

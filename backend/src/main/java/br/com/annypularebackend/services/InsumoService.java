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

import br.com.annypularebackend.dto.InsumoDTO;
import br.com.annypularebackend.entities.Insumo;
import br.com.annypularebackend.entities.UnidadeMedida;
import br.com.annypularebackend.repositories.InsumoRepository;
import br.com.annypularebackend.repositories.UnidadeMedidaRepository;
import br.com.annypularebackend.services.exceptions.DatabaseException;
import br.com.annypularebackend.services.exceptions.ResourceNotFoundException;

@Service
public class InsumoService {

	
	@Autowired
	private InsumoRepository repository;
	
	@Autowired
	private UnidadeMedidaRepository unidadeMedidaRepository;

	@Transactional(readOnly = true)
	public List<InsumoDTO> findAll() {
		List<Insumo> list = repository.findAll();

		return list.stream().map(x -> new InsumoDTO(x)).collect(Collectors.toList());

	}
	
	public Page<InsumoDTO> findAllPaged(Pageable pageable) {
		Page<Insumo> list = repository.findAll(pageable);
		return list.map(x -> new InsumoDTO(x));
	}

	@Transactional(readOnly = true)
	public InsumoDTO findById(Long id) {
		Optional<Insumo> obj = repository.findById(id);
		Insumo entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new InsumoDTO(entity);
	}

	@Transactional
	public InsumoDTO insert(InsumoDTO dto) {
		Insumo entity = new Insumo();
		entity.setNome(dto.getNome());
		entity.setDescricao(dto.getDescricao());
		entity.setQtdeEstoque(dto.getQtdeEstoque());
		UnidadeMedida unidadeMedida = unidadeMedidaRepository.findById(dto.getUnidadeMedida().getId()).get();
		entity.setUnidadeMedida(unidadeMedida);
		entity = repository.save(entity);
		return new InsumoDTO(entity);
	}

	@Transactional
	public InsumoDTO update(Long id, InsumoDTO dto) {
		try {
			@SuppressWarnings("deprecation")
			Insumo entity = repository.getOne(id);
			entity.setNome(dto.getNome());
			entity.setDescricao(dto.getDescricao());
			entity.setQtdeEstoque(dto.getQtdeEstoque());
			UnidadeMedida unidadeMedida = unidadeMedidaRepository.findByNome(dto.getNome());
			entity.setUnidadeMedida(unidadeMedida);
			entity = repository.save(entity);
			return new InsumoDTO(entity);
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

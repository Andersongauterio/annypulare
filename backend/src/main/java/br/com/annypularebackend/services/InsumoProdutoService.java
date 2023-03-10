package br.com.annypularebackend.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.annypularebackend.dto.InsumoProdutoDTO;
import br.com.annypularebackend.dto.ProdutoDTO;
import br.com.annypularebackend.entities.Insumo;
import br.com.annypularebackend.entities.InsumoProduto;
import br.com.annypularebackend.entities.Produto;
import br.com.annypularebackend.repositories.InsumoProdutoRepository;
import br.com.annypularebackend.repositories.InsumoRepository;
import br.com.annypularebackend.repositories.ProdutoRepository;
import br.com.annypularebackend.services.exceptions.DatabaseException;

@Service
public class InsumoProdutoService {

	@Autowired
	private InsumoProdutoRepository repository;

	@Autowired
	private InsumoRepository insumoRepository;

	@Autowired
	private ProdutoRepository produtoRepository;

	@Transactional(readOnly = true)
	public List<InsumoProdutoDTO> findAll() {
		List<InsumoProduto> list = repository.findAll();

		return list.stream().map(x -> new InsumoProdutoDTO(x)).collect(Collectors.toList());

	}

	public Page<InsumoProdutoDTO> findAllPaged(Pageable pageable) {
		Page<InsumoProduto> list = repository.findAll(pageable);
		return list.map(x -> new InsumoProdutoDTO(x));
	}

	@Transactional
	public ProdutoDTO saveInsumos(InsumoProdutoDTO[] dto) {

		Produto produto = produtoRepository.findById(dto[0].getProdutoId()).get();
		try {

			for (InsumoProdutoDTO insumoProdutoDTO : dto) {

				Insumo insumo = insumoRepository.findById(insumoProdutoDTO.getInsumoId()).get();

				InsumoProduto insumoProduto = new InsumoProduto();
				insumoProduto.setInsumo(insumo);
				insumoProduto.setProduto(produto);
				insumoProduto.setQtde(insumoProdutoDTO.getQtde());

				insumoProduto = repository.saveAndFlush(insumoProduto);
			}
		} catch (Exception e) {
			throw new DatabaseException(e.getMessage());
		}

		return new ProdutoDTO(produto);

	}

}

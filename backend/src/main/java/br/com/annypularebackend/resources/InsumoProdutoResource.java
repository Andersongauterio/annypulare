package br.com.annypularebackend.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.annypularebackend.dto.InsumoProdutoDTO;
import br.com.annypularebackend.dto.ProdutoDTO;
import br.com.annypularebackend.services.InsumoProdutoService;

@RestController
@RequestMapping(value = "/insumosProduto")
public class InsumoProdutoResource {
	
	@Autowired
	private InsumoProdutoService service;
	
	@PutMapping
	public ProdutoDTO saveScore(@RequestBody InsumoProdutoDTO[] dto) {
		ProdutoDTO produtoDTO =  service.saveInsumos(dto);
		return produtoDTO;
	}

}

package co.com.sa.zeus.web.rest;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;

import co.com.sa.zeus.domain.Color;
import co.com.sa.zeus.repository.UserRepository;
import co.com.sa.zeus.service.ColorService;
import co.com.sa.zeus.service.dto.UserDTO;
import co.com.sa.zeus.web.rest.util.PaginationUtil;

@RestController
@RequestMapping("/api")
public class ColorResource {

	private final Logger log = LoggerFactory.getLogger(ColorResource.class);

	private final String ENTITY_NAME = "color";

	private final ColorService colorService;
	private final UserRepository userRepository;
	
	public ColorResource(ColorService colorService,UserRepository userRepository){
		this.colorService=colorService;
		this.userRepository=userRepository;
	}
	
	
	@GetMapping("/colors")
	@Timed
	public ResponseEntity<List<Color>> getAll(Pageable pageable) {
		log.debug("Getting all colors");
		final Page<Color> page = this.colorService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/entries");
		
		return new ResponseEntity<>(page.getContent(), headers, HttpStatus.OK);

	}

}

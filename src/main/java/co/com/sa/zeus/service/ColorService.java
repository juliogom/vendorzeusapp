package co.com.sa.zeus.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import co.com.sa.zeus.domain.Color;;


public interface ColorService {

	Page<Color> findAll(Pageable pageable);
	
}

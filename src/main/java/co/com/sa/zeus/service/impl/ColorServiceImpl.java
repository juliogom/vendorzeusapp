package co.com.sa.zeus.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.com.sa.zeus.config.Constants;
import co.com.sa.zeus.domain.Color;
import co.com.sa.zeus.repository.ColorRepository;
import co.com.sa.zeus.service.ColorService;
import co.com.sa.zeus.service.dto.UserDTO;

@Service
@Transactional
public class ColorServiceImpl implements ColorService{
	
	private final Logger logger=LoggerFactory.getLogger(ColorServiceImpl.class);
	
	private final ColorRepository colorRepository;
	
	public ColorServiceImpl(ColorRepository colorRepository) {
		
		this.colorRepository=colorRepository;
	}
	
	@Override
	public Page<Color> findAll(Pageable pageable) {
		logger.debug("retireving all Colors");
		final Page<Color> page=colorRepository.findAll(pageable);
		return page;
	}
}

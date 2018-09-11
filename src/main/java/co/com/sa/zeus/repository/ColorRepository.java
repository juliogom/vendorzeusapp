package co.com.sa.zeus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.com.sa.zeus.domain.*;

@Repository
public interface ColorRepository extends JpaRepository<Color,Long>{

}

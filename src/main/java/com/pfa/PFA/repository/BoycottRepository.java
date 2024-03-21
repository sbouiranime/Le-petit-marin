package com.pfa.PFA.repository;

import com.pfa.PFA.models.BoycottEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
public interface BoycottRepository extends JpaRepository<BoycottEntity,Long> {
}

package com.pfa.PFA.repository;

import com.pfa.PFA.models.ComplaintEntity;
import org.hibernate.sql.ast.tree.expression.JdbcParameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
public interface ComplaintRepository extends JpaRepository<ComplaintEntity,Long> {
}

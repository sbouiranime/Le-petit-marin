package com.pfa.PFA.repository;

import com.pfa.PFA.models.SuggestionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuggestionRepository extends JpaRepository<SuggestionEntity,Long> {
}

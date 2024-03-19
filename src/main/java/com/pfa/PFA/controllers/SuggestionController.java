package com.pfa.PFA.controllers;

import com.pfa.PFA.models.ComplaintEntity;
import com.pfa.PFA.models.ProductEntity;
import com.pfa.PFA.models.SuggestionEntity;
import com.pfa.PFA.repository.BoycottRepository;
import com.pfa.PFA.repository.ComplaintRepository;
import com.pfa.PFA.repository.SuggestionRepository;
import jakarta.persistence.PreRemove;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/suggestion")
public class  SuggestionController {

    @Autowired
    private SuggestionRepository suggestionRepo;

    @Autowired
    private ComplaintRepository complaintRepo;

    @Autowired
    private BoycottRepository boycottRepo;

    @GetMapping(value = "/getSuggestions")
    public  List<SuggestionEntity> showSuggestions(){
        return suggestionRepo.findAll();
    }

    @PostMapping(value = "/addComplaint")
    public void addComplaint(@RequestBody ComplaintEntity ce){
        complaintRepo.save(ce);
    }

    @Transactional
    @DeleteMapping("/deleteSuggestion/{id}")
    public void deleteSuggestion(@PathVariable long id){
        if(suggestionRepo.existsById(id)){
            suggestionRepo.deleteById(id);

        }

    }


}







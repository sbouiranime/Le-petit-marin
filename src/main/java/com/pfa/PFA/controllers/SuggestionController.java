package com.pfa.PFA.controllers;

import com.pfa.PFA.models.*;
import com.pfa.PFA.repository.AlternativeRepository;
import com.pfa.PFA.repository.BoycottRepository;
import com.pfa.PFA.repository.ComplaintRepository;
import com.pfa.PFA.repository.SuggestionRepository;
import jakarta.persistence.PreRemove;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/suggestion")
public class  SuggestionController {

    @Autowired
    private SuggestionRepository suggestionRepo;

    @Autowired
    private ComplaintRepository complaintRepo;

    @Autowired
    private BoycottRepository boycottRepo;

    @Autowired
    private AlternativeRepository alternativeRepo;

    @GetMapping(value = "/getSuggestions")
    public  List<SuggestionEntity> showSuggestions(){
        return suggestionRepo.findAll();
    }

    @PostMapping(value = "/addComplaint")
    public void addComplaint(@RequestBody ComplaintEntity ce){
        complaintRepo.save(ce);
    }

    @PostMapping(value = "/addBoycott")
    public void addBoycott(@RequestBody BoycottEntity be){
        boycottRepo.save(be);
    }

    @PostMapping(value = "/addAlternative")
    public void addAlternative(@RequestBody AlternativeEntity ae){
        alternativeRepo.save(ae);
    }

    @PostMapping(value ="/updateComplaint/{id}")
    public void updateComplaint(@PathVariable Long id,@RequestBody ComplaintEntity complaintEntity){
        ComplaintEntity complaintEntity1 = complaintRepo.findById(id).get();
        if(complaintRepo.existsById(complaintEntity1.getSugID())){
            complaintEntity1.setCorrection(complaintEntity.getCorrection());
            complaintRepo.save(complaintEntity1);
            //nkamlou lokhrin kifhom

        }

    }

    //nkamlou les apis b fard principe

    @Transactional
    @DeleteMapping("/deleteSuggestion/{id}")
    public void deleteSuggestion(@PathVariable long id){
        if(suggestionRepo.existsById(id)){
            suggestionRepo.deleteById(id);
        }

    }


}







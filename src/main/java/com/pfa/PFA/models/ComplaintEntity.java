package com.pfa.PFA.models;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue("COMPLAINT")
@Table(name="complaint")
public class ComplaintEntity extends SuggestionEntity {
    @ManyToOne
    private SuggestionEntity suggestion;

    public SuggestionEntity getSuggestion() {
        return suggestion;
    }

    public void setSuggestion(SuggestionEntity suggestion) {
        this.suggestion = suggestion;
    }

    @Column(name = "correction")//lezem enum 2 anwe3
    private String correction;

    @Column(name = "boycotted_brand")
    private String boycottedBrand;

    public ComplaintEntity(long sugID, String type, String reason, String correction, String boycottedBrand) {
        super(sugID, type, reason);
        this.correction = correction;
        this.boycottedBrand = boycottedBrand;
    }

    public ComplaintEntity() {

    }

    public String getCorrection() {
        return correction;
    }

    public void setCorrection(String correction) {
        this.correction = correction;
    }

    public String getBoycottedBrand() {
        return boycottedBrand;
    }

    public void setBoycottedBrand(String boycottedBrand) {
        this.boycottedBrand = boycottedBrand;
    }
}

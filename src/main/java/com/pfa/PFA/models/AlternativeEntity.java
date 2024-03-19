package com.pfa.PFA.models;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue("ALTERNATIVE")
@Table(name="alternative")
public class AlternativeEntity extends SuggestionEntity {
    @ManyToOne
    private SuggestionEntity suggestion;

    public SuggestionEntity getSuggestion() {
        return suggestion;
    }

    public void setSuggestion(SuggestionEntity suggestion) {
        this.suggestion = suggestion;
    }

    @Column(name = "name")
    private String name;

    @Column(name = "boycotted_brand")
    private String boycottedBrand;

    public AlternativeEntity(long sugID, String type, String reason, String name, String boycottedBrand) {
        super(sugID, type, reason);
        this.name = name;
        this.boycottedBrand = boycottedBrand;
    }

    public AlternativeEntity() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBoycottedBrand() {
        return boycottedBrand;
    }

    public void setBoycottedBrand(String boycottedBrand) {
        this.boycottedBrand = boycottedBrand;
    }
}

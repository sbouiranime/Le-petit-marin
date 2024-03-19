package com.pfa.PFA.models;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue("BOYCOTT")
@Table(name="boycott")
public class BoycottEntity extends SuggestionEntity {

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

    @Column(name = "proof_URL")
    private String proofURL;

    @Column(name = "alternative")
    private String alternative;

    public BoycottEntity(long sugID, String type, String reason, String name, String proofURL, String alternative) {
        super(sugID, type, reason);
        this.name = name;
        this.proofURL = proofURL;
        this.alternative = alternative;
    }

    public BoycottEntity() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProofURL() {
        return proofURL;
    }

    public void setProofURL(String proofURL) {
        this.proofURL = proofURL;
    }

    public String getAlternative() {
        return alternative;
    }

    public void setAlternative(String alternative) {
        this.alternative = alternative;
    }
}

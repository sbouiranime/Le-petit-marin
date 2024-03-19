package com.pfa.PFA.models;

import jakarta.persistence.*;
import java.util.Set;


@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "SUGGESTION_TYPE", discriminatorType = DiscriminatorType.STRING)
@Table(name="suggestion")
public class SuggestionEntity {

    @OneToMany(orphanRemoval = true, mappedBy = "suggestion")
    private Set<ComplaintEntity> complaints;

    @OneToMany(orphanRemoval = true, mappedBy = "suggestion")
    private Set<AlternativeEntity> alternatives;

    @OneToMany(orphanRemoval = true, mappedBy = "suggestion")
    private Set<BoycottEntity> boycotts;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "sug_id")
    private long sugID;



    @Column(name = "reason")
    private String reason;

    @Column(name= "is_accepted")
    private boolean isAccepted;

    public boolean isAccepted() {
        return isAccepted;
    }

    public SuggestionEntity(long sugID,  String reason, boolean isAccepted) {
        this.sugID = sugID;
        this.reason = reason;
        this.isAccepted = isAccepted;
    }

    public void setAccepted(boolean accepted) {
        isAccepted = accepted;
    }

    public SuggestionEntity(long sugID, String type, String reason) {
        this.sugID = sugID;

        this.reason = reason;
    }

    public SuggestionEntity() {

    }


    public long getSugID() {
        return sugID;
    }

    public void setSugID(long sugID) {
        this.sugID = sugID;
    }


    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}

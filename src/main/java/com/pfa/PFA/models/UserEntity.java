package com.pfa.PFA.models;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private long userID;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "tel")
    private long tel;

    @Column(name = "mdp")
    private String mdp;

    public UserEntity(long userID, String name, String email, long tel, String mdp) {
        this.userID = userID;
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.mdp = mdp;
    }

    public UserEntity() {

    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getTel() {
        return tel;
    }

    public void setTel(long tel) {
        this.tel = tel;
    }

    public String getMdp() {
        return mdp;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
    }
}

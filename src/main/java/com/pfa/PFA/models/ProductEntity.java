package com.pfa.PFA.models;

import jakarta.persistence.*;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@DynamicUpdate
@Table(name="product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "product_id")
    private long productID;

    @Column(name="name")
    private String name;

    public enum enum_product {
        cleaning,
        cosmetics,
        fashion,
        finance,
        food,
        drinks,
        haircare,
        technology,
        famous_poeple,
        others
    }
    @Column(name="type")
    @Enumerated(EnumType.STRING)
    private enum_product type;

    @Column(name="proof")
    private String proof;

    @Column(name="logo")
    private String logo;

    @Column(name="src_url")
    private String srcURL;

    @Column(name="alternative")
    private String alternative;


    public ProductEntity(long productID, String name, String type, String proof, String logo, String srcURL, String alternative) {
        this.productID = productID;
        this.name = name;
        this.type = enum_product.valueOf(type);
        this.proof = proof;
        this.logo = logo;
        this.srcURL = srcURL;
        this.alternative = alternative;
    }

    public ProductEntity() {

    }

    public long getProductID() {
        return productID;
    }

    public void setUserID(long userID) {
        this.productID = userID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public enum_product getType() {
        return type;
    }

    public void setType(enum_product type) {
        this.type = type;
    }

    public String getProof() {
        return proof;
    }

    public void setProof(String proof) {
        this.proof = proof;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getSrcURL() {
        return srcURL;
    }

    public void setSrcURL(String srcURL) {
        this.srcURL = srcURL;
    }

    public String getAlternative() {
        return alternative;
    }

    public void setAlternative(String alternative) {
        this.alternative = alternative;
    }
}

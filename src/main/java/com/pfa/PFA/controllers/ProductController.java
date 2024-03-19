package com.pfa.PFA.controllers;

import com.pfa.PFA.models.ProductEntity;
import com.pfa.PFA.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductRepository productRepo;

    @GetMapping("/getProducts")
    public List<ProductEntity> getAllProduct(){
        return productRepo.findAll();
    }

    @PutMapping("/addProduct")
    public void addProduct(@RequestBody ProductEntity product){
        if (product != null){
            productRepo.save(product);
        }
    }
    @DeleteMapping("/deleteProduct/{id}")
    public void deleteProduct(@PathVariable long id){
        if(productRepo.existsById(id)){
            productRepo.deleteById(id);
        }

    }

    @PutMapping("/updateProduct/{id}")
    public void updateProduct(@PathVariable long id,@RequestBody ProductEntity product){
        ProductEntity product1 = productRepo.findById(id).get();
        if(productRepo.existsById(id)){
            if(product.getLogo() != null){product1.setLogo(product.getLogo());}
            if (product.getName() != null){product1.setName(product.getName());}
            if(product.getAlternative() != null){product1.setAlternative(product.getAlternative());}
            if(product.getProof() !=null){product1.setProof(product.getProof());}
            if(product.getSrcURL() !=null){product1.setSrcURL(product.getSrcURL());}
            if(product.getType() !=null){product1.setType(product.getType());}
            productRepo.save(product1);
        }

    }

  

}

package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.Product;
import com.example.projectemarketg3.exception.NotFoundException;
import com.example.projectemarketg3.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    
    // Get all products rest api
    @GetMapping
    public List<Product> getAllProduct(){
        return productRepository.findAll();
    }

    // create a new product rest api
    @PostMapping("/")
    public Product createproduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // get product by ID rest api
    @GetMapping("/{id}")
    public ResponseEntity<Product> getproductById(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("product not exist with id :" + id));
        return ResponseEntity.ok(product);
    }

    // update product rest api
//    @PutMapping("/products/{id}")
//    public  ResponseEntity <products> updateproduct(@PathVariable Long id, @RequestBody products productDetails){
//        products product = productRepository.findById(id)
//                .orElseThrow (()->new NotFoundException
//                        ("product not exist with id :" + id));
//
//        product.set(productDetails.get());
//        product.set(productDetails.get());
//        product.set(productDetails.get());
//
//        products updatedproduct = productRepository.save(product);
//
//        return  ResponseEntity.ok(updatedproduct);
//    }

    // delete product rest api
    @DeleteMapping("/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteproduct(@PathVariable Long id){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("product not exist with id :" + id));
        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}

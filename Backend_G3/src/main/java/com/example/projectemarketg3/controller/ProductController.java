package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.Product;
import com.example.projectemarketg3.exception.NotFoundException;
import com.example.projectemarketg3.repository.OrderDetailRepository;
import com.example.projectemarketg3.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;


    // Get all products rest api
    @GetMapping
    public List<Product> getAllProduct(@RequestParam Optional<String> name,@RequestParam Optional<Long> sellPriceStart, @RequestParam Optional<Long> sellPriceEnd) {
        if(name.isPresent() && sellPriceEnd.isEmpty() && sellPriceStart.isEmpty() ){
            return productRepository.getByNameStartsWithIgnoreCaseOrderByNameAsc(name.get());
        }if(name.isEmpty() && sellPriceEnd.isPresent() && sellPriceStart.isPresent()){
            return productRepository.findBySellPriceBetweenOrderBySellPriceAsc(sellPriceStart.get(), sellPriceEnd.get());
        }if(name.isPresent() && sellPriceEnd.isPresent() && sellPriceStart.isPresent()) {
            return productRepository.getByNameStartsWithIgnoreCaseAndSellPriceBetween(name.get(), sellPriceStart.get(), sellPriceEnd.get());
        }
        else {
        return productRepository.findAll();}
    }

    // create a new product rest api
    @PostMapping("/")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // get product by ID rest api
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("product not exist with id :" + id));
        return ResponseEntity.ok(product);
    }

    // update product rest api
//    @PutMapping("/{id}")
//    public  ResponseEntity <products> updateProduct(@PathVariable Long id, @RequestBody products productDetails){
//        products product = productRepository.findById(id)
//                .orElseThrow (()->new NotFoundException
//                        ("product not exist with id :" + id));
//
//        product.set(productDetails.get());
//        product.set(productDetails.get());
//        product.set(productDetails.get());
//
//        products updatedProduct = productRepository.save(product);
//
//        return  ResponseEntity.ok(updatedProduct);
//    }

    // delete product rest api
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("product not exist with id :" + id));
        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //    HOT PRODUCT
    @GetMapping("/hot")
    public List<Product> getProductTopSold() {
        return productRepository.findTop6AllByOrderBySoldDesc();
    }

    //SEARCH BY NAME -> http://localhost:8080/api/v1/products/search-name?name=Lesley Rohan
    @GetMapping("/search-name")
    public List<Product> findByName(@RequestParam String name) {
        return productRepository.getByNameStartsWithIgnoreCaseOrderByNameAsc(name);
    }

    //    SEARCH BY PRICE
//    http://localhost:8080/api/v1/products/search-price?sellPriceStart=20&sellPriceEnd=50
    @GetMapping("/search-price")
    public List<Product> findByPrice(@RequestParam Long sellPriceStart, @RequestParam Long sellPriceEnd) {
        return productRepository.findBySellPriceBetweenOrderBySellPriceAsc(sellPriceStart, sellPriceEnd);
    }

    @GetMapping("/category/{name}")
    public List<Product> getProductByCategory(@PathVariable String name){
        return productRepository.findByCategory_Name(name);
    }
}

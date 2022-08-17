package com.example.projectemarketg3.repository;

import com.example.projectemarketg3.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findTop6AllByOrderBySoldDesc();
    
    List<Product> findByNameLikeIgnoreCase(String name);

    List<Product> getByNameStartsWithIgnoreCaseOrderByNameAsc(String name);

    List<Product> findByCategory_Name(String name);

    List<Product> findBySellPriceBetweenOrderBySellPriceAsc(Long sellPriceStart, Long sellPriceEnd);

    Product getProductById(Long id);

    List<Product> getByCategory_NameContainsIgnoreCase(String category);
}
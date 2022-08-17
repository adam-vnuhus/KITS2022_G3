package com.example.projectemarketg3.repository;

import com.example.projectemarketg3.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findTop6AllByOrderBySoldDesc();


    @Query("select p from Product p where upper(p.name) like upper(?1)")
    List<Product> findByNameLikeIgnoreCase(String name);

    List<Product> getByNameStartsWithIgnoreCaseOrderByNameAsc(String name);


    @Query("select p from Product p where p.category.name = ?1")
    List<Product> findByCategory_Name(String name);


    @Query("select p from Product p where p.sellPrice between ?1 and ?2 order by p.sellPrice")
    List<Product> findBySellPriceBetweenOrderBySellPriceAsc(Long sellPriceStart, Long sellPriceEnd);

    Product getProductById(Long id);

    List<Product> getByCategory_NameContainsIgnoreCase(String category);



}
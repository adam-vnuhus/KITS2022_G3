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

    List<Product> getByNameStartsWithIgnoreCaseAndSellPriceBetween(String name, Long sellPriceStart, Long sellPriceEnd);

    List<Product> getByNameLikeAndCategory_NameLikeAndSellPriceBetween(String name, String category, Long sellPriceStart, Long sellPriceEnd);


    @Query(value = "SELECT * FROM product p\n" +
            "INNER JOIN category c ON c.id = p.category_id\n" +
            "INNER JOIN supplier s ON s.id = p.supplier_id\n" +
            " WHERE p.description LIKE %?1%" +
            " OR p.name LIKE %?1% " +
            "OR p.origin LIKE %?1%" +
            " OR p.slug  LIKE %?1% " +
            "OR c.name LIKE %?1%" +
            " OR s.name  LIKE %?1%"
            , nativeQuery = true)
    List<Product> findProductByName(String name);

    @Query(value = "SELECT * FROM product p\n" +
            "INNER JOIN category c ON c.id = p.category_id\n" +
            "INNER JOIN supplier s ON s.id = p.supplier_id\n" +
            "WHERE (p.category_id = ?2) \n" +
            "AND (p.description LIKE %?1% OR p.name LIKE %?1% OR p.origin LIKE %?1% OR s.name  LIKE %?1%)"
            , nativeQuery = true)
    List<Product> findProductByCategoryAndName(String name, Long categoryId);

    @Query(value = "SELECT * FROM product p\n" +
            "INNER JOIN category c ON c.id = p.category_id\n" +
            "INNER JOIN supplier s ON s.id = p.supplier_id\n" +
            "WHERE (p.category_id = ?2) \n" +
            "AND (p.description LIKE %?1% OR p.name LIKE %?1% OR p.origin LIKE %?1% OR s.name  LIKE %?1%)\n" +
            "AND (p.sell_price BETWEEN ?3 AND ?4)"
            , nativeQuery = true)
    List<Product> findProductByCategoryAndNameAndPrice(String name, Long categoryId, Long start, Long end);

}
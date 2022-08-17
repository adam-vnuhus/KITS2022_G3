package com.example.projectemarketg3.repository;

import com.example.projectemarketg3.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {

//    @Query(nativeQuery = true ,
//            value = "select c.product.id ,c.product.name,c.product.sellPrice, c.quantity from CartItem c where c.user.id = ?1")
//    public List<CartItem> getCartItemBy_UserId(Long id);
    List<CartItem> findCartItemByUser(Long id);
}
package com.example.projectemarketg3.repository;

import com.example.projectemarketg3.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    long countByProduct_Id(Long id);

    List<OrderDetail> getOrderDetailsByOrdersId(Long orderID);

    @Query("select count(o.product.id) from OrderDetail o ")
    List<OrderDetail> countSoldProduct(Long id);

    @Query("select count(distinct o) from OrderDetail o where upper(o.product.id) = upper(:id)")
    long countDistinctByProduct_IdAllIgnoreCase(@Param("id") Long id);

}
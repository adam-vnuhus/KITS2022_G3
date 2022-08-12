package com.example.Project_eMarket_G3.repository;

import com.example.Project_eMarket_G3.entity.OrderDetail;
import com.example.Project_eMarket_G3.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    long countByProduct_Id(Long id);

    List<OrderDetail> getOrderDetailsByOrderId(Long orderID);

}
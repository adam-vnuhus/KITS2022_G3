package com.example.projectemarketg3.repository;

import com.example.projectemarketg3.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    long countByProduct_Id(Long id);

    List<OrderDetail> getOrderDetailsByOrdersId(Long orderID);

}
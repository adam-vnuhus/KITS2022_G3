package com.example.projectemarketg3.request;

import com.example.projectemarketg3.dto.DetailDto;
import com.example.projectemarketg3.entity.CartItem;
import com.example.projectemarketg3.entity.OrderDetail;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    public DetailDto getOrderDetail(OrderDetail orderDetail){

        return DetailDto.builder()
                .quantity(orderDetail.getQuantity())
                .total(orderDetail.getTotal())
                .productId(orderDetail.getProduct().getId())
                .userId(orderDetail.getUser().getId())
                .build();
    }

    public DetailDto getOrderDetail(CartItem orderDetail){

        return DetailDto.builder()
                .quantity(orderDetail.getQuantity())
                .total(orderDetail.getTotal())
                .productId(orderDetail.getProduct().getId())
                .userId(orderDetail.getUser().getId())
                .build();
    }
}

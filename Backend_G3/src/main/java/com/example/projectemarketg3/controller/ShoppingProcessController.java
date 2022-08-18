package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.dto.DetailDto;
import com.example.projectemarketg3.dto.InfoUserShoppingDto;
import com.example.projectemarketg3.entity.*;
import com.example.projectemarketg3.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Controller
@RequestMapping("/api/v1")
public class ShoppingProcessController {

    @Autowired
    private RatingRepository ratingRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RankingRepository rankingRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private StatusRepository statusRepository;


    //    ADD CART
    @PostMapping("/orders/detail")
    public OrderDetail createOrderDetails(@RequestBody DetailDto detailDto) {
        Optional<Product> product = productRepository.findById(detailDto.getProductId());

        OrderDetail orderDetail = OrderDetail.builder()
                .product(product.get())
                .quantity(detailDto.getQuantity())
                .total(detailDto.getQuantity() * product.get().getSellPrice())
                .build();
        return orderDetailRepository.save(orderDetail);
    }

    //    CLICK BUY -> BILL(createAt,idDetail,idUser,ship,
//@PostMapping("/orders")
//public Orders createOrder(@RequestBody OrderDto orderDto) {
//    Optional<Status> status = statusRepository.findById(1L);
//    Optional<User> user = userRepository.findById(orderDto.getUserId());
//    Set<OrderDetail> orderDetails = new HashSet<>();
//
//    for (Long id_details : orderDto.getOrderDetailsId()
//    ) {
//        Optional<OrderDetail> productOptional = orderDetailRepository.findById(id_details);
//        orderDetails.add(productOptional.get());
//    }
//
//    Orders order = Orders.builder()
//            .createAt(orderDto.getCreateAt())
//            .note(orderDto.getNote())
//            .totalPrice(orderDto.getTotalPrice())
//            .orderDetails(orderDetails)
//            .status(status.get())
//            .user(user.get())
//            .build();
//
//    return ordersRepository.save(order);
//}
    @PostMapping("/order-bill")
    public Orders clickBuy(@RequestBody InfoUserShoppingDto info) {
        Optional<Status> status = statusRepository.findById(1L);
        Optional<User> user = userRepository.findById(info.getUserId());
        Set<OrderDetail> orderDetails = new HashSet<>();

        for (Long id_details : info.getOrderDetailsId()
        ) {
            Optional<OrderDetail> productOptional = orderDetailRepository.findById(id_details);
            orderDetails.add(productOptional.get());
        }

        Orders order = Orders.builder()
                .createAt(new Date(System.currentTimeMillis()))
                .note(info.getNote()) //
                .totalPrice(info.getTotalPrice())
                .orderDetails(orderDetails) //
                .status(status.get())
                .user(user.get()) //
                .ship(20000)
                .disscount(user.get().getRanking().getDiscount())
                .addressUser("") //
                .nameUser("") //
                .phoneUser("") //
                .build();

        return ordersRepository.save(order);
    }
}

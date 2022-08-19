package com.example.projectemarketg3.service;

import com.example.projectemarketg3.dto.DetailDto;
import com.example.projectemarketg3.dto.InfoUserShoppingDto;
import com.example.projectemarketg3.entity.*;
import com.example.projectemarketg3.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.sql.Date;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class ShoppingService {

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


    public Orders clickAddCart(@RequestBody DetailDto detailDto) {
        //lay ra san pham tu id
        Optional<Product> product = productRepository.findById(detailDto.getProductId());
        Optional<User> user = userRepository.findById(detailDto.getUserId());

//create orderDetail ( product + quantity + total )
        OrderDetail orderDetail = OrderDetail.builder()
                .product(product.get())
                .quantity(detailDto.getQuantity())
                .total(detailDto.getQuantity() * product.get().getSellPrice())
                .build();

         orderDetailRepository.save(orderDetail);

//         lay ra Order cua user dang nhap (Order_id = User_id)
        Optional<Orders> orders = ordersRepository.findById(detailDto.getUserId());

//kiem tra xem gio hang co ton tai khong
        if (orders.isEmpty()) {
            Set<OrderDetail> newSetOrder = new HashSet<>();
            newSetOrder.add(orderDetail);

            Orders o = Orders.builder()
                    .id(detailDto.getUserId())
                    .orderDetails(newSetOrder)
                    .user(user.get())
                    .build();

//            luu key Order_Id vao OrderDetail

            return ordersRepository.save(o);

        } else { // update them san pham vao gio hang

            //         lay ra cac san pham hien dang co trong gio hang cua User
            Set<OrderDetail> orderDetailSet = orders.get().getOrderDetails();
//            cap nhat them product , so luong  vao gio hang
            if (!orderDetailSet.add(orderDetail)) {
                for (var s : orderDetailSet
                ) {
                    if (orderDetail.getProduct().equals(s.getProduct())) {
                        s.setQuantity(s.getQuantity() + 1);
                    }
                }
            }

//             cap nhap order cua user
            orders.get().setOrderDetails(orderDetailSet);
            return ordersRepository.save(orders.get());
        }

    }

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

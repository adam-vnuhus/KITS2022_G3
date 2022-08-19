package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.dto.DetailDto;
import com.example.projectemarketg3.dto.InfoUserShoppingDto;
import com.example.projectemarketg3.dto.UserIdDto;
import com.example.projectemarketg3.entity.Orders;
import com.example.projectemarketg3.repository.*;
import com.example.projectemarketg3.service.ShoppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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
    @Autowired
    private ShoppingService shoppingService;


    //    ADD CART
    @PostMapping("/carts")
    public Orders createOrderDetails(@RequestBody DetailDto detailDto) {
        return shoppingService.clickAddCart(detailDto);
    }

    //    XEM GIO HANG theo id khach
    @GetMapping("/carts")
    public List<Orders> cartByUserId(@RequestBody UserIdDto id) {
        return ordersRepository.findByUser_Id(id.getId());
    }


    //    CLICK BUY -> add BILL(createAt,idDetail,idUser,ship,totalPrice) PUT-> quantity product
    @PostMapping("/order-bill")
    public Orders clickBuy(@RequestBody InfoUserShoppingDto info) {
        return shoppingService.clickBuy(info);
    }
}

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
import java.util.List;
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
    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItem clickAddCart(@RequestBody DetailDto detailDto) {
        //lay ra san pham tu id
        Optional<Product> product = productRepository.findById(detailDto.getProductId());
        int quantityProduct = product.get().getQuantity();
        Optional<User> user = userRepository.findById(detailDto.getUserId());

//        kiem tra xem trong gio hang da co san pham vua click add cart chua
        Optional<CartItem> optionalOrderDetail = Optional.ofNullable(cartItemRepository.findByProduct_IdAndUser_Id(detailDto.getProductId(), detailDto.getUserId()));
// neu chua ton tai va so luong them vao gio phai be hon
        if (optionalOrderDetail.isEmpty() && detailDto.getQuantity() <= quantityProduct) {

            CartItem cartItem = CartItem.builder()
                    .product(product.get())
                    .quantity(detailDto.getQuantity())
                    .total(detailDto.getQuantity() * product.get().getSellPrice())
                    .user(user.get())
                    .build();


            return cartItemRepository.save(cartItem);
            // neu da ton tai va so luong them vao gio phai be hon
        } else if ((detailDto.getQuantity() + optionalOrderDetail.get().getQuantity()) <= quantityProduct) {
            optionalOrderDetail.get().setQuantity(detailDto.getQuantity() + optionalOrderDetail.get().getQuantity());
            optionalOrderDetail.get().setTotal((detailDto.getQuantity() + optionalOrderDetail.get().getQuantity()) * product.get().getSellPrice());
            return cartItemRepository.save(optionalOrderDetail.get());
        } else {
            return null;
        }
    }

    public OrderDetail clickAddDetail(@RequestBody DetailDto detailDto) {
        //lay ra san pham tu id
        Optional<Product> product = productRepository.findById(detailDto.getProductId());
        int quantityProduct = product.get().getQuantity();
        Optional<User> user = userRepository.findById(detailDto.getUserId());

//        kiem tra xem trong gio hang da co san pham vua click add cart chua
        Optional<OrderDetail> optionalOrderDetail = Optional.ofNullable(orderDetailRepository.findByProduct_IdAndUser_Id(detailDto.getProductId(), detailDto.getUserId()));
// neu chua ton tai va so luong them vao gio phai be hon
        if (optionalOrderDetail.isEmpty() && detailDto.getQuantity() <= quantityProduct) {

            OrderDetail orderDetail = OrderDetail.builder() //create orderDetail ( product + quantity + total )
                    .product(product.get())
                    .quantity(detailDto.getQuantity())
                    .total(detailDto.getQuantity() * product.get().getSellPrice())
                    .user(user.get())
                    .build();

            return orderDetailRepository.save(orderDetail);
            // neu da ton tai va so luong them vao gio phai be hon
        } else if ((detailDto.getQuantity() + optionalOrderDetail.get().getQuantity()) <= quantityProduct) {
            optionalOrderDetail.get().setQuantity(detailDto.getQuantity() + optionalOrderDetail.get().getQuantity());
            optionalOrderDetail.get().setTotal((detailDto.getQuantity() + optionalOrderDetail.get().getQuantity()) * product.get().getSellPrice());
            return orderDetailRepository.save(optionalOrderDetail.get());
        } else {
            return null;
        }
    }

    public Orders clickBuy(@RequestBody InfoUserShoppingDto info) {

        Optional<Status> status = statusRepository.findById(1L);
        Optional<User> user = userRepository.findById(info.getUserId());

//        lay ra danh sach san pham hien co trong gio hang theo id khach
//        Set<OrderDetail> orderDetails = orderDetailRepository.findByUser_Id(user.get().getId());

        List<CartItem> cartItems = cartItemRepository.getByUser_Id(user.get().getId());
        Set<OrderDetail> orderDetails = new HashSet<>();
        for (var s : cartItems
        ) {
            orderDetails.add(OrderDetail.builder()
                    .user(s.getUser())
                    .total(s.getTotal())
                    .product(s.getProduct())
                    .quantity(s.getQuantity())
                    .build());
        }

//        Total
//        Variable used in lambda expression should be final or effectively final
        final Long[] total = {0L};
        orderDetails.forEach(s -> {
            total[0] += s.getTotal();
        });
//        chiet khau hoa don theo rank
        int disscount = user.get().getRanking() == null ? 0 : user.get().getRanking().getDiscount();
        if (disscount > 0) {
            total[0] = total[0] - ((total[0] * disscount) / 100);
        }

        Orders order = Orders.builder()
                .createAt(new Date(System.currentTimeMillis()))
                .note(info.getNote())
                .totalPrice(total[0])
                .orderDetails(orderDetails) //
                .status(status.get())
                .user(user.get()) //
                .ship(20000)
                .disscount(disscount)
                .addressUser(info.getAddressUser()) //
                .nameUser(info.getNameUser()) //
                .phoneUser(info.getPhoneUser()) //
                .point(info.getPoint())
                .build();

        ordersRepository.save(order);

//        tru diem neu khach dung
        if (info.getPoint() > 0) {
            Double point = Double.valueOf(user.get().getPoint());
            user.get().setPoint(String.valueOf(point - info.getPoint()));
        }

//        tich diem cho hoa don tren 200k theo 1%
        if (total[0] > 200000) {
            Long point = (total[0]) / 100;
            user.get().setPoint(user.get().getPoint() + point);
//            cap nhap rank
            Optional<Ranking> ranking = updateRank(Long.valueOf(user.get().getPoint() + point));
            user.get().setRanking(ranking.get());
            userRepository.save(user.get());
//            Bat dau tinh ngay tich diem
            if (user.get().getRank_date() == null) {
                user.get().setRank_date(new Date(System.currentTimeMillis()));
            }
        }

//        update lai so luong san pham va luot ban
        for (var s : orderDetails
        ) {
            Product product = productRepository.getProductById(s.getProduct().getId());
            product.setQuantity(product.getQuantity() - s.getQuantity());
            product.setSold(product.getSold() + s.getQuantity());

            productRepository.save(product);
        }

        //        xoa cac detail khi khach click mua hang
//        orderDetailRepository.deleteAll(orderDetails);
//        cartItemRepository.deleteAll(cartItems);
        cartItemRepository.deleteAllCartItem();

        return order;
    }


    public Orders clickCancelOrder(Long id) {
        Optional<Orders> orders = ordersRepository.findById(id);
        Optional<Status> status = statusRepository.findById(5L);
//        chuyen trang thai huy don
        orders.get().setStatus(status.get());
//        cap nhat lai so luong san pham
        Set<OrderDetail> orderDetails = orders.get().getOrderDetails();
        for (var s : orderDetails
        ) {
            Product product = s.getProduct();
            product.setSold(product.getSold() - s.getQuantity());
            product.setQuantity(product.getQuantity() + s.getQuantity());

            productRepository.save(product);
        }
        return ordersRepository.save(orders.get());
    }

    public Optional<Ranking> updateRank(Long point) {
        if (point < 100) {
            return rankingRepository.findById(1L);
        } else if (point > 100 && point < 700) {
            return rankingRepository.findById(2L);
        } else if (point > 700 && point < 7000) {
            return rankingRepository.findById(3L);
        } else {
            return rankingRepository.findById(4L);
        }
    }
    //  NEW DATA RATING ->  DANH GIA DON HANG CHECKING = 0;
    public Rating ratingProduct(Rating rating) {
        return null;
    }

    //    XAC NHAN DANH GIA CHECKING = 1 -> UPDATE AVG_RATING(product)

    public Rating updateCheckingProduct(Rating rating) {
        return null;
    }
}

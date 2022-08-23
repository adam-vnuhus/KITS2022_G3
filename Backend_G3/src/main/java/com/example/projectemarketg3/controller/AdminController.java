package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.dto.RatingDto;
import com.example.projectemarketg3.entity.*;
import com.example.projectemarketg3.exception.NotFoundException;
import com.example.projectemarketg3.repository.*;
import com.example.projectemarketg3.request.StatusOrderRequest;
import com.example.projectemarketg3.service.ShoppingService;
import com.example.projectemarketg3.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class AdminController {
    @Autowired
    private ShoppingService shoppingService;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;
    @Autowired
    private StatusRepository statusRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RankingRepository rankingRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private RatingRepository ratingRepository;
    @Autowired
    private SupplierRepository supplierRepository;

//=========================== CATEGORY ===============================================

    // create a new category rest api
    @PostMapping("/api/admin/category")
    public Category createCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    // update category rest api
    @PutMapping("/api/admin/category/{id}")
    public ResponseEntity<Category> updatedCategory(@PathVariable Long id, @RequestBody Category categoryDetails) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("category not exist with id :" + id));

        category.setName(categoryDetails.getName());
        return ResponseEntity.ok(categoryRepository.save(category));
    }

    //    delete by id
    @DeleteMapping("/api/admin/category/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Long id) {
        Category category = categoryRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("category not exist with id :" + id));
        categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

//================================= ORDER =====================================

    // update order rest api
    @PutMapping("/api/admin/orders/{id}")
    public ResponseEntity<Orders> updateOrder(@PathVariable Long id, @RequestBody Orders orderDetails) {
        Orders order = ordersRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("order not found with id :" + id));

        order.setNote(orderDetails.getNote());
        order.setTotalPrice(orderDetails.getTotalPrice());
        order.setOrderDetails(orderDetails.getOrderDetails());
        order.setStatus(orderDetails.getStatus());
        order.setUser(orderDetails.getUser());

        ordersRepository.save(order);
        return ResponseEntity.ok(order);
    }

    // delete order rest api
    @DeleteMapping("/api/admin/orders/{id}")
    public Orders deleteOrder(@PathVariable Long id) {
        Orders order = ordersRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("order not exist with id :" + id));
        ordersRepository.delete(order);
        return order;
    }

//======================= DETAILS ORDER ============================

    // delete order detail rest api
    @DeleteMapping("/api/admin/orders/details/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteOrderDetails(@PathVariable Long id) {
        OrderDetail orderdetails = orderDetailRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("orderdetails not exist with id :" + id));
        orderDetailRepository.delete(orderdetails);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

//    ============================== PRODUCT ===============================

    // create a new product rest api
    @PostMapping("/api/admin/products")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    // delete product rest api
    @DeleteMapping("/api/admin/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("product not exist with id :" + id));
        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

//    nhap them hang
    @PutMapping("/api/admin/products/{id}")
    public Product updateQuantityProduct(@PathVariable Long id, @RequestParam Integer quantity) {
        Product product = productRepository.getProductById(id);
        product.setQuantity(product.getQuantity() + quantity);
        product.setStatsusSell(true);
        return productRepository.save(product);
    }

    //====================================== RANK =========================================
    @PostMapping("/api/admin/rank")
    public Ranking createNewRanking(@RequestBody Ranking ranking) {
        return rankingRepository.save(ranking);
    }

    @PutMapping("/api/admin/rank/{id}")
    public Ranking updateRankingById(@PathVariable Long id, @RequestParam Integer discount) {
        Optional<Ranking> rankingOptional = rankingRepository.findById(id);
        if (rankingOptional.isEmpty()) throw new RuntimeException("not found Ranking id = " + id);

        Ranking rankingNew = rankingOptional.get();
        rankingNew.setDiscount(discount);
        rankingRepository.save(rankingNew);
        return rankingNew;
    }

    //    ====================================== RATING =======================================
// create a new rating rest api
    @PostMapping("/api/user/rating")
    public Rating createRating(@RequestBody RatingDto ratingDto) {

        Optional<User> user = userRepository.findById(ratingDto.getUserId());
        Optional<Product> product = productRepository.findById(ratingDto.getProductId());

        Rating rating = Rating.builder()
                .createAt(ratingDto.getCreateAt())
                .note(ratingDto.getNote())
                .image(ratingDto.getImage())
                .star(ratingDto.getStar())
                .checking(false)
                .user(user.get())
                .product(product.get())
                .build();

        return ratingRepository.save(rating);
    }


    // update rating rest api
    @PutMapping("/api/user/rating/{id}")
    public ResponseEntity<Rating> updateRating(@PathVariable Long id, @RequestBody Boolean check) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("rating not exist with id :" + id));

        rating.setCreateAt(new Date(System.currentTimeMillis()));
        rating.setChecking(check);

        ratingRepository.save(rating);

        return ResponseEntity.ok(ratingRepository.save(rating));
    }

    // delete rating rest api
    @DeleteMapping("/api/admin/rating/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteRating(@PathVariable Long id) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("rating not exist with id :" + id));
        ratingRepository.delete(rating);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //    XAC NHAN DANH GIA CHECKING = true -> UPDATE AVG_RATING(product)
    @PutMapping("/api/admin/rating-product/{id}")
    public Rating updateCheckingProduct(@PathVariable Long id) {
        return shoppingService.updateCheckingProduct(id);
    }


    //    ========================= SUPPLIER ==========================================
    @PostMapping("/api/admin/supplier")
    public Supplier createSupplier(@RequestBody Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    // update supplier rest api
    @PutMapping("/api/admin/supplier/{id}")
    public ResponseEntity<Supplier> updateSupplier(@PathVariable Long id, @RequestParam String name) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("supplier not exist with id :" + id));

        supplier.setName(name);

        supplierRepository.save(supplier);

        return ResponseEntity.ok(supplier);
    }

    // delete supplier rest api
    @DeleteMapping("/api/admin/supplier/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteSupplier(@PathVariable Long id) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("supplier not exist with id :" + id));
        supplierRepository.delete(supplier);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //    =============================== USER ====================================
// Sửa thông tin User
    @PutMapping("/api/user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User User = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User not exist with id :" + id));

        if (userDetails.getName() != null) User.setName(userDetails.getName());
        if (userDetails.getDob() != null) User.setDob(userDetails.getDob());
        if (userDetails.getEmail() != null) User.setEmail(userDetails.getEmail());
        if (userDetails.getGender() != null) User.setGender(userDetails.getGender());
        if (userDetails.getPhone() != null) User.setPhone(userDetails.getPhone());
        if (userDetails.getAddress() != null) User.setAddress(userDetails.getAddress());
        if (userDetails.getImage() != null) User.setImage(userDetails.getImage());
        if (userDetails.getPassword() != null) User.setPassword(userDetails.getPassword());
        User updatedUser = userRepository.save(User);
        return ResponseEntity.ok(updatedUser);
    }

    //    ========================================= PURCHASES =================================
//    lay ra cac oder trong thang
    @GetMapping("/api/admin/purchases/{month}")
    public List<Orders> getOrdersByCreateAt_Month(@PathVariable Integer month) {
        return ordersRepository.getOrdersByMonth(month);
    }

//    ================================= Shopping ======================================================

    //    UPDATE STATUS ORDER
    @PutMapping("/api/admin/update-status-order")
    public String clickUpdateOrderStaus(@RequestBody StatusOrderRequest request) {
        Optional<Orders> orders = ordersRepository.findById(request.getOrderId());
        Optional<Status> status = statusRepository.findById(request.getStatusId());

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (orders.get().getUserSucceed() == null || orders.get().getUserSucceed().getId().equals(user.getId())) {

            orders.get().setStatus(status.get());
            orders.get().setUserSucceed(user);
             ordersRepository.save(orders.get());
             return "Cap nhat trang thai don hang thanh cong ";
        } else {
           return "Don hang chi duoc xac nhan boi 1 Admin";
        }


    }
}

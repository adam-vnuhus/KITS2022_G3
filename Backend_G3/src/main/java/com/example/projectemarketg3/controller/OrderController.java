package com.example.projectemarketg3.controller;

import com.example.projectemarketg3.entity.OrderDetail;
import com.example.projectemarketg3.entity.Orders;
import com.example.projectemarketg3.repository.OrderDetailRepository;
import com.example.projectemarketg3.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.projectemarketg3.exception.NotFoundException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/orders")
public class OrderController {


    @Autowired
    private OrdersRepository ordersRepository;
    @Autowired
    private OrderDetailRepository orderDetailRepository;


    @GetMapping
    public List<Orders> getAllOrder(){
        return ordersRepository.findAll();
    }

    // create a new order rest api
    @PostMapping("/")
    public Orders createOrder(@RequestBody Orders order) {
        return ordersRepository.save(order);
    }

    // get order by ID rest api
    @GetMapping("/{id}")
    public ResponseEntity<Orders> getOrderById(@PathVariable Long id) {
        Orders order = ordersRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("order not exist with id :" + id));
        return ResponseEntity.ok(order);
    }

    // update order rest api
//    @PutMapping("/orders/{id}")
//    public  ResponseEntity <Orders> updateOrder(@PathVariable Long id, @RequestBody Orders orderDetails){
//        Orders order = ordersRepository.findById(id)
//                .orElseThrow (()->new NotFoundException
//                        ("order not exist with id :" + id));
//
//        order.set(orderDetails.get());
//        order.set(orderDetails.get());
//        order.set(orderDetails.get());
//
//        Orders updatedorder = ordersRepository.save(order);
//
//        return  ResponseEntity.ok(updatedorder);
//    }

    // delete order rest api
    @DeleteMapping("/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteOrder(@PathVariable Long id){
        Orders order = ordersRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("order not exist with id :" + id));
        ordersRepository.delete(order);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    //----------------------------------------------- DETAILS-----------------------------------------------------------

    @GetMapping("/details")
    public List<OrderDetail> getAllDetail(){
        return orderDetailRepository.findAll();
    }

    // create a new order detail rest api
    @PostMapping("/details")
    public OrderDetail createOrderDetails(@RequestBody OrderDetail orderDetail) {
        return orderDetailRepository.save(orderDetail);
    }

    // get order detail by OrderID rest api
    @GetMapping("/{id}/details")
    public List<OrderDetail> getOrderDetailsByOrderId(@PathVariable Long id) {
        return orderDetailRepository.getOrderDetailsByOrdersId(id);
    }

    //     get order detail by detail ID rest api
    @GetMapping("/details/{id}")
    public ResponseEntity<OrderDetail> getOrderDetailsById(@PathVariable Long id) {
        OrderDetail orderDetails = orderDetailRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("orderDetails not exist with id :" + id));
        return ResponseEntity.ok(orderDetails);
    }

    //     get order detail by detail ID rest api in 1 order
    @GetMapping("/*/details/{idd}")
    public ResponseEntity<OrderDetail> getOrderDetailsByIdInOneOrder(@PathVariable Long idd) {
        OrderDetail orderDetails = orderDetailRepository.findById(idd)
                .orElseThrow(() -> new NotFoundException
                        ("orderDetails not exist with id :" + idd));
        return ResponseEntity.ok(orderDetails);
    }

//     update order detail rest api
//    @PutMapping("/details/{id}")
//    public  ResponseEntity <OrderDetail> updateorderdetails(@PathVariable Long id, @RequestBody OrderDetail orderDetail){
//        OrderDetail orderdetails = orderDetailRepository.findById(id)
//                .orElseThrow (()->new NotFoundException
//                        ("orderdetails not exist with id :" + id));
//
//        orderdetails.set(orderDetail.get());
//        orderdetails.set(orderDetail.get());
//        orderdetails.set(orderDetail.get());
//
//        OrderDetail updatedOrderDetails = orderDetailRepository.save(orderdetails);
//
//        return  ResponseEntity.ok(updatedorderdetails);
//    }

    // delete order detail rest api
    @DeleteMapping("/details/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteOrderDetails(@PathVariable Long id){
        OrderDetail orderdetails = orderDetailRepository.findById(id)
                .orElseThrow(() -> new NotFoundException
                        ("orderdetails not exist with id :" + id));
        orderDetailRepository.delete(orderdetails);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/purchases/{id}")
    public long purchasesProductById(@PathVariable Long id){
        return orderDetailRepository.countByProduct_Id(id);
    }

}

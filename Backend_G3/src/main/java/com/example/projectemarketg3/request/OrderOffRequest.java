package com.example.projectemarketg3.request;

import com.example.projectemarketg3.entity.Status;
import com.example.projectemarketg3.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderOffRequest {
    private Date createAt;
    private Long totalPrice;
    private Long statusId;
    private Long userId;
    private Long adminId;
    private String productId;
}

package com.example.projectemarketg3.dto;

import lombok.*;

import java.sql.Date;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class InfoUserShoppingDto {
    private Date createAt;
    private Long totalPrice;
    private Set<Long> orderDetailsId;
    private String status;
    private Long userId;
    private Integer ship;

}

package com.example.projectemarketg3.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DetailDto {
    private Integer quantity;
    private Long total;
    private Long productId;
}

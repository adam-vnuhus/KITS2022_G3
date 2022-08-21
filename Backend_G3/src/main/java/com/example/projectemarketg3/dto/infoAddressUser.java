package com.example.projectemarketg3.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class infoAddressUser {
    private Long userId;
    private String note;
    private String addressUser;
    private String nameUser;
    private String phoneUser;
}

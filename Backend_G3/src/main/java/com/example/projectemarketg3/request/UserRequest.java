package com.example.projectemarketg3.request;

import com.example.projectemarketg3.entity.Ranking;
import lombok.*;

import java.sql.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class UserRequest {
    private Long id;
    private String name;
    private String email;
    private Date dob;
    private String gender;
    private String phone;
    private String address;
    private String image;
    private String point;
    private Ranking ranking;
    private Date rank_date;
}

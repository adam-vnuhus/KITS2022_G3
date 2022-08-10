package com.example.Project_eMarket_G3.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "oder")
public class Oder {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;


    @OneToMany(mappedBy = "oder", orphanRemoval = true)
    private Set<OderDetail> oderDetails = new LinkedHashSet<>();

    @Column(name = "create_at")
    private Date createAt;

    @Column(name = "note")
    private String note;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "total_price")
    private String totalPrice;

    @Column(name = "type")
    private String type;

}
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
@Table
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "create_at")
    private Date createAt;

    @Column(name = "note")
    private String note;

    @Column(name = "total_price")
    private String totalPrice;

    @OneToMany(mappedBy = "orders", orphanRemoval = true)
    private Set<OrderDetail> orderDetails = new LinkedHashSet<>();

    @ManyToOne
    @JoinColumn(name = "type_id")
    private Type type;

}

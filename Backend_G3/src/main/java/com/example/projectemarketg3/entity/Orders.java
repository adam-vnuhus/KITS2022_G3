package com.example.projectemarketg3.entity;

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
@ToString
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
    private Long totalPrice;

    @OneToMany(mappedBy = "orders", orphanRemoval = false, cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    private Set<OrderDetail> orderDetails = new LinkedHashSet<>();


    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @PreRemove
    public void preRemove() {
        orderDetails.forEach(s -> s.setOrders(null));
        orderDetails.clear();
    }


    @PrePersist
    public void prePersist() {
        orderDetails.forEach(s -> s.setOrders(this));
    }
}

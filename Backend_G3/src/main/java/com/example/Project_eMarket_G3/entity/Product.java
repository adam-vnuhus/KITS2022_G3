package com.example.Project_eMarket_G3.entity;

import com.example.Project_eMarket_G3.Order;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.sql.Date;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "price_out")
    private Long priceOut;

    @Column(name = "price_in")
    private Long priceIn;

    @Column(name = "image")
    private String image;

    @Column(name = "purchases")
    private String purchases;

    @Column(name = "sold")
    private Integer sold;

    @Column(name = "create_at")
    private Date createAt;

    @Column(name = "update_at")
    private Date updateAt;

    @Column(name = "origin")
    private String origin;

    @OneToOne(orphanRemoval = true)
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @OneToMany(mappedBy = "product", orphanRemoval = true)
    private Set<InOutput> inOutputs = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product", orphanRemoval = true)
    private Set<Rating> ratings = new LinkedHashSet<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Product product = (Product) o;
        return id != null && Objects.equals(id, product.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
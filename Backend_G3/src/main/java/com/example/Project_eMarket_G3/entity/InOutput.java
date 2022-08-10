package com.example.Project_eMarket_G3.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "in_output")
public class InOutput {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Temporal(TemporalType.DATE)
    @Column(name = "create_at")
    private Date create_at;

    @Column(name = "type")
    private String type;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "total", nullable = false)
    private long total;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        InOutput inOutput = (InOutput) o;
        return id != null && Objects.equals(id, inOutput.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
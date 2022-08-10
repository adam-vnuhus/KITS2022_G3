package com.example.Project_eMarket_G3.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "oder_detail")
public class OderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;


    @Column(name = "quantity")
    private Integer quantity;

    @OneToMany(mappedBy = "oder", orphanRemoval = true)
    private Set<Product> products = new LinkedHashSet<>();
    @ManyToOne
    @JoinColumn(name = "oder_id")
    private Oder oder;

    @Column(name = "total")
    private Long total;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        OderDetail that = (OderDetail) o;
        return id != null && Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
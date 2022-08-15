package com.example.projectemarketg3.entity;

import lombok.*;

import javax.persistence.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "url")
    private String url;

    @Column(name = "note")
    private String note;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

}
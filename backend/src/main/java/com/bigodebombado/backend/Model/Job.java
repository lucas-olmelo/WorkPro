package com.bigodebombado.backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "job")
public class Job {

    private Long id;
    private String title;
    private String enterpriseName;
    private String description;
    private String wage;

    public Job() {
    }

    public Job(String title, String enterpriseName, String description, String wage) {
        this.title = title;
        this.enterpriseName = enterpriseName;
        this.description = description;
        this.wage = wage;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "jobTitle")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(name = "entName")
    public String getEnterpriseName() {
        return enterpriseName;
    }

    public void setEnterpriseName(String enterpriseName) {
        this.enterpriseName = enterpriseName;
    }

    @Column(name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "wage")
    public String getWage() {
        return wage;
    }

    public void setWage(String wage) {
        this.wage = wage;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", enterpriseName='" + enterpriseName + '\'' +
                ", description='" + description + '\'' +
                ", wage='" + wage + '\'' +
                '}';
    }
}

package com.bigodebombado.backend.Model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "post")
public class Post {

    private long id;
    private String postText;
    private Date timestamp;
    private String user;

    public Post() {
    }

    public Post(String postText, Date timestamp) {
        this.postText = postText;
        this.timestamp = timestamp;
    }

    public Post(String postText, Date timestamp, String user) {
        this.postText = postText;
        this.timestamp = timestamp;
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "postText")
    public String getPostText() {
        return postText;
    }

    public void setPostText(String postText) {
        this.postText = postText;
    }

    @Column(name = "timestamp")
    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", postText='" + postText + '\'' +
                ", timestamp=" + timestamp +
                '}';
    }
}
